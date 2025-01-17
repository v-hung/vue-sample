# .TeamControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](TeamControllerApi.md#createTeam) | **POST** /api/teams | 
[**deleteTeam**](TeamControllerApi.md#deleteTeam) | **DELETE** /api/teams/{id} | 
[**getTeam**](TeamControllerApi.md#getTeam) | **GET** /api/teams/{id} | 
[**getTeams**](TeamControllerApi.md#getTeams) | **GET** /api/teams | 
[**updateTeam**](TeamControllerApi.md#updateTeam) | **PUT** /api/teams/{id}/edit | 


# **createTeam**
> TeamDto createTeam(teamCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, TeamControllerApi } from '';
import type { TeamControllerApiCreateTeamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamControllerApi(configuration);

const request: TeamControllerApiCreateTeamRequest = {
  
  teamCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.createTeam(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamCreateUpdateRequest** | **TeamCreateUpdateRequest**|  |


### Return type

**TeamDto**

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

# **deleteTeam**
> string deleteTeam()


### Example


```typescript
import { createConfiguration, TeamControllerApi } from '';
import type { TeamControllerApiDeleteTeamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamControllerApi(configuration);

const request: TeamControllerApiDeleteTeamRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteTeam(request);
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

# **getTeam**
> TeamDto getTeam()


### Example


```typescript
import { createConfiguration, TeamControllerApi } from '';
import type { TeamControllerApiGetTeamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamControllerApi(configuration);

const request: TeamControllerApiGetTeamRequest = {
  
  id: 1,
};

const data = await apiInstance.getTeam(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TeamDto**

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

# **getTeams**
> Array<TeamDto> getTeams()


### Example


```typescript
import { createConfiguration, TeamControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TeamControllerApi(configuration);

const request = {};

const data = await apiInstance.getTeams(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TeamDto>**

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

# **updateTeam**
> TeamDto updateTeam(teamCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, TeamControllerApi } from '';
import type { TeamControllerApiUpdateTeamRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TeamControllerApi(configuration);

const request: TeamControllerApiUpdateTeamRequest = {
  
  id: 1,
  
  teamCreateUpdateRequest: {
    name: "name_example",
    description: "description_example",
  },
};

const data = await apiInstance.updateTeam(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamCreateUpdateRequest** | **TeamCreateUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**TeamDto**

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


