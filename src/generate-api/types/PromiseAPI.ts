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
     * @param refreshRequest
     */
    public refreshTokenWithHttpInfo(refreshRequest: RefreshRequest, _options?: Configuration): Promise<HttpInfo<RefreshResponse>> {
        const result = this.api.refreshTokenWithHttpInfo(refreshRequest, _options);
        return result.toPromise();
    }

    /**
     * @param refreshRequest
     */
    public refreshToken(refreshRequest: RefreshRequest, _options?: Configuration): Promise<RefreshResponse> {
        const result = this.api.refreshToken(refreshRequest, _options);
        return result.toPromise();
    }


}



import { ObservableBookControllerApi } from './ObservableAPI';

import { BookControllerApiRequestFactory, BookControllerApiResponseProcessor} from "../apis/BookControllerApi";
export class PromiseBookControllerApi {
    private api: ObservableBookControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BookControllerApiRequestFactory,
        responseProcessor?: BookControllerApiResponseProcessor
    ) {
        this.api = new ObservableBookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public getAllBooksWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Array<Book>>> {
        const result = this.api.getAllBooksWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public getAllBooks(_options?: Configuration): Promise<Array<Book>> {
        const result = this.api.getAllBooks(_options);
        return result.toPromise();
    }


}



