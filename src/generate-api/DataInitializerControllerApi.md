# .DataInitializerControllerApi

All URIs are relative to *http://localhost:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initializeData**](DataInitializerControllerApi.md#initializeData) | **GET** /initialize-data | 


# **initializeData**
> string initializeData()


### Example


```typescript
import { createConfiguration, DataInitializerControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new DataInitializerControllerApi(configuration);

const request = {};

const data = await apiInstance.initializeData(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


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


