# .ApprovalControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCandidates**](ApprovalControllerApi.md#getCandidates) | **GET** /api/approvals/candidates | 


# **getCandidates**
> Array<UserDto> getCandidates()


### Example


```typescript
import { createConfiguration, ApprovalControllerApi } from '';
import type { ApprovalControllerApiGetCandidatesRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ApprovalControllerApi(configuration);

const request: ApprovalControllerApiGetCandidatesRequest = {
  
  ticketType: "TIMESHEET_ADJUSTMENT",
};

const data = await apiInstance.getCandidates(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketType** | [**&#39;TIMESHEET_ADJUSTMENT&#39; | &#39;LEAVE_REQUEST&#39; | &#39;OVERTIME_REQUEST&#39; | &#39;WORK_FROM_HOME&#39;**]**Array<&#39;TIMESHEET_ADJUSTMENT&#39; &#124; &#39;LEAVE_REQUEST&#39; &#124; &#39;OVERTIME_REQUEST&#39; &#124; &#39;WORK_FROM_HOME&#39;>** |  | defaults to undefined


### Return type

**Array<UserDto>**

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


