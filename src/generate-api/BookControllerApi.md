# .BookControllerApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllBooks**](BookControllerApi.md#getAllBooks) | **GET** /api/books/ | 


# **getAllBooks**
> Array<Book> getAllBooks()


### Example


```typescript
import { createConfiguration, BookControllerApi } from '';

const configuration = createConfiguration();
const apiInstance = new BookControllerApi(configuration);

const request = {};

const data = await apiInstance.getAllBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<Book>**

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


