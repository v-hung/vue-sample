# .AccountControllerApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrentUser**](AccountControllerApi.md#getCurrentUser) | **GET** /api/accounts/current | 
[**login**](AccountControllerApi.md#login) | **POST** /api/accounts/login | 
[**refreshToken**](AccountControllerApi.md#refreshToken) | **POST** /api/accounts/refresh-token | 


# **getCurrentUser**
> UserDto getCurrentUser()


### Example


```typescript
import { createConfiguration, AccountControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new AccountControllerApi(configuration);

const request = {};

const data = await apiInstance.getCurrentUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserDto**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> LoginResponse login(loginRequest)


### Example


```typescript
import { createConfiguration, AccountControllerApi } from '';
import type { AccountControllerApiLoginRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountControllerApi(configuration);

const request: AccountControllerApiLoginRequest = {
  
  loginRequest: {
    username: "username_example",
    password: "password_example",
    remember: true,
  },
};

const data = await apiInstance.login(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**|  |


### Return type

**LoginResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **refreshToken**
> RefreshResponse refreshToken()


### Example


```typescript
import { createConfiguration, AccountControllerApi } from '';
import type { AccountControllerApiRefreshTokenRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AccountControllerApi(configuration);

const request: AccountControllerApiRefreshTokenRequest = {
  
  refreshRequest: {
    refreshToken: "refreshToken_example",
  },
};

const data = await apiInstance.refreshToken(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshRequest** | **RefreshRequest**|  |


### Return type

**RefreshResponse**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


