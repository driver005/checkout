# FiberSwaggerExampleApi.FileApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1FilesGet**](FileApi.md#v1FilesGet) | **GET** /v1/files | get all existing Files
[**v1FilesIdDelete**](FileApi.md#v1FilesIdDelete) | **DELETE** /v1/files/{id} | delete File by given ID
[**v1FilesIdGet**](FileApi.md#v1FilesIdGet) | **GET** /v1/files/{id} | get File by given ID or 404 error.
[**v1FilesIdPost**](FileApi.md#v1FilesIdPost) | **POST** /v1/files/{id} | update File
[**v1FilesPost**](FileApi.md#v1FilesPost) | **POST** /v1/files | create a new File



## v1FilesGet

> [FileFile] v1FilesGet()

get all existing Files

Get all existing Files.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.FileApi();
apiInstance.v1FilesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[FileFile]**](FileFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1FilesIdDelete

> String v1FilesIdDelete(id)

delete File by given ID

Delete File by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.FileApi();
let id = "id_example"; // String | File ID
apiInstance.v1FilesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1FilesIdGet

> FileFile v1FilesIdGet(id)

get File by given ID or 404 error.

Get File by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.FileApi();
let id = "id_example"; // String | File ID
apiInstance.v1FilesIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File ID | 

### Return type

[**FileFile**](FileFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1FilesIdPost

> FileFile v1FilesIdPost(id)

update File

Update File.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.FileApi();
let id = "id_example"; // String | File ID
apiInstance.v1FilesIdPost(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| File ID | 

### Return type

[**FileFile**](FileFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1FilesPost

> FileFile v1FilesPost()

create a new File

Create a new File.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.FileApi();
apiInstance.v1FilesPost((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**FileFile**](FileFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

