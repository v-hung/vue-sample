import {
  AccountControllerApi,
  ResponseContext,
  TimeSheetControllerApi,
  createConfiguration,
  server1,
  server2,
  type HttpLibrary,
  type RequestContext,
} from '@/generate-api'
import type { ConfigurationParameters } from '@/generate-api/configuration'
import { from, type Observable } from '@/generate-api/rxjsStub'
import 'whatwg-fetch'

// Covers all auth methods included in your OpenAPI yaml definition
// const authConfig: AuthMethodsConfiguration = {
//     "bearerAuth": {
//         tokenProvider: {
//             getToken: async () => {
//                 return "token";
//             }
//         }
//     }
// }

const baseServer = server1

class CustomFetchHttpLibrary implements HttpLibrary {
  private accountApi = new AccountControllerApi(
    createConfiguration({ baseServer: baseServer }),
  )

  public send(request: RequestContext): Observable<ResponseContext> {
    const url = request.getUrl()
    const method = request.getHttpMethod().toString()
    const body = request.getBody()
    const headers = request.getHeaders()

    const resultPromise = fetch(url, {
      method: method,
      body: body as any,
      headers: headers,
      credentials: 'include',
    }).then(async resp => {
      const responseHeaders: { [name: string]: string } = {}
      resp.headers.forEach((value: string, name: string) => {
        responseHeaders[name] = value
      })

      if (resp.status == 401) {
        const token = await this.accountApi.refreshToken({})

        const retryResp = await fetch(url, {
          method: method,
          body: body as any,
          headers: headers,
          credentials: 'include',
        })

        const retryHeaders: { [name: string]: string } = {}
        retryResp.headers.forEach((value: string, name: string) => {
          retryHeaders[name] = value
        })

        const retryBody = {
          text: () => retryResp.text(),
          binary: () => retryResp.blob(),
        }

        return new ResponseContext(resp.status, retryHeaders, retryBody)
      }

      const responseBody = {
        text: () => resp.text(),
        binary: () => resp.blob(),
      }
      return new ResponseContext(resp.status, responseHeaders, responseBody)
    })

    return from<Promise<ResponseContext>>(resultPromise)
  }
}

// Create configuration parameter object
const configurationParameters: ConfigurationParameters = {
  baseServer: baseServer,
  httpApi: new CustomFetchHttpLibrary(),
  // authMethods: authConfig,
  // promiseMiddleware: [],
}

// Convert to actual configuration
const config = createConfiguration(configurationParameters)

// Use configuration with your_api
const accountApi = new AccountControllerApi(config)
const timeSheetApi = new TimeSheetControllerApi(config)

export { accountApi, timeSheetApi }
