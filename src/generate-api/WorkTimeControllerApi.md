# .WorkTimeControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWorkTime**](WorkTimeControllerApi.md#createWorkTime) | **POST** /api/work-times | 
[**deleteWorkTime**](WorkTimeControllerApi.md#deleteWorkTime) | **DELETE** /api/work-times/{id} | 
[**getWorkTime**](WorkTimeControllerApi.md#getWorkTime) | **GET** /api/work-times/{id} | 
[**getWorkTimes**](WorkTimeControllerApi.md#getWorkTimes) | **GET** /api/work-times | 
[**updateWorkTime**](WorkTimeControllerApi.md#updateWorkTime) | **PUT** /api/work-times/{id}/edit | 


# **createWorkTime**
> WorkTimeDto createWorkTime(workTimeCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, WorkTimeControllerApi } from '';
import type { WorkTimeControllerApiCreateWorkTimeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeControllerApi(configuration);

const request: WorkTimeControllerApiCreateWorkTimeRequest = {
  
  workTimeCreateUpdateRequest: {
    title: "title_example",
    startTimeMorning: "14:30:00.982",
    endTimeMorning: "14:30:00.982",
    startTimeAfternoon: "14:30:00.982",
    endTimeAfternoon: "14:30:00.982",
    allowedLateMinutes: 1,
  },
};

const data = await apiInstance.createWorkTime(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workTimeCreateUpdateRequest** | **WorkTimeCreateUpdateRequest**|  |


### Return type

**WorkTimeDto**

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

# **deleteWorkTime**
> string deleteWorkTime()


### Example


```typescript
import { createConfiguration, WorkTimeControllerApi } from '';
import type { WorkTimeControllerApiDeleteWorkTimeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeControllerApi(configuration);

const request: WorkTimeControllerApiDeleteWorkTimeRequest = {
  
  id: 1,
};

const data = await apiInstance.deleteWorkTime(request);
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

# **getWorkTime**
> WorkTimeDto getWorkTime()


### Example


```typescript
import { createConfiguration, WorkTimeControllerApi } from '';
import type { WorkTimeControllerApiGetWorkTimeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeControllerApi(configuration);

const request: WorkTimeControllerApiGetWorkTimeRequest = {
  
  id: 1,
};

const data = await apiInstance.getWorkTime(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**WorkTimeDto**

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

# **getWorkTimes**
> Array<WorkTimeDto> getWorkTimes()


### Example


```typescript
import { createConfiguration, WorkTimeControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeControllerApi(configuration);

const request = {};

const data = await apiInstance.getWorkTimes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<WorkTimeDto>**

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

# **updateWorkTime**
> WorkTimeDto updateWorkTime(workTimeCreateUpdateRequest)


### Example


```typescript
import { createConfiguration, WorkTimeControllerApi } from '';
import type { WorkTimeControllerApiUpdateWorkTimeRequest } from '';

const configuration = createConfiguration();
const apiInstance = new WorkTimeControllerApi(configuration);

const request: WorkTimeControllerApiUpdateWorkTimeRequest = {
  
  id: 1,
  
  workTimeCreateUpdateRequest: {
    title: "title_example",
    startTimeMorning: "14:30:00.982",
    endTimeMorning: "14:30:00.982",
    startTimeAfternoon: "14:30:00.982",
    endTimeAfternoon: "14:30:00.982",
    allowedLateMinutes: 1,
  },
};

const data = await apiInstance.updateWorkTime(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workTimeCreateUpdateRequest** | **WorkTimeCreateUpdateRequest**|  |
 **id** | [**number**] |  | defaults to undefined


### Return type

**WorkTimeDto**

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


