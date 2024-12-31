import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { PageResponseUserDto } from '../models/PageResponseUserDto';
import { Pageable } from '../models/Pageable';
import { Permission } from '../models/Permission';
import { ProfileDto } from '../models/ProfileDto';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { RoleDto } from '../models/RoleDto';
import { TeamDto } from '../models/TeamDto';
import { TicketDto } from '../models/TicketDto';
import { TicketRequest } from '../models/TicketRequest';
import { TimesheetDto } from '../models/TimesheetDto';
import { UserCreateUpdateRequest } from '../models/UserCreateUpdateRequest';
import { UserDto } from '../models/UserDto';
import { UserFullDto } from '../models/UserFullDto';
import { WorkTime } from '../models/WorkTime';

import { AccountControllerApiRequestFactory, AccountControllerApiResponseProcessor} from "../apis/AccountControllerApi";
export class ObservableAccountControllerApi {
    private requestFactory: AccountControllerApiRequestFactory;
    private responseProcessor: AccountControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountControllerApiRequestFactory,
        responseProcessor?: AccountControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountControllerApiResponseProcessor();
    }

    /**
     */
    public getCurrentUserWithHttpInfo(_options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.getCurrentUser(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentUserWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getCurrentUser(_options?: Configuration): Observable<UserDto> {
        return this.getCurrentUserWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

    /**
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Observable<HttpInfo<LoginResponse>> {
        const requestContextPromise = this.requestFactory.login(loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Observable<LoginResponse> {
        return this.loginWithHttpInfo(loginRequest, _options).pipe(map((apiResponse: HttpInfo<LoginResponse>) => apiResponse.data));
    }

    /**
     * @param [refreshRequest]
     */
    public refreshTokenWithHttpInfo(refreshRequest?: RefreshRequest, _options?: Configuration): Observable<HttpInfo<RefreshResponse>> {
        const requestContextPromise = this.requestFactory.refreshToken(refreshRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.refreshTokenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [refreshRequest]
     */
    public refreshToken(refreshRequest?: RefreshRequest, _options?: Configuration): Observable<RefreshResponse> {
        return this.refreshTokenWithHttpInfo(refreshRequest, _options).pipe(map((apiResponse: HttpInfo<RefreshResponse>) => apiResponse.data));
    }

}

import { ApprovalControllerApiRequestFactory, ApprovalControllerApiResponseProcessor} from "../apis/ApprovalControllerApi";
export class ObservableApprovalControllerApi {
    private requestFactory: ApprovalControllerApiRequestFactory;
    private responseProcessor: ApprovalControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ApprovalControllerApiRequestFactory,
        responseProcessor?: ApprovalControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ApprovalControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ApprovalControllerApiResponseProcessor();
    }

    /**
     * @param ticketType
     */
    public getCandidatesWithHttpInfo(ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME', _options?: Configuration): Observable<HttpInfo<Array<UserDto>>> {
        const requestContextPromise = this.requestFactory.getCandidates(ticketType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCandidatesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param ticketType
     */
    public getCandidates(ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME', _options?: Configuration): Observable<Array<UserDto>> {
        return this.getCandidatesWithHttpInfo(ticketType, _options).pipe(map((apiResponse: HttpInfo<Array<UserDto>>) => apiResponse.data));
    }

}

import { DataInitializerControllerApiRequestFactory, DataInitializerControllerApiResponseProcessor} from "../apis/DataInitializerControllerApi";
export class ObservableDataInitializerControllerApi {
    private requestFactory: DataInitializerControllerApiRequestFactory;
    private responseProcessor: DataInitializerControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DataInitializerControllerApiRequestFactory,
        responseProcessor?: DataInitializerControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DataInitializerControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DataInitializerControllerApiResponseProcessor();
    }

    /**
     */
    public initializeDataWithHttpInfo(_options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.initializeData(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.initializeDataWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public initializeData(_options?: Configuration): Observable<string> {
        return this.initializeDataWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

}

import { TeamControllerApiRequestFactory, TeamControllerApiResponseProcessor} from "../apis/TeamControllerApi";
export class ObservableTeamControllerApi {
    private requestFactory: TeamControllerApiRequestFactory;
    private responseProcessor: TeamControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamControllerApiRequestFactory,
        responseProcessor?: TeamControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamControllerApiResponseProcessor();
    }

    /**
     */
    public getTeamsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TeamDto>>> {
        const requestContextPromise = this.requestFactory.getTeams(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTeamsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTeams(_options?: Configuration): Observable<Array<TeamDto>> {
        return this.getTeamsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TeamDto>>) => apiResponse.data));
    }

}

import { TicketControllerApiRequestFactory, TicketControllerApiResponseProcessor} from "../apis/TicketControllerApi";
export class ObservableTicketControllerApi {
    private requestFactory: TicketControllerApiRequestFactory;
    private responseProcessor: TicketControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TicketControllerApiRequestFactory,
        responseProcessor?: TicketControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TicketControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TicketControllerApiResponseProcessor();
    }

    /**
     * @param id
     */
    public approvalTicketWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TicketDto>> {
        const requestContextPromise = this.requestFactory.approvalTicket(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.approvalTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public approvalTicket(id: number, _options?: Configuration): Observable<TicketDto> {
        return this.approvalTicketWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TicketDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public cancelTicketWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TicketDto>> {
        const requestContextPromise = this.requestFactory.cancelTicket(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public cancelTicket(id: number, _options?: Configuration): Observable<TicketDto> {
        return this.cancelTicketWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TicketDto>) => apiResponse.data));
    }

    /**
     * @param ticketRequest
     */
    public createTicketWithHttpInfo(ticketRequest: TicketRequest, _options?: Configuration): Observable<HttpInfo<TicketDto>> {
        const requestContextPromise = this.requestFactory.createTicket(ticketRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param ticketRequest
     */
    public createTicket(ticketRequest: TicketRequest, _options?: Configuration): Observable<TicketDto> {
        return this.createTicketWithHttpInfo(ticketRequest, _options).pipe(map((apiResponse: HttpInfo<TicketDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getTicketWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<TicketDto>> {
        const requestContextPromise = this.requestFactory.getTicket(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTicketWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getTicket(id: number, _options?: Configuration): Observable<TicketDto> {
        return this.getTicketWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<TicketDto>) => apiResponse.data));
    }

    /**
     */
    public getTicketsApproverWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TicketDto>>> {
        const requestContextPromise = this.requestFactory.getTicketsApprover(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTicketsApproverWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTicketsApprover(_options?: Configuration): Observable<Array<TicketDto>> {
        return this.getTicketsApproverWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TicketDto>>) => apiResponse.data));
    }

    /**
     */
    public getTicketsCreatorWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<TicketDto>>> {
        const requestContextPromise = this.requestFactory.getTicketsCreator(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTicketsCreatorWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTicketsCreator(_options?: Configuration): Observable<Array<TicketDto>> {
        return this.getTicketsCreatorWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<TicketDto>>) => apiResponse.data));
    }

}

import { TimesheetControllerApiRequestFactory, TimesheetControllerApiResponseProcessor} from "../apis/TimesheetControllerApi";
export class ObservableTimesheetControllerApi {
    private requestFactory: TimesheetControllerApiRequestFactory;
    private responseProcessor: TimesheetControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimesheetControllerApiRequestFactory,
        responseProcessor?: TimesheetControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimesheetControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimesheetControllerApiResponseProcessor();
    }

    /**
     */
    public checkInWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimesheetDto>> {
        const requestContextPromise = this.requestFactory.checkIn(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkInWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public checkIn(_options?: Configuration): Observable<TimesheetDto> {
        return this.checkInWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimesheetDto>) => apiResponse.data));
    }

    /**
     */
    public checkOutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimesheetDto>> {
        const requestContextPromise = this.requestFactory.checkOut(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkOutWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public checkOut(_options?: Configuration): Observable<TimesheetDto> {
        return this.checkOutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimesheetDto>) => apiResponse.data));
    }

    /**
     * @param [month]
     */
    public getMonthlyTimesheetsWithHttpInfo(month?: string, _options?: Configuration): Observable<HttpInfo<Array<TimesheetDto>>> {
        const requestContextPromise = this.requestFactory.getMonthlyTimesheets(month, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMonthlyTimesheetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [month]
     */
    public getMonthlyTimesheets(month?: string, _options?: Configuration): Observable<Array<TimesheetDto>> {
        return this.getMonthlyTimesheetsWithHttpInfo(month, _options).pipe(map((apiResponse: HttpInfo<Array<TimesheetDto>>) => apiResponse.data));
    }

    /**
     */
    public getTimesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<WorkTime>> {
        const requestContextPromise = this.requestFactory.getTimes(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTimesWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTimes(_options?: Configuration): Observable<WorkTime> {
        return this.getTimesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<WorkTime>) => apiResponse.data));
    }

    /**
     */
    public getTodayTimesheetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimesheetDto>> {
        const requestContextPromise = this.requestFactory.getTodayTimesheet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodayTimesheetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTodayTimesheet(_options?: Configuration): Observable<TimesheetDto> {
        return this.getTodayTimesheetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimesheetDto>) => apiResponse.data));
    }

}

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi";
export class ObservableUserControllerApi {
    private requestFactory: UserControllerApiRequestFactory;
    private responseProcessor: UserControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserControllerApiResponseProcessor();
    }

    /**
     * @param userCreateUpdateRequest
     */
    public createUserWithHttpInfo(userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.createUser(userCreateUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userCreateUpdateRequest
     */
    public createUser(userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Observable<UserDto> {
        return this.createUserWithHttpInfo(userCreateUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public deleteUserWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<string>> {
        const requestContextPromise = this.requestFactory.deleteUser(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public deleteUser(id: number, _options?: Configuration): Observable<string> {
        return this.deleteUserWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<string>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getUserWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.getUser(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getUser(id: number, _options?: Configuration): Observable<UserDto> {
        return this.getUserWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public getUserDetailsWithHttpInfo(id: number, _options?: Configuration): Observable<HttpInfo<UserFullDto>> {
        const requestContextPromise = this.requestFactory.getUserDetails(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public getUserDetails(id: number, _options?: Configuration): Observable<UserFullDto> {
        return this.getUserDetailsWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserFullDto>) => apiResponse.data));
    }

    /**
     * @param pageable
     */
    public getUsersWithHttpInfo(pageable: Pageable, _options?: Configuration): Observable<HttpInfo<PageResponseUserDto>> {
        const requestContextPromise = this.requestFactory.getUsers(pageable, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUsersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param pageable
     */
    public getUsers(pageable: Pageable, _options?: Configuration): Observable<PageResponseUserDto> {
        return this.getUsersWithHttpInfo(pageable, _options).pipe(map((apiResponse: HttpInfo<PageResponseUserDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param userCreateUpdateRequest
     */
    public updateUserWithHttpInfo(id: number, userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Observable<HttpInfo<UserDto>> {
        const requestContextPromise = this.requestFactory.updateUser(id, userCreateUpdateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param userCreateUpdateRequest
     */
    public updateUser(id: number, userCreateUpdateRequest: UserCreateUpdateRequest, _options?: Configuration): Observable<UserDto> {
        return this.updateUserWithHttpInfo(id, userCreateUpdateRequest, _options).pipe(map((apiResponse: HttpInfo<UserDto>) => apiResponse.data));
    }

}
