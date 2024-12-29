# .TeamControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTeams**](TeamControllerApi.md#getTeams) | **GET** /api/teams | 


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


