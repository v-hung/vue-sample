import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { Book } from '../models/Book';
import { GrantedAuthority } from '../models/GrantedAuthority';
import { LocalTime } from '../models/LocalTime';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { RefreshToken } from '../models/RefreshToken';
import { Role } from '../models/Role';
import { TimeSheet } from '../models/TimeSheet';
import { User } from '../models/User';
import { UserDto } from '../models/UserDto';

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
     * @param refreshRequest
     */
    public refreshTokenWithHttpInfo(refreshRequest: RefreshRequest, _options?: Configuration): Observable<HttpInfo<RefreshResponse>> {
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
     * @param refreshRequest
     */
    public refreshToken(refreshRequest: RefreshRequest, _options?: Configuration): Observable<RefreshResponse> {
        return this.refreshTokenWithHttpInfo(refreshRequest, _options).pipe(map((apiResponse: HttpInfo<RefreshResponse>) => apiResponse.data));
    }

}

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class ObservableBookControllerApi {
    private requestFactory: BookControllerApiRequestFactory;
    private responseProcessor: BookControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BookControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BookControllerApiResponseProcessor();
    }

    /**
     */
    public getAllBooksWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Book>>> {
        const requestContextPromise = this.requestFactory.getAllBooks(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getAllBooks(_options?: Configuration): Observable<Array<Book>> {
        return this.getAllBooksWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Book>>) => apiResponse.data));
    }

}

import { TimeSheetControllerApiRequestFactory, TimeSheetControllerApiResponseProcessor} from "../apis/TimeSheetControllerApi";
export class ObservableTimeSheetControllerApi {
    private requestFactory: TimeSheetControllerApiRequestFactory;
    private responseProcessor: TimeSheetControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSheetControllerApiRequestFactory,
        responseProcessor?: TimeSheetControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TimeSheetControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TimeSheetControllerApiResponseProcessor();
    }

    /**
     */
    public checkInWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimeSheet>> {
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
    public checkIn(_options?: Configuration): Observable<TimeSheet> {
        return this.checkInWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimeSheet>) => apiResponse.data));
    }

    /**
     */
    public checkOutWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimeSheet>> {
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
    public checkOut(_options?: Configuration): Observable<TimeSheet> {
        return this.checkOutWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimeSheet>) => apiResponse.data));
    }

    /**
     * @param [month]
     */
    public getMonthlyTimeSheetsWithHttpInfo(month?: string, _options?: Configuration): Observable<HttpInfo<Array<TimeSheet>>> {
        const requestContextPromise = this.requestFactory.getMonthlyTimeSheets(month, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMonthlyTimeSheetsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [month]
     */
    public getMonthlyTimeSheets(month?: string, _options?: Configuration): Observable<Array<TimeSheet>> {
        return this.getMonthlyTimeSheetsWithHttpInfo(month, _options).pipe(map((apiResponse: HttpInfo<Array<TimeSheet>>) => apiResponse.data));
    }

    /**
     */
    public getTodayTimeSheetWithHttpInfo(_options?: Configuration): Observable<HttpInfo<TimeSheet>> {
        const requestContextPromise = this.requestFactory.getTodayTimeSheet(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTodayTimeSheetWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public getTodayTimeSheet(_options?: Configuration): Observable<TimeSheet> {
        return this.getTodayTimeSheetWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<TimeSheet>) => apiResponse.data));
    }

}
