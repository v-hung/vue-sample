# .UserControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserControllerApi.md#createUser) | **POST** /api/users | 
[**deleteUser**](UserControllerApi.md#deleteUser) | **DELETE** /api/users/{id} | 
[**getUser**](UserControllerApi.md#getUser) | **GET** /api/users/{id} | 
[**getUserDetails**](UserControllerApi.md#getUserDetails) | **GET** /api/users/{id}/details | 
[**getUsers**](UserControllerApi.md#getUsers) | **GET** /api/users | 
[**updateUser**](UserControllerApi.md#updateUser) | **PUT** /api/users/{id}/edit | 


# **createUser**
> UserDto createUser(userCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiCreateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiCreateUserRequest = {
  
  userCreateUpdateRequest: {
    name: "name_example",
    username: "username_example",
    email: "email_example",
    password: "password_example",
    position: "DEVELOPER",
    supervisorId: 1,
    roleIds: [
      1,
    ],
    workTimeId: 1,
    teamId: 1,
    profile: {
      birthDate: new Date('1970-01-01').toISOString().split('T')[0];,
      phone: "phone_example",
      gender: true,
      avatar: "avatar_example",
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
    },
    status: "ACTIVE",
  },
};

const data = await apiInstance.createUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateUpdateRequest** | **UserCreateUpdateRequest**|  |


### Return type

**UserDto**

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

# **deleteUser**
> string deleteUser()


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiDeleteUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiDeleteUserRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**string**

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

# **getUser**
> UserDto getUser()


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiGetUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiGetUserRequest = {
  
  id: 1,
};

const data = await apiInstance.getUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


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

# **getUserDetails**
> UserFullDto getUserDetails()


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiGetUserDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiGetUserDetailsRequest = {
  
  id: 1,
};

const data = await apiInstance.getUserDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**UserFullDto**

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

# **getUsers**
> PageResponseUserDto getUsers()


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiGetUsersRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiGetUsersRequest = {
  
  pageable: {
    page: 0,
    size: 1,
    sort: [
      "sort_example",
    ],
  },
};

const data = await apiInstance.getUsers(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageable** | **Pageable** |  | defaults to undefined


### Return type

**PageResponseUserDto**

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

# **updateUser**
> UserDto updateUser(userCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiUpdateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiUpdateUserRequest = {
  
  id: 1,
  
  userCreateUpdateRequest: {
    name: "name_example",
    username: "username_example",
    email: "email_example",
    password: "password_example",
    position: "DEVELOPER",
    supervisorId: 1,
    roleIds: [
      1,
    ],
    workTimeId: 1,
    teamId: 1,
    profile: {
      birthDate: new Date('1970-01-01').toISOString().split('T')[0];,
      phone: "phone_example",
      gender: true,
      avatar: "avatar_example",
      permanentAddress: "permanentAddress_example",
      contactAddress: "contactAddress_example",
    },
    status: "ACTIVE",
  },
};

const data = await apiInstance.updateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateUpdateRequest** | **UserCreateUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**UserDto**

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


