# FiberSwaggerExampleApi.SourceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersIdSourcesIdDelete**](SourceApi.md#v1CustomersIdSourcesIdDelete) | **DELETE** /v1/customers/{id}/sources/{id} | dettaching Source from Customer by given ID
[**v1CustomersIdSourcesPost**](SourceApi.md#v1CustomersIdSourcesPost) | **POST** /v1/customers/{id}/sources | attaching Source to Customer by given ID
[**v1SourcesGet**](SourceApi.md#v1SourcesGet) | **GET** /v1/sources | get all existing Sources
[**v1SourcesIdDelete**](SourceApi.md#v1SourcesIdDelete) | **DELETE** /v1/sources/{id} | delete Source by given ID
[**v1SourcesIdGet**](SourceApi.md#v1SourcesIdGet) | **GET** /v1/sources/{id} | get Source by given ID or 404 error.
[**v1SourcesIdPost**](SourceApi.md#v1SourcesIdPost) | **POST** /v1/sources/{id} | update Source
[**v1SourcesPost**](SourceApi.md#v1SourcesPost) | **POST** /v1/sources | create a new Source



## v1CustomersIdSourcesIdDelete

> String v1CustomersIdSourcesIdDelete(id)

dettaching Source from Customer by given ID

dettaching Source from Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
let id = "id_example"; // String | Source ID
apiInstance.v1CustomersIdSourcesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Source ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdSourcesPost

> String v1CustomersIdSourcesPost(id)

attaching Source to Customer by given ID

Attaching Source to Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
let id = "id_example"; // String | Source ID
apiInstance.v1CustomersIdSourcesPost(id, (error, data, response) => {
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
 **id** | **String**| Source ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SourcesGet

> [SourceSource] v1SourcesGet()

get all existing Sources

Get all existing Sources.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
apiInstance.v1SourcesGet((error, data, response) => {
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

[**[SourceSource]**](SourceSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SourcesIdDelete

> String v1SourcesIdDelete(id)

delete Source by given ID

Delete Source by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
let id = "id_example"; // String | Source ID
apiInstance.v1SourcesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Source ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SourcesIdGet

> SourceSource v1SourcesIdGet(id)

get Source by given ID or 404 error.

Get Source by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
let id = "id_example"; // String | Source ID
apiInstance.v1SourcesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Source ID | 

### Return type

[**SourceSource**](SourceSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SourcesIdPost

> SourceSource v1SourcesIdPost(id)

update Source

Update Source.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
let id = "id_example"; // String | Source ID
apiInstance.v1SourcesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Source ID | 

### Return type

[**SourceSource**](SourceSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SourcesPost

> SourceSource v1SourcesPost()

create a new Source

Create a new Source.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SourceApi();
apiInstance.v1SourcesPost((error, data, response) => {
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

[**SourceSource**](SourceSource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

