import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Book } from '../models/Book';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Permission } from '../models/Permission';
import { RefreshRequest } from '../models/RefreshRequest';
import { RefreshResponse } from '../models/RefreshResponse';
import { Role } from '../models/Role';
import { UserDto } from '../models/UserDto';

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
    refreshRequest: RefreshRequest
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
    public refreshTokenWithHttpInfo(param: AccountControllerApiRefreshTokenRequest, options?: Configuration): Promise<HttpInfo<RefreshResponse>> {
        return this.api.refreshTokenWithHttpInfo(param.refreshRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public refreshToken(param: AccountControllerApiRefreshTokenRequest, options?: Configuration): Promise<RefreshResponse> {
        return this.api.refreshToken(param.refreshRequest,  options).toPromise();
    }

}

import { ObservableBookControllerApi } from "./ObservableAPI";
import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";

export interface BookControllerApiGetAllBooksRequest {
}

export class ObjectBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(configuration: Configuration, requestFactory?: BookControllerApiRequestFactory, responseProcessor?: BookControllerApiResponseProcessor) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getAllBooksWithHttpInfo(param: BookControllerApiGetAllBooksRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Book>>> {
        return this.api.getAllBooksWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllBooks(param: BookControllerApiGetAllBooksRequest = {}, options?: Configuration): Promise<Array<Book>> {
        return this.api.getAllBooks( options).toPromise();
    }

}
