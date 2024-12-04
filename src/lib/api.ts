import {
  AccountControllerApi,
  TimeSheetControllerApi,
  createConfiguration,
  server1,
} from '@/generate-api'
import type { ConfigurationParameters } from '@/generate-api/configuration'
import 'whatwg-fetch'
import { FetchHttpLibrary, FetchWithRefreshTokenHttpLibrary } from './fetch'

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

// Create configuration parameter object
const configurationParameters: ConfigurationParameters = {
  baseServer: baseServer,
  httpApi: new FetchHttpLibrary(), //only in develop mode
}

// Convert to actual configuration
export const config = createConfiguration(configurationParameters)
export const configWithRefreshToken = createConfiguration({
  ...configurationParameters,
  httpApi: new FetchWithRefreshTokenHttpLibrary(),
})

// Use configuration with your_api
const accountApi = new AccountControllerApi(config)
const timeSheetApi = new TimeSheetControllerApi(configWithRefreshToken)

export { accountApi, timeSheetApi }
