# .TimesheetControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIn**](TimesheetControllerApi.md#checkIn) | **POST** /api/timesheets/checkin | 
[**checkOut**](TimesheetControllerApi.md#checkOut) | **POST** /api/timesheets/checkout | 
[**getMonthlyTimesheets**](TimesheetControllerApi.md#getMonthlyTimesheets) | **GET** /api/timesheets/monthly | 
[**getTimes**](TimesheetControllerApi.md#getTimes) | **GET** /api/timesheets/work-times | 
[**getTodayTimesheet**](TimesheetControllerApi.md#getTodayTimesheet) | **GET** /api/timesheets/today | 


# **checkIn**
> TimesheetDto checkIn()


### Example


```typescript
import { createConfiguration, TimesheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetControllerApi(configuration);

const request = {};

const data = await apiInstance.checkIn(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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

# **checkOut**
> TimesheetDto checkOut()


### Example


```typescript
import { createConfiguration, TimesheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetControllerApi(configuration);

const request = {};

const data = await apiInstance.checkOut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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

# **getMonthlyTimesheets**
> Array<TimesheetDto> getMonthlyTimesheets()


### Example


```typescript
import { createConfiguration, TimesheetControllerApi } from '';
import type { TimesheetControllerApiGetMonthlyTimesheetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetControllerApi(configuration);

const request: TimesheetControllerApiGetMonthlyTimesheetsRequest = {
  
  month: "month_example",
};

const data = await apiInstance.getMonthlyTimesheets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<TimesheetDto>**

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

# **getTimes**
> WorkTime getTimes()


### Example


```typescript
import { createConfiguration, TimesheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetControllerApi(configuration);

const request = {};

const data = await apiInstance.getTimes(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**WorkTime**

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

# **getTodayTimesheet**
> TimesheetDto getTodayTimesheet()


### Example


```typescript
import { createConfiguration, TimesheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimesheetControllerApi(configuration);

const request = {};

const data = await apiInstance.getTodayTimesheet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimesheetDto**

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


