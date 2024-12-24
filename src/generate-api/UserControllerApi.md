# .UserControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserControllerApi.md#createUser) | **POST** /api/users | 
[**deleteUser**](UserControllerApi.md#deleteUser) | **DELETE** /api/users/{id} | 
[**getUser**](UserControllerApi.md#getUser) | **GET** /api/users/{id} | 
[**getUsers**](UserControllerApi.md#getUsers) | **GET** /api/users | 
[**updateUser**](UserControllerApi.md#updateUser) | **PUT** /api/users/{id}/edit | 


# **createUser**
> UserDto createUser(user)


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiCreateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiCreateUserRequest = {
  
  user: {
    id: 1,
    name: "name_example",
    username: "username_example",
    email: "email_example",
    userPosition: "DEVELOPER",
    roles: [
      {
        id: 1,
        name: "name_example",
        description: "description_example",
        admin: true,
        level: 1,
        permissions: [
          {
            id: 1,
            name: "USER_VIEW",
          },
        ],
      },
    ],
    workTime: {
      id: 1,
      title: "title_example",
      startTimeMorning: "14:30:00.982",
      endTimeMorning: "14:30:00.982",
      startTimeAfternoon: "14:30:00.982",
      endTimeAfternoon: "14:30:00.982",
      allowedLateMinutes: 1,
    },
    enabled: true,
    authorities: [
      {
        authority: "authority_example",
      },
    ],
    currentLevel: 1,
    accountNonLocked: true,
    credentialsNonExpired: true,
    accountNonExpired: true,
  },
};

const data = await apiInstance.createUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |


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

# **getUsers**
> PageUserDto getUsers()


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

**PageUserDto**

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
> UserDto updateUser(user)


### Example


```typescript
import { createConfiguration, UserControllerApi } from '';
import type { UserControllerApiUpdateUserRequest } from '';

const configuration = createConfiguration();
const apiInstance = new UserControllerApi(configuration);

const request: UserControllerApiUpdateUserRequest = {
  
  id: 1,
  
  user: {
    id: 1,
    name: "name_example",
    username: "username_example",
    email: "email_example",
    userPosition: "DEVELOPER",
    roles: [
      {
        id: 1,
        name: "name_example",
        description: "description_example",
        admin: true,
        level: 1,
        permissions: [
          {
            id: 1,
            name: "USER_VIEW",
          },
        ],
      },
    ],
    workTime: {
      id: 1,
      title: "title_example",
      startTimeMorning: "14:30:00.982",
      endTimeMorning: "14:30:00.982",
      startTimeAfternoon: "14:30:00.982",
      endTimeAfternoon: "14:30:00.982",
      allowedLateMinutes: 1,
    },
    enabled: true,
    authorities: [
      {
        authority: "authority_example",
      },
    ],
    currentLevel: 1,
    accountNonLocked: true,
    credentialsNonExpired: true,
    accountNonExpired: true,
  },
};

const data = await apiInstance.updateUser(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**|  |
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


