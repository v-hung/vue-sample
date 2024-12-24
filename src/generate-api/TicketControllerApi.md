# .TicketControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approvalTicket**](TicketControllerApi.md#approvalTicket) | **POST** /api/tickets/{id}/approval | 
[**cancelTicket**](TicketControllerApi.md#cancelTicket) | **POST** /api/tickets/{id}/cancel | 
[**createTicket**](TicketControllerApi.md#createTicket) | **POST** /api/tickets | 
[**getTicket**](TicketControllerApi.md#getTicket) | **GET** /api/tickets/{id} | 
[**getTicketsApprover**](TicketControllerApi.md#getTicketsApprover) | **GET** /api/tickets/approver | 
[**getTicketsCreator**](TicketControllerApi.md#getTicketsCreator) | **GET** /api/tickets | 


# **approvalTicket**
> TicketDto approvalTicket()


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';
import type { TicketControllerApiApprovalTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request: TicketControllerApiApprovalTicketRequest = {
  
  id: 1,
};

const data = await apiInstance.approvalTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TicketDto**

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

# **cancelTicket**
> TicketDto cancelTicket()


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';
import type { TicketControllerApiCancelTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request: TicketControllerApiCancelTicketRequest = {
  
  id: 1,
};

const data = await apiInstance.cancelTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TicketDto**

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

# **createTicket**
> TicketDto createTicket(ticketRequest)


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';
import type { TicketControllerApiCreateTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request: TicketControllerApiCreateTicketRequest = {
  
  ticketRequest: {
    approverId: 1,
    type: "TIMESHEET_ADJUSTMENT",
    description: "description_example",
    date: new Date('1970-01-01').toISOString().split('T')[0];,
    typeSpecificData: {
      "key": {},
    },
  },
};

const data = await apiInstance.createTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketRequest** | **TicketRequest**|  |


### Return type

**TicketDto**

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

# **getTicket**
> TicketDto getTicket()


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';
import type { TicketControllerApiGetTicketRequest } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request: TicketControllerApiGetTicketRequest = {
  
  id: 1,
};

const data = await apiInstance.getTicket(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TicketDto**

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

# **getTicketsApprover**
> Array<TicketDto> getTicketsApprover()


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request = {};

const data = await apiInstance.getTicketsApprover(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TicketDto>**

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

# **getTicketsCreator**
> Array<TicketDto> getTicketsCreator()


### Example


```typescript
import { createConfiguration, TicketControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new TicketControllerApi(configuration);

const request = {};

const data = await apiInstance.getTicketsCreator(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TicketDto>**

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


