import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { GrantedAuthority } from '../models/GrantedAuthority';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { PageResponseUserDto } from '../models/PageResponseUserDto';
import { Pageable } from '../models/Pageable';
import { Permission } from '../models/Permission';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { Role } from '../models/Role';
import { RoleDto } from '../models/RoleDto';
import { Team } from '../models/Team';
import { TeamDto } from '../models/TeamDto';
import { TicketDto } from '../models/TicketDto';
import { TicketRequest } from '../models/TicketRequest';
import { TimesheetDto } from '../models/TimesheetDto';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';
import { WorkTime } from '../models/WorkTime';
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
     * @param user
     */
    public createUserWithHttpInfo(user: User, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.createUserWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * @param user
     */
    public createUser(user: User, _options?: Configuration): Promise<UserDto> {
        const result = this.api.createUser(user, _options);
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
     * @param pageable
     */
    public getUsersWithHttpInfo(pageable: Pageable, _options?: Configuration): Promise<HttpInfo<PageResponseUserDto>> {
        const result = this.api.getUsersWithHttpInfo(pageable, _options);
        return result.toPromise();
    }

    /**
     * @param pageable
     */
    public getUsers(pageable: Pageable, _options?: Configuration): Promise<PageResponseUserDto> {
        const result = this.api.getUsers(pageable, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param user
     */
    public updateUserWithHttpInfo(id: number, user: User, _options?: Configuration): Promise<HttpInfo<UserDto>> {
        const result = this.api.updateUserWithHttpInfo(id, user, _options);
        return result.toPromise();
    }

    /**
     * @param id
     * @param user
     */
    public updateUser(id: number, user: User, _options?: Configuration): Promise<UserDto> {
        const result = this.api.updateUser(id, user, _options);
        return result.toPromise();
    }


}



