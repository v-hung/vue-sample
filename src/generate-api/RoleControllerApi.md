# .RoleControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRole**](RoleControllerApi.md#createRole) | **POST** /api/roles | 
[**deleteRole**](RoleControllerApi.md#deleteRole) | **DELETE** /api/roles/{id} | 
[**getRole**](RoleControllerApi.md#getRole) | **GET** /api/roles/{id} | 
[**getRoles**](RoleControllerApi.md#getRoles) | **GET** /api/roles | 
[**updateRole**](RoleControllerApi.md#updateRole) | **PUT** /api/roles/{id}/edit | 


# **createRole**
> RoleDto createRole(roleCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, RoleControllerApi } from '';
import type { RoleControllerApiCreateRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleControllerApi(configuration);

const request: RoleControllerApiCreateRoleRequest = {
  
  roleCreateUpdateRequest: {
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
};

const data = await apiInstance.createRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleCreateUpdateRequest** | **RoleCreateUpdateRequest**|  |


### Return type

**RoleDto**

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

# **deleteRole**
> string deleteRole()


### Example


```typescript
import { createConfiguration, RoleControllerApi } from '';
import type { RoleControllerApiDeleteRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleControllerApi(configuration);

const request: RoleControllerApiDeleteRoleRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteRole(request);
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

# **getRole**
> RoleDto getRole()


### Example


```typescript
import { createConfiguration, RoleControllerApi } from '';
import type { RoleControllerApiGetRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleControllerApi(configuration);

const request: RoleControllerApiGetRoleRequest = {
  
  id: 1,
};

const data = await apiInstance.getRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**RoleDto**

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

# **getRoles**
> Array<RoleDto> getRoles()


### Example


```typescript
import { createConfiguration, RoleControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new RoleControllerApi(configuration);

const request = {};

const data = await apiInstance.getRoles(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<RoleDto>**

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

# **updateRole**
> RoleDto updateRole(roleCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, RoleControllerApi } from '';
import type { RoleControllerApiUpdateRoleRequest } from '';

const configuration = createConfiguration();
const apiInstance = new RoleControllerApi(configuration);

const request: RoleControllerApiUpdateRoleRequest = {
  
  id: 1,
  
  roleCreateUpdateRequest: {
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
};

const data = await apiInstance.updateRole(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleCreateUpdateRequest** | **RoleCreateUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**RoleDto**

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


