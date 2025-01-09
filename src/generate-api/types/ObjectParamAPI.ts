import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { PageResponseUserDto } from '../models/PageResponseUserDto';
import { Pageable } from '../models/Pageable';
import { PermissionDto } from '../models/PermissionDto';
import { ProfileDto } from '../models/ProfileDto';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { RoleCreateUpdateRequest } from '../models/RoleCreateUpdateRequest';
import { RoleDto } from '../models/RoleDto';
import { TeamCreateUpdateRequest } from '../models/TeamCreateUpdateRequest';
import { TeamDto } from '../models/TeamDto';
import { TicketDto } from '../models/TicketDto';
import { TicketRequest } from '../models/TicketRequest';
import { TimesheetDto } from '../models/TimesheetDto';
import { UserCreateUpdateRequest } from '../models/UserCreateUpdateRequest';
import { UserDto } from '../models/UserDto';
import { UserFullDto } from '../models/UserFullDto';
import { WorkTime } from '../models/WorkTime';
import { WorkTimeCreateUpdateRequest } from '../models/WorkTimeCreateUpdateRequest';
import { WorkTimeDto } from '../models/WorkTimeDto';

import { ObservableAccountControllerApi } from "./ObservableAPI";
import { AccountControllerApiRequestFactory, AccountControllerApiResponseProcessor} from "../apis/AccountControllerApi";

export interface AccountControllerApiGetCurrentUserRequest {
}

export interface AccountControllerApiLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AccountControllerApilogin
     */
    loginRequest: LoginRequest
}

export interface AccountControllerApiRefreshTokenRequest {
    /**
     * 
     * @type RefreshRequest
     * @memberof AccountControllerApirefreshToken
     */
    refreshRequest?: RefreshRequest
}

export class ObjectAccountControllerApi {
    private api: ObservableAccountControllerApi

    public constructor(configuration: Configuration, requestFactory?: AccountControllerApiRequestFactory, responseProcessor?: AccountControllerApiResponseProcessor) {
        this.api = new ObservableAccountControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getCurrentUserWithHttpInfo(param: AccountControllerApiGetCurrentUserRequest = {}, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.getCurrentUserWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCurrentUser(param: AccountControllerApiGetCurrentUserRequest = {}, options?: Configuration): Promise<UserDto> {
        return this.api.getCurrentUser( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public loginWithHttpInfo(param: AccountControllerApiLoginRequest, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.loginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: AccountControllerApiLoginRequest, options?: Configuration): Promise<LoginResponse> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public refreshTokenWithHttpInfo(param: AccountControllerApiRefreshTokenRequest = {}, options?: Configuration): Promise<HttpInfo<RefreshResponse>> {
        return this.api.refreshTokenWithHttpInfo(param.refreshRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public refreshToken(param: AccountControllerApiRefreshTokenRequest = {}, options?: Configuration): Promise<RefreshResponse> {
        return this.api.refreshToken(param.refreshRequest,  options).toPromise();
    }

}

import { ObservableApprovalControllerApi } from "./ObservableAPI";
import { ApprovalControllerApiRequestFactory, ApprovalControllerApiResponseProcessor} from "../apis/ApprovalControllerApi";

export interface ApprovalControllerApiGetCandidatesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type &#39;TIMESHEET_ADJUSTMENT&#39; | &#39;LEAVE_REQUEST&#39; | &#39;OVERTIME_REQUEST&#39; | &#39;WORK_FROM_HOME&#39;
     * @memberof ApprovalControllerApigetCandidates
     */
    ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME'
}

export class ObjectApprovalControllerApi {
    private api: ObservableApprovalControllerApi

    public constructor(configuration: Configuration, requestFactory?: ApprovalControllerApiRequestFactory, responseProcessor?: ApprovalControllerApiResponseProcessor) {
        this.api = new ObservableApprovalControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getCandidatesWithHttpInfo(param: ApprovalControllerApiGetCandidatesRequest, options?: Configuration): Promise<HttpInfo<Array<UserDto>>> {
        return this.api.getCandidatesWithHttpInfo(param.ticketType,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCandidates(param: ApprovalControllerApiGetCandidatesRequest, options?: Configuration): Promise<Array<UserDto>> {
        return this.api.getCandidates(param.ticketType,  options).toPromise();
    }

}

import { ObservableDataInitializerControllerApi } from "./ObservableAPI";
import { DataInitializerControllerApiRequestFactory, DataInitializerControllerApiResponseProcessor} from "../apis/DataInitializerControllerApi";

export interface DataInitializerControllerApiInitializeDataRequest {
}

export class ObjectDataInitializerControllerApi {
    private api: ObservableDataInitializerControllerApi

    public constructor(configuration: Configuration, requestFactory?: DataInitializerControllerApiRequestFactory, responseProcessor?: DataInitializerControllerApiResponseProcessor) {
        this.api = new ObservableDataInitializerControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public initializeDataWithHttpInfo(param: DataInitializerControllerApiInitializeDataRequest = {}, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.initializeDataWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public initializeData(param: DataInitializerControllerApiInitializeDataRequest = {}, options?: Configuration): Promise<string> {
        return this.api.initializeData( options).toPromise();
    }

}

import { ObservableRoleControllerApi } from "./ObservableAPI";
import { RoleControllerApiRequestFactory, RoleControllerApiResponseProcessor} from "../apis/RoleControllerApi";

export interface RoleControllerApiCreateRoleRequest {
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleControllerApicreateRole
     */
    roleCreateUpdateRequest: RoleCreateUpdateRequest
}

export interface RoleControllerApiDeleteRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RoleControllerApideleteRole
     */
    id: number
}

export interface RoleControllerApiGetRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RoleControllerApigetRole
     */
    id: number
}

export interface RoleControllerApiGetRolesRequest {
}

export interface RoleControllerApiUpdateRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof RoleControllerApiupdateRole
     */
    id: number
    /**
     * 
     * @type RoleCreateUpdateRequest
     * @memberof RoleControllerApiupdateRole
     */
    roleCreateUpdateRequest: RoleCreateUpdateRequest
}

export class ObjectRoleControllerApi {
    private api: ObservableRoleControllerApi

    public constructor(configuration: Configuration, requestFactory?: RoleControllerApiRequestFactory, responseProcessor?: RoleControllerApiResponseProcessor) {
        this.api = new ObservableRoleControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createRoleWithHttpInfo(param: RoleControllerApiCreateRoleRequest, options?: Configuration): Promise<HttpInfo<RoleDto>> {
        return this.api.createRoleWithHttpInfo(param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createRole(param: RoleControllerApiCreateRoleRequest, options?: Configuration): Promise<RoleDto> {
        return this.api.createRole(param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRoleWithHttpInfo(param: RoleControllerApiDeleteRoleRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteRole(param: RoleControllerApiDeleteRoleRequest, options?: Configuration): Promise<string> {
        return this.api.deleteRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRoleWithHttpInfo(param: RoleControllerApiGetRoleRequest, options?: Configuration): Promise<HttpInfo<RoleDto>> {
        return this.api.getRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRole(param: RoleControllerApiGetRoleRequest, options?: Configuration): Promise<RoleDto> {
        return this.api.getRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRolesWithHttpInfo(param: RoleControllerApiGetRolesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<RoleDto>>> {
        return this.api.getRolesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getRoles(param: RoleControllerApiGetRolesRequest = {}, options?: Configuration): Promise<Array<RoleDto>> {
        return this.api.getRoles( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRoleWithHttpInfo(param: RoleControllerApiUpdateRoleRequest, options?: Configuration): Promise<HttpInfo<RoleDto>> {
        return this.api.updateRoleWithHttpInfo(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateRole(param: RoleControllerApiUpdateRoleRequest, options?: Configuration): Promise<RoleDto> {
        return this.api.updateRole(param.id, param.roleCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableTeamControllerApi } from "./ObservableAPI";
import { TeamControllerApiRequestFactory, TeamControllerApiResponseProcessor} from "../apis/TeamControllerApi";

export interface TeamControllerApiCreateTeamRequest {
    /**
     * 
     * @type TeamCreateUpdateRequest
     * @memberof TeamControllerApicreateTeam
     */
    teamCreateUpdateRequest: TeamCreateUpdateRequest
}

export interface TeamControllerApiDeleteTeamRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamControllerApideleteTeam
     */
    id: number
}

export interface TeamControllerApiGetTeamRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamControllerApigetTeam
     */
    id: number
}

export interface TeamControllerApiGetTeamsRequest {
}

export interface TeamControllerApiUpdateTeamRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TeamControllerApiupdateTeam
     */
    id: number
    /**
     * 
     * @type TeamCreateUpdateRequest
     * @memberof TeamControllerApiupdateTeam
     */
    teamCreateUpdateRequest: TeamCreateUpdateRequest
}

export class ObjectTeamControllerApi {
    private api: ObservableTeamControllerApi

    public constructor(configuration: Configuration, requestFactory?: TeamControllerApiRequestFactory, responseProcessor?: TeamControllerApiResponseProcessor) {
        this.api = new ObservableTeamControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createTeamWithHttpInfo(param: TeamControllerApiCreateTeamRequest, options?: Configuration): Promise<HttpInfo<TeamDto>> {
        return this.api.createTeamWithHttpInfo(param.teamCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTeam(param: TeamControllerApiCreateTeamRequest, options?: Configuration): Promise<TeamDto> {
        return this.api.createTeam(param.teamCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTeamWithHttpInfo(param: TeamControllerApiDeleteTeamRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteTeamWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteTeam(param: TeamControllerApiDeleteTeamRequest, options?: Configuration): Promise<string> {
        return this.api.deleteTeam(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTeamWithHttpInfo(param: TeamControllerApiGetTeamRequest, options?: Configuration): Promise<HttpInfo<TeamDto>> {
        return this.api.getTeamWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTeam(param: TeamControllerApiGetTeamRequest, options?: Configuration): Promise<TeamDto> {
        return this.api.getTeam(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTeamsWithHttpInfo(param: TeamControllerApiGetTeamsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TeamDto>>> {
        return this.api.getTeamsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTeams(param: TeamControllerApiGetTeamsRequest = {}, options?: Configuration): Promise<Array<TeamDto>> {
        return this.api.getTeams( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTeamWithHttpInfo(param: TeamControllerApiUpdateTeamRequest, options?: Configuration): Promise<HttpInfo<TeamDto>> {
        return this.api.updateTeamWithHttpInfo(param.id, param.teamCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateTeam(param: TeamControllerApiUpdateTeamRequest, options?: Configuration): Promise<TeamDto> {
        return this.api.updateTeam(param.id, param.teamCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableTicketControllerApi } from "./ObservableAPI";
import { TicketControllerApiRequestFactory, TicketControllerApiResponseProcessor} from "../apis/TicketControllerApi";

export interface TicketControllerApiApprovalTicketRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TicketControllerApiapprovalTicket
     */
    id: number
}

export interface TicketControllerApiCancelTicketRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TicketControllerApicancelTicket
     */
    id: number
}

export interface TicketControllerApiCreateTicketRequest {
    /**
     * 
     * @type TicketRequest
     * @memberof TicketControllerApicreateTicket
     */
    ticketRequest: TicketRequest
}

export interface TicketControllerApiGetTicketRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof TicketControllerApigetTicket
     */
    id: number
}

export interface TicketControllerApiGetTicketsApproverRequest {
}

export interface TicketControllerApiGetTicketsCreatorRequest {
}

export class ObjectTicketControllerApi {
    private api: ObservableTicketControllerApi

    public constructor(configuration: Configuration, requestFactory?: TicketControllerApiRequestFactory, responseProcessor?: TicketControllerApiResponseProcessor) {
        this.api = new ObservableTicketControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public approvalTicketWithHttpInfo(param: TicketControllerApiApprovalTicketRequest, options?: Configuration): Promise<HttpInfo<TicketDto>> {
        return this.api.approvalTicketWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public approvalTicket(param: TicketControllerApiApprovalTicketRequest, options?: Configuration): Promise<TicketDto> {
        return this.api.approvalTicket(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cancelTicketWithHttpInfo(param: TicketControllerApiCancelTicketRequest, options?: Configuration): Promise<HttpInfo<TicketDto>> {
        return this.api.cancelTicketWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cancelTicket(param: TicketControllerApiCancelTicketRequest, options?: Configuration): Promise<TicketDto> {
        return this.api.cancelTicket(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTicketWithHttpInfo(param: TicketControllerApiCreateTicketRequest, options?: Configuration): Promise<HttpInfo<TicketDto>> {
        return this.api.createTicketWithHttpInfo(param.ticketRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createTicket(param: TicketControllerApiCreateTicketRequest, options?: Configuration): Promise<TicketDto> {
        return this.api.createTicket(param.ticketRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicketWithHttpInfo(param: TicketControllerApiGetTicketRequest, options?: Configuration): Promise<HttpInfo<TicketDto>> {
        return this.api.getTicketWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicket(param: TicketControllerApiGetTicketRequest, options?: Configuration): Promise<TicketDto> {
        return this.api.getTicket(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicketsApproverWithHttpInfo(param: TicketControllerApiGetTicketsApproverRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TicketDto>>> {
        return this.api.getTicketsApproverWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicketsApprover(param: TicketControllerApiGetTicketsApproverRequest = {}, options?: Configuration): Promise<Array<TicketDto>> {
        return this.api.getTicketsApprover( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicketsCreatorWithHttpInfo(param: TicketControllerApiGetTicketsCreatorRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TicketDto>>> {
        return this.api.getTicketsCreatorWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTicketsCreator(param: TicketControllerApiGetTicketsCreatorRequest = {}, options?: Configuration): Promise<Array<TicketDto>> {
        return this.api.getTicketsCreator( options).toPromise();
    }

}

import { ObservableTimesheetControllerApi } from "./ObservableAPI";
import { TimesheetControllerApiRequestFactory, TimesheetControllerApiResponseProcessor} from "../apis/TimesheetControllerApi";

export interface TimesheetControllerApiCheckInRequest {
}

export interface TimesheetControllerApiCheckOutRequest {
}

export interface TimesheetControllerApiGetMonthlyTimesheetsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TimesheetControllerApigetMonthlyTimesheets
     */
    month?: string
}

export interface TimesheetControllerApiGetTimesRequest {
}

export interface TimesheetControllerApiGetTodayTimesheetRequest {
}

export class ObjectTimesheetControllerApi {
    private api: ObservableTimesheetControllerApi

    public constructor(configuration: Configuration, requestFactory?: TimesheetControllerApiRequestFactory, responseProcessor?: TimesheetControllerApiResponseProcessor) {
        this.api = new ObservableTimesheetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public checkInWithHttpInfo(param: TimesheetControllerApiCheckInRequest = {}, options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        return this.api.checkInWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkIn(param: TimesheetControllerApiCheckInRequest = {}, options?: Configuration): Promise<TimesheetDto> {
        return this.api.checkIn( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkOutWithHttpInfo(param: TimesheetControllerApiCheckOutRequest = {}, options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        return this.api.checkOutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkOut(param: TimesheetControllerApiCheckOutRequest = {}, options?: Configuration): Promise<TimesheetDto> {
        return this.api.checkOut( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMonthlyTimesheetsWithHttpInfo(param: TimesheetControllerApiGetMonthlyTimesheetsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TimesheetDto>>> {
        return this.api.getMonthlyTimesheetsWithHttpInfo(param.month,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMonthlyTimesheets(param: TimesheetControllerApiGetMonthlyTimesheetsRequest = {}, options?: Configuration): Promise<Array<TimesheetDto>> {
        return this.api.getMonthlyTimesheets(param.month,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTimesWithHttpInfo(param: TimesheetControllerApiGetTimesRequest = {}, options?: Configuration): Promise<HttpInfo<WorkTime>> {
        return this.api.getTimesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTimes(param: TimesheetControllerApiGetTimesRequest = {}, options?: Configuration): Promise<WorkTime> {
        return this.api.getTimes( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodayTimesheetWithHttpInfo(param: TimesheetControllerApiGetTodayTimesheetRequest = {}, options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        return this.api.getTodayTimesheetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodayTimesheet(param: TimesheetControllerApiGetTodayTimesheetRequest = {}, options?: Configuration): Promise<TimesheetDto> {
        return this.api.getTodayTimesheet( options).toPromise();
    }

}

import { ObservableUserControllerApi } from "./ObservableAPI";
import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";

export interface UserControllerApiCreateUserRequest {
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserControllerApicreateUser
     */
    userCreateUpdateRequest: UserCreateUpdateRequest
}

export interface UserControllerApiDeleteUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UserControllerApideleteUser
     */
    id: number
}

export interface UserControllerApiGetUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UserControllerApigetUser
     */
    id: number
}

export interface UserControllerApiGetUserDetailsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UserControllerApigetUserDetails
     */
    id: number
}

export interface UserControllerApiGetUsersRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Pageable
     * @memberof UserControllerApigetUsers
     */
    pageable: Pageable
}

export interface UserControllerApiUpdateUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof UserControllerApiupdateUser
     */
    id: number
    /**
     * 
     * @type UserCreateUpdateRequest
     * @memberof UserControllerApiupdateUser
     */
    userCreateUpdateRequest: UserCreateUpdateRequest
}

export class ObjectUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(configuration: Configuration, requestFactory?: UserControllerApiRequestFactory, responseProcessor?: UserControllerApiResponseProcessor) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createUserWithHttpInfo(param: UserControllerApiCreateUserRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.createUserWithHttpInfo(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createUser(param: UserControllerApiCreateUserRequest, options?: Configuration): Promise<UserDto> {
        return this.api.createUser(param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteUserWithHttpInfo(param: UserControllerApiDeleteUserRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteUserWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteUser(param: UserControllerApiDeleteUserRequest, options?: Configuration): Promise<string> {
        return this.api.deleteUser(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserWithHttpInfo(param: UserControllerApiGetUserRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.getUserWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUser(param: UserControllerApiGetUserRequest, options?: Configuration): Promise<UserDto> {
        return this.api.getUser(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserDetailsWithHttpInfo(param: UserControllerApiGetUserDetailsRequest, options?: Configuration): Promise<HttpInfo<UserFullDto>> {
        return this.api.getUserDetailsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUserDetails(param: UserControllerApiGetUserDetailsRequest, options?: Configuration): Promise<UserFullDto> {
        return this.api.getUserDetails(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUsersWithHttpInfo(param: UserControllerApiGetUsersRequest, options?: Configuration): Promise<HttpInfo<PageResponseUserDto>> {
        return this.api.getUsersWithHttpInfo(param.pageable,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getUsers(param: UserControllerApiGetUsersRequest, options?: Configuration): Promise<PageResponseUserDto> {
        return this.api.getUsers(param.pageable,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateUserWithHttpInfo(param: UserControllerApiUpdateUserRequest, options?: Configuration): Promise<HttpInfo<UserDto>> {
        return this.api.updateUserWithHttpInfo(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateUser(param: UserControllerApiUpdateUserRequest, options?: Configuration): Promise<UserDto> {
        return this.api.updateUser(param.id, param.userCreateUpdateRequest,  options).toPromise();
    }

}

import { ObservableWorkTimeControllerApi } from "./ObservableAPI";
import { WorkTimeControllerApiRequestFactory, WorkTimeControllerApiResponseProcessor} from "../apis/WorkTimeControllerApi";

export interface WorkTimeControllerApiCreateWorkTimeRequest {
    /**
     * 
     * @type WorkTimeCreateUpdateRequest
     * @memberof WorkTimeControllerApicreateWorkTime
     */
    workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest
}

export interface WorkTimeControllerApiDeleteWorkTimeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeControllerApideleteWorkTime
     */
    id: number
}

export interface WorkTimeControllerApiGetWorkTimeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeControllerApigetWorkTime
     */
    id: number
}

export interface WorkTimeControllerApiGetWorkTimesRequest {
}

export interface WorkTimeControllerApiUpdateWorkTimeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof WorkTimeControllerApiupdateWorkTime
     */
    id: number
    /**
     * 
     * @type WorkTimeCreateUpdateRequest
     * @memberof WorkTimeControllerApiupdateWorkTime
     */
    workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest
}

export class ObjectWorkTimeControllerApi {
    private api: ObservableWorkTimeControllerApi

    public constructor(configuration: Configuration, requestFactory?: WorkTimeControllerApiRequestFactory, responseProcessor?: WorkTimeControllerApiResponseProcessor) {
        this.api = new ObservableWorkTimeControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createWorkTimeWithHttpInfo(param: WorkTimeControllerApiCreateWorkTimeRequest, options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.createWorkTimeWithHttpInfo(param.workTimeCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createWorkTime(param: WorkTimeControllerApiCreateWorkTimeRequest, options?: Configuration): Promise<WorkTimeDto> {
        return this.api.createWorkTime(param.workTimeCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteWorkTimeWithHttpInfo(param: WorkTimeControllerApiDeleteWorkTimeRequest, options?: Configuration): Promise<HttpInfo<string>> {
        return this.api.deleteWorkTimeWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteWorkTime(param: WorkTimeControllerApiDeleteWorkTimeRequest, options?: Configuration): Promise<string> {
        return this.api.deleteWorkTime(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getWorkTimeWithHttpInfo(param: WorkTimeControllerApiGetWorkTimeRequest, options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.getWorkTimeWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getWorkTime(param: WorkTimeControllerApiGetWorkTimeRequest, options?: Configuration): Promise<WorkTimeDto> {
        return this.api.getWorkTime(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getWorkTimesWithHttpInfo(param: WorkTimeControllerApiGetWorkTimesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<WorkTimeDto>>> {
        return this.api.getWorkTimesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getWorkTimes(param: WorkTimeControllerApiGetWorkTimesRequest = {}, options?: Configuration): Promise<Array<WorkTimeDto>> {
        return this.api.getWorkTimes( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateWorkTimeWithHttpInfo(param: WorkTimeControllerApiUpdateWorkTimeRequest, options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        return this.api.updateWorkTimeWithHttpInfo(param.id, param.workTimeCreateUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateWorkTime(param: WorkTimeControllerApiUpdateWorkTimeRequest, options?: Configuration): Promise<WorkTimeDto> {
        return this.api.updateWorkTime(param.id, param.workTimeCreateUpdateRequest,  options).toPromise();
    }

}
