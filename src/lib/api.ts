import {
  AccountControllerApi,
  ApprovalControllerApi,
  RoleControllerApi,
  TeamControllerApi,
  TicketControllerApi,
  TimesheetControllerApi,
  UserControllerApi,
  WorkTimeControllerApi,
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
  httpApi: new FetchHttpLibrary(),
}

// Convert to actual configuration
export const config = createConfiguration(configurationParameters)
export const configWithRefreshToken = createConfiguration({
  ...configurationParameters,
  httpApi: new FetchWithRefreshTokenHttpLibrary(),
})

// Use configuration with your_api
const accountApi = new AccountControllerApi(config)
const timesheetApi = new TimesheetControllerApi(configWithRefreshToken)
const approvalApi = new ApprovalControllerApi(configWithRefreshToken)
const ticketApi = new TicketControllerApi(configWithRefreshToken)
const userApi = new UserControllerApi(configWithRefreshToken)
const teamApi = new TeamControllerApi(configWithRefreshToken)
const workTimeApi = new WorkTimeControllerApi(configWithRefreshToken)
const roleApi = new RoleControllerApi(configWithRefreshToken)

export {
  accountApi,
  timesheetApi,
  approvalApi,
  ticketApi,
  userApi,
  teamApi,
  workTimeApi,
  roleApi,
}
