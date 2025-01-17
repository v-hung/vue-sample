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
import { UserSearchResponse } from '../models/UserSearchResponse';
import { WorkTime } from '../models/WorkTime';
import { WorkTimeCreateUpdateRequest } from '../models/WorkTimeCreateUpdateRequest';
import { WorkTimeDto } from '../models/WorkTimeDto';
import { ObservableAccountControllerApi } from './ObservableAPI';

import { AccountControllerApiRequestFactory, AccountControllerApiResponseProcessor} from "../apis/AccountControllerApi";
export class PromiseAccountControllerApi {
    private api: ObservableAccountControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountControllerApiRequestFactory,
        responseProcessor?: AccountControllerApiResponseProcessor
    ) {
        this.api = new ObservableAccountControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getCurrentUserWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.getCurrentUserWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getCurrentUser(_options?: Configuration): Promise<UserDto> {
        const result = this.api.getCurrentUser(_options);
        return result.toPromise();
    }

    /**
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        const result = this.api.loginWithHttpInfo(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<LoginResponse> {
        const result = this.api.login(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [refreshRequest]
     */
    public refreshTokenWithHttpInfo(refreshRequest?: RefreshRequest, _options?: Configuration): Promise<HttpInfo<RefreshResponse>> {
        const result = this.api.refreshTokenWithHttpInfo(refreshRequest, _options);
        return result.toPromise();
    }

    /**
     * @param [refreshRequest]
     */
    public refreshToken(refreshRequest?: RefreshRequest, _options?: Configuration): Promise<RefreshResponse> {
        const result = this.api.refreshToken(refreshRequest, _options);
        return result.toPromise();
    }


}



import { ObservableApprovalControllerApi } from './ObservableAPI';

import { ApprovalControllerApiRequestFactory, ApprovalControllerApiResponseProcessor} from "../apis/ApprovalControllerApi";
export class PromiseApprovalControllerApi {
    private api: ObservableApprovalControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApprovalControllerApiRequestFactory,
        responseProcessor?: ApprovalControllerApiResponseProcessor
    ) {
        this.api = new ObservableApprovalControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param ticketType
     */
    public getCandidatesWithHttpInfo(ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME', _options?: Configuration): Promise<HttpInfo<Array<UserDto>>> {
        const result = this.api.getCandidatesWithHttpInfo(ticketType, _options);
        return result.toPromise();
    }

    /**
     * @param ticketType
     */
    public getCandidates(ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME', _options?: Configuration): Promise<Array<UserDto>> {
        const result = this.api.getCandidates(ticketType, _options);
        return result.toPromise();
    }


}



import { ObservableDataInitializerControllerApi } from './ObservableAPI';

import { DataInitializerControllerApiRequestFactory, DataInitializerControllerApiResponseProcessor} from "../apis/DataInitializerControllerApi";
export class PromiseDataInitializerControllerApi {
    private api: ObservableDataInitializerControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DataInitializerControllerApiRequestFactory,
        responseProcessor?: DataInitializerControllerApiResponseProcessor
    ) {
        this.api = new ObservableDataInitializerControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public initializeDataWithHttpInfo(_options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.initializeDataWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public initializeData(_options?: Configuration): Promise<string> {
        const result = this.api.initializeData(_options);
        return result.toPromise();
    }


}



import { ObservableRoleControllerApi } from './ObservableAPI';

import { RoleControllerApiRequestFactory, RoleControllerApiResponseProcessor} from "../apis/RoleControllerApi";
export class PromiseRoleControllerApi {
    private api: ObservableRoleControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RoleControllerApiRequestFactory,
        responseProcessor?: RoleControllerApiResponseProcessor
    ) {
        this.api = new ObservableRoleControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param roleCreateUpdateRequest
     */
    public createRoleWithHttpInfo(roleCreateUpdateRequest: RoleCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<RoleDto>> {
        const result = this.api.createRoleWithHttpInfo(roleCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param roleCreateUpdateRequest
     */
    public createRole(roleCreateUpdateRequest: RoleCreateUpdateRequest, _options?: Configuration): Promise<RoleDto> {
        const result = this.api.createRole(roleCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteRoleWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteRoleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteRole(id: number, _options?: Configuration): Promise<string> {
        const result = this.api.deleteRole(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getRoleWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<RoleDto>> {
        const result = this.api.getRoleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getRole(id: number, _options?: Configuration): Promise<RoleDto> {
        const result = this.api.getRole(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getRolesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<RoleDto>>> {
        const result = this.api.getRolesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getRoles(_options?: Configuration): Promise<Array<RoleDto>> {
        const result = this.api.getRoles(_options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param roleCreateUpdateRequest
     */
    public updateRoleWithHttpInfo(id: number, roleCreateUpdateRequest: RoleCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<RoleDto>> {
        const result = this.api.updateRoleWithHttpInfo(id, roleCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param roleCreateUpdateRequest
     */
    public updateRole(id: number, roleCreateUpdateRequest: RoleCreateUpdateRequest, _options?: Configuration): Promise<RoleDto> {
        const result = this.api.updateRole(id, roleCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTeamControllerApi } from './ObservableAPI';

import { TeamControllerApiRequestFactory, TeamControllerApiResponseProcessor} from "../apis/TeamControllerApi";
export class PromiseTeamControllerApi {
    private api: ObservableTeamControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamControllerApiRequestFactory,
        responseProcessor?: TeamControllerApiResponseProcessor
    ) {
        this.api = new ObservableTeamControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param teamCreateUpdateRequest
     */
    public createTeamWithHttpInfo(teamCreateUpdateRequest: TeamCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<TeamDto>> {
        const result = this.api.createTeamWithHttpInfo(teamCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param teamCreateUpdateRequest
     */
    public createTeam(teamCreateUpdateRequest: TeamCreateUpdateRequest, _options?: Configuration): Promise<TeamDto> {
        const result = this.api.createTeam(teamCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteTeamWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteTeamWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteTeam(id: number, _options?: Configuration): Promise<string> {
        const result = this.api.deleteTeam(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getTeamWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TeamDto>> {
        const result = this.api.getTeamWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getTeam(id: number, _options?: Configuration): Promise<TeamDto> {
        const result = this.api.getTeam(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getTeamsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TeamDto>>> {
        const result = this.api.getTeamsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTeams(_options?: Configuration): Promise<Array<TeamDto>> {
        const result = this.api.getTeams(_options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param teamCreateUpdateRequest
     */
    public updateTeamWithHttpInfo(id: number, teamCreateUpdateRequest: TeamCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<TeamDto>> {
        const result = this.api.updateTeamWithHttpInfo(id, teamCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param teamCreateUpdateRequest
     */
    public updateTeam(id: number, teamCreateUpdateRequest: TeamCreateUpdateRequest, _options?: Configuration): Promise<TeamDto> {
        const result = this.api.updateTeam(id, teamCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTicketControllerApi } from './ObservableAPI';

import { TicketControllerApiRequestFactory, TicketControllerApiResponseProcessor} from "../apis/TicketControllerApi";
export class PromiseTicketControllerApi {
    private api: ObservableTicketControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketControllerApiRequestFactory,
        responseProcessor?: TicketControllerApiResponseProcessor
    ) {
        this.api = new ObservableTicketControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     */
    public approvalTicketWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TicketDto>> {
        const result = this.api.approvalTicketWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public approvalTicket(id: number, _options?: Configuration): Promise<TicketDto> {
        const result = this.api.approvalTicket(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public cancelTicketWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TicketDto>> {
        const result = this.api.cancelTicketWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public cancelTicket(id: number, _options?: Configuration): Promise<TicketDto> {
        const result = this.api.cancelTicket(id, _options);
        return result.toPromise();
    }

    /**
     * @param ticketRequest
     */
    public createTicketWithHttpInfo(ticketRequest: TicketRequest, _options?: Configuration): Promise<HttpInfo<TicketDto>> {
        const result = this.api.createTicketWithHttpInfo(ticketRequest, _options);
        return result.toPromise();
    }

    /**
     * @param ticketRequest
     */
    public createTicket(ticketRequest: TicketRequest, _options?: Configuration): Promise<TicketDto> {
        const result = this.api.createTicket(ticketRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getTicketWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<TicketDto>> {
        const result = this.api.getTicketWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getTicket(id: number, _options?: Configuration): Promise<TicketDto> {
        const result = this.api.getTicket(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getTicketsApproverWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TicketDto>>> {
        const result = this.api.getTicketsApproverWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTicketsApprover(_options?: Configuration): Promise<Array<TicketDto>> {
        const result = this.api.getTicketsApprover(_options);
        return result.toPromise();
    }

    /**
     */
    public getTicketsCreatorWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<TicketDto>>> {
        const result = this.api.getTicketsCreatorWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTicketsCreator(_options?: Configuration): Promise<Array<TicketDto>> {
        const result = this.api.getTicketsCreator(_options);
        return result.toPromise();
    }


}



import { ObservableTimesheetControllerApi } from './ObservableAPI';

import { TimesheetControllerApiRequestFactory, TimesheetControllerApiResponseProcessor} from "../apis/TimesheetControllerApi";
export class PromiseTimesheetControllerApi {
    private api: ObservableTimesheetControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimesheetControllerApiRequestFactory,
        responseProcessor?: TimesheetControllerApiResponseProcessor
    ) {
        this.api = new ObservableTimesheetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public checkInWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        const result = this.api.checkInWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public checkIn(_options?: Configuration): Promise<TimesheetDto> {
        const result = this.api.checkIn(_options);
        return result.toPromise();
    }

    /**
     */
    public checkOutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        const result = this.api.checkOutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public checkOut(_options?: Configuration): Promise<TimesheetDto> {
        const result = this.api.checkOut(_options);
        return result.toPromise();
    }

    /**
     * @param [month]
     */
    public getMonthlyTimesheetsWithHttpInfo(month?: string, _options?: Configuration): Promise<HttpInfo<Array<TimesheetDto>>> {
        const result = this.api.getMonthlyTimesheetsWithHttpInfo(month, _options);
        return result.toPromise();
    }

    /**
     * @param [month]
     */
    public getMonthlyTimesheets(month?: string, _options?: Configuration): Promise<Array<TimesheetDto>> {
        const result = this.api.getMonthlyTimesheets(month, _options);
        return result.toPromise();
    }

    /**
     */
    public getTimesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<WorkTime>> {
        const result = this.api.getTimesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTimes(_options?: Configuration): Promise<WorkTime> {
        const result = this.api.getTimes(_options);
        return result.toPromise();
    }

    /**
     */
    public getTodayTimesheetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimesheetDto>> {
        const result = this.api.getTodayTimesheetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTodayTimesheet(_options?: Configuration): Promise<TimesheetDto> {
        const result = this.api.getTodayTimesheet(_options);
        return result.toPromise();
    }


}



import { ObservableUserControllerApi } from './ObservableAPI';

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";
export class PromiseUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param userCreateUpdateRequest
     */
    public createUserWithHttpInfo(userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.createUserWithHttpInfo(userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param userCreateUpdateRequest
     */
    public createUser(userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.createUser(userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteUserWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteUserWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteUser(id: number, _options?: Configuration): Promise<string> {
        const result = this.api.deleteUser(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getUserWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.getUserWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getUser(id: number, _options?: Configuration): Promise<UserDto> {
        const result = this.api.getUser(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getUserDetailsWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<UserFullDto>> {
        const result = this.api.getUserDetailsWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getUserDetails(id: number, _options?: Configuration): Promise<UserFullDto> {
        const result = this.api.getUserDetails(id, _options);
        return result.toPromise();
    }

    /**
     * @param pageable
     * @param model
     */
    public getUsersWithHttpInfo(pageable: Pageable, model: UserSearchResponse, _options?: Configuration): Promise<HttpInfo<PageResponseUserDto>> {
        const result = this.api.getUsersWithHttpInfo(pageable, model, _options);
        return result.toPromise();
    }

    /**
     * @param pageable
     * @param model
     */
    public getUsers(pageable: Pageable, model: UserSearchResponse, _options?: Configuration): Promise<PageResponseUserDto> {
        const result = this.api.getUsers(pageable, model, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param userCreateUpdateRequest
     */
    public updateUserWithHttpInfo(id: number, userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.updateUserWithHttpInfo(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param userCreateUpdateRequest
     */
    public updateUser(id: number, userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Promise<UserDto> {
        const result = this.api.updateUser(id, userCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



import { ObservableWorkTimeControllerApi } from './ObservableAPI';

import { WorkTimeControllerApiRequestFactory, WorkTimeControllerApiResponseProcessor} from "../apis/WorkTimeControllerApi";
export class PromiseWorkTimeControllerApi {
    private api: ObservableWorkTimeControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WorkTimeControllerApiRequestFactory,
        responseProcessor?: WorkTimeControllerApiResponseProcessor
    ) {
        this.api = new ObservableWorkTimeControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param workTimeCreateUpdateRequest
     */
    public createWorkTimeWithHttpInfo(workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        const result = this.api.createWorkTimeWithHttpInfo(workTimeCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param workTimeCreateUpdateRequest
     */
    public createWorkTime(workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest, _options?: Configuration): Promise<WorkTimeDto> {
        const result = this.api.createWorkTime(workTimeCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteWorkTimeWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<string>> {
        const result = this.api.deleteWorkTimeWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public deleteWorkTime(id: number, _options?: Configuration): Promise<string> {
        const result = this.api.deleteWorkTime(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getWorkTimeWithHttpInfo(id: number, _options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        const result = this.api.getWorkTimeWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public getWorkTime(id: number, _options?: Configuration): Promise<WorkTimeDto> {
        const result = this.api.getWorkTime(id, _options);
        return result.toPromise();
    }

    /**
     */
    public getWorkTimesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<WorkTimeDto>>> {
        const result = this.api.getWorkTimesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getWorkTimes(_options?: Configuration): Promise<Array<WorkTimeDto>> {
        const result = this.api.getWorkTimes(_options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param workTimeCreateUpdateRequest
     */
    public updateWorkTimeWithHttpInfo(id: number, workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest, _options?: Configuration): Promise<HttpInfo<WorkTimeDto>> {
        const result = this.api.updateWorkTimeWithHttpInfo(id, workTimeCreateUpdateRequest, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param workTimeCreateUpdateRequest
     */
    public updateWorkTime(id: number, workTimeCreateUpdateRequest: WorkTimeCreateUpdateRequest, _options?: Configuration): Promise<WorkTimeDto> {
        const result = this.api.updateWorkTime(id, workTimeCreateUpdateRequest, _options);
        return result.toPromise();
    }


}



