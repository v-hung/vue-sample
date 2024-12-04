import {
  ResponseContext,
  type HttpLibrary,
  type RequestContext,
} from '@/generate-api'
import { from, Observable } from '@/generate-api/rxjsStub'
import 'whatwg-fetch'
import { accountApi } from './api'

export class FetchHttpLibrary implements HttpLibrary {
  public send(request: RequestContext): Observable<ResponseContext> {
    let method = request.getHttpMethod().toString()
    let body = request.getBody()

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: request.getHeaders(),
      credentials: 'include',
    }).then((resp: any) => {
      const headers: { [name: string]: string } = {}
      resp.headers.forEach((value: string, name: string) => {
        headers[name] = value
      })

      const body = {
        text: () => resp.text(),
        binary: () => resp.blob(),
      }
      return new ResponseContext(resp.status, headers, body)
    })

    return from<Promise<ResponseContext>>(resultPromise)
  }
}

export class FetchWithRefreshTokenHttpLibrary implements HttpLibrary {
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

      if (resp.status == 403) {
        await accountApi.refreshToken()

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
