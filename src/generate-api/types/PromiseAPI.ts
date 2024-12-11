import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { Role } from '../models/Role';
import { TimeSheetDto } from '../models/TimeSheetDto';
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



import { ObservableTimeSheetControllerApi } from './ObservableAPI';

import { TimeSheetControllerApiRequestFactory, TimeSheetControllerApiResponseProcessor} from "../apis/TimeSheetControllerApi";
export class PromiseTimeSheetControllerApi {
    private api: ObservableTimeSheetControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TimeSheetControllerApiRequestFactory,
        responseProcessor?: TimeSheetControllerApiResponseProcessor
    ) {
        this.api = new ObservableTimeSheetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public checkInWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        const result = this.api.checkInWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public checkIn(_options?: Configuration): Promise<TimeSheetDto> {
        const result = this.api.checkIn(_options);
        return result.toPromise();
    }

    /**
     */
    public checkOutWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        const result = this.api.checkOutWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public checkOut(_options?: Configuration): Promise<TimeSheetDto> {
        const result = this.api.checkOut(_options);
        return result.toPromise();
    }

    /**
     * @param [month]
     */
    public getMonthlyTimeSheetsWithHttpInfo(month?: string, _options?: Configuration): Promise<HttpInfo<Array<TimeSheetDto>>> {
        const result = this.api.getMonthlyTimeSheetsWithHttpInfo(month, _options);
        return result.toPromise();
    }

    /**
     * @param [month]
     */
    public getMonthlyTimeSheets(month?: string, _options?: Configuration): Promise<Array<TimeSheetDto>> {
        const result = this.api.getMonthlyTimeSheets(month, _options);
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
    public getTodayTimeSheetWithHttpInfo(_options?: Configuration): Promise<HttpInfo<TimeSheetDto>> {
        const result = this.api.getTodayTimeSheetWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getTodayTimeSheet(_options?: Configuration): Promise<TimeSheetDto> {
        const result = this.api.getTodayTimeSheet(_options);
        return result.toPromise();
    }


}



