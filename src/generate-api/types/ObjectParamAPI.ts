import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { LocalTime } from '../models/LocalTime';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { Role } from '../models/Role';
import { TimeSheetDto } from '../models/TimeSheetDto';
import { UserDto } from '../models/UserDto';
import { WorkTime } from '../models/WorkTime';

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

import { ObservableTimeSheetControllerApi } from "./ObservableAPI";
import { TimeSheetControllerApiRequestFactory, TimeSheetControllerApiResponseProcessor} from "../apis/TimeSheetControllerApi";

export interface TimeSheetControllerApiCheckInRequest {
}

export interface TimeSheetControllerApiCheckOutRequest {
}

export interface TimeSheetControllerApiGetMonthlyTimeSheetsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof TimeSheetControllerApigetMonthlyTimeSheets
     */
    month?: string
}

export interface TimeSheetControllerApiGetTimesRequest {
}

export interface TimeSheetControllerApiGetTodayTimeSheetRequest {
}

export class ObjectTimeSheetControllerApi {
    private api: ObservableTimeSheetControllerApi

    public constructor(configuration: Configuration, requestFactory?: TimeSheetControllerApiRequestFactory, responseProcessor?: TimeSheetControllerApiResponseProcessor) {
        this.api = new ObservableTimeSheetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public checkInWithHttpInfo(param: TimeSheetControllerApiCheckInRequest = {}, options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        return this.api.checkInWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkIn(param: TimeSheetControllerApiCheckInRequest = {}, options?: Configuration): Promise<TimeSheetDto> {
        return this.api.checkIn( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkOutWithHttpInfo(param: TimeSheetControllerApiCheckOutRequest = {}, options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        return this.api.checkOutWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public checkOut(param: TimeSheetControllerApiCheckOutRequest = {}, options?: Configuration): Promise<TimeSheetDto> {
        return this.api.checkOut( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMonthlyTimeSheetsWithHttpInfo(param: TimeSheetControllerApiGetMonthlyTimeSheetsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<TimeSheetDto>>> {
        return this.api.getMonthlyTimeSheetsWithHttpInfo(param.month,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getMonthlyTimeSheets(param: TimeSheetControllerApiGetMonthlyTimeSheetsRequest = {}, options?: Configuration): Promise<Array<TimeSheetDto>> {
        return this.api.getMonthlyTimeSheets(param.month,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTimesWithHttpInfo(param: TimeSheetControllerApiGetTimesRequest = {}, options?: Configuration): Promise<HttpInfo<WorkTime>> {
        return this.api.getTimesWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTimes(param: TimeSheetControllerApiGetTimesRequest = {}, options?: Configuration): Promise<WorkTime> {
        return this.api.getTimes( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodayTimeSheetWithHttpInfo(param: TimeSheetControllerApiGetTodayTimeSheetRequest = {}, options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        return this.api.getTodayTimeSheetWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getTodayTimeSheet(param: TimeSheetControllerApiGetTodayTimeSheetRequest = {}, options?: Configuration): Promise<TimeSheetDto> {
        return this.api.getTodayTimeSheet( options).toPromise();
    }

}
