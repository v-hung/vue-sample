# .TimeSheetControllerApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkIn**](TimeSheetControllerApi.md#checkIn) | **POST** /api/timesheets/checkin | 
[**checkOut**](TimeSheetControllerApi.md#checkOut) | **POST** /api/timesheets/checkout | 
[**getMonthlyTimeSheets**](TimeSheetControllerApi.md#getMonthlyTimeSheets) | **GET** /api/timesheets/monthly | 
[**getTimes**](TimeSheetControllerApi.md#getTimes) | **GET** /api/timesheets/work-times | 
[**getTodayTimeSheet**](TimeSheetControllerApi.md#getTodayTimeSheet) | **GET** /api/timesheets/today | 


# **checkIn**
> TimeSheet checkIn()


### Example


```typescript
import { createConfiguration, TimeSheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimeSheetControllerApi(configuration);

const request = {};

const data = await apiInstance.checkIn(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimeSheet**

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
> TimeSheet checkOut()


### Example


```typescript
import { createConfiguration, TimeSheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimeSheetControllerApi(configuration);

const request = {};

const data = await apiInstance.checkOut(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimeSheet**

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

# **getMonthlyTimeSheets**
> Array<TimeSheet> getMonthlyTimeSheets()


### Example


```typescript
import { createConfiguration, TimeSheetControllerApi } from '';
import type { TimeSheetControllerApiGetMonthlyTimeSheetsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TimeSheetControllerApi(configuration);

const request: TimeSheetControllerApiGetMonthlyTimeSheetsRequest = {
  
  month: "month_example",
};

const data = await apiInstance.getMonthlyTimeSheets(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**string**] |  | (optional) defaults to undefined


### Return type

**Array<TimeSheet>**

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
import { createConfiguration, TimeSheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimeSheetControllerApi(configuration);

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

# **getTodayTimeSheet**
> TimeSheet getTodayTimeSheet()


### Example


```typescript
import { createConfiguration, TimeSheetControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TimeSheetControllerApi(configuration);

const request = {};

const data = await apiInstance.getTodayTimeSheet(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**TimeSheet**

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


