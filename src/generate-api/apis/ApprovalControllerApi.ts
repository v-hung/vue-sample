// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { UserDto } from '../models/UserDto';

/**
 * no description
 */
export class ApprovalControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param ticketType 
     */
    public async getCandidates(ticketType: 'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ticketType' is not null or undefined
        if (ticketType === null || ticketType === undefined) {
            throw new RequiredError("ApprovalControllerApi", "getCandidates", "ticketType");
        }


        // Path Params
        const localVarPath = '/api/approvals/candidates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ticketType !== undefined) {
            requestContext.setQueryParam("ticketType", ObjectSerializer.serialize(ticketType, "'TIMESHEET_ADJUSTMENT' | 'LEAVE_REQUEST' | 'OVERTIME_REQUEST' | 'WORK_FROM_HOME'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["bearerAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ApprovalControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCandidates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCandidatesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<Array<UserDto> >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<UserDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserDto>", ""
            ) as Array<UserDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<UserDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<UserDto>", ""
            ) as Array<UserDto>;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
