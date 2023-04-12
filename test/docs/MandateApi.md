# FiberSwaggerExampleApi.MandateApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1MandatesGet**](MandateApi.md#v1MandatesGet) | **GET** /v1/mandates | get all existing Mandates
[**v1MandatesIdDelete**](MandateApi.md#v1MandatesIdDelete) | **DELETE** /v1/mandates/{id} | delete Mandate by given ID
[**v1MandatesIdGet**](MandateApi.md#v1MandatesIdGet) | **GET** /v1/mandates/{id} | get Mandate by given ID or 404 error.
[**v1MandatesIdPost**](MandateApi.md#v1MandatesIdPost) | **POST** /v1/mandates/{id} | update Mandate
[**v1MandatesPost**](MandateApi.md#v1MandatesPost) | **POST** /v1/mandates | create a new Mandate



## v1MandatesGet

> [MandateMandate] v1MandatesGet()

get all existing Mandates

Get all existing Mandates.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.MandateApi();
apiInstance.v1MandatesGet((error, data, response) => {
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

[**[MandateMandate]**](MandateMandate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1MandatesIdDelete

> String v1MandatesIdDelete(id)

delete Mandate by given ID

Delete Mandate by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.MandateApi();
let id = "id_example"; // String | Mandate ID
apiInstance.v1MandatesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Mandate ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1MandatesIdGet

> MandateMandate v1MandatesIdGet(id)

get Mandate by given ID or 404 error.

Get Mandate by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.MandateApi();
let id = "id_example"; // String | Mandate ID
apiInstance.v1MandatesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Mandate ID | 

### Return type

[**MandateMandate**](MandateMandate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1MandatesIdPost

> MandateMandate v1MandatesIdPost(id)

update Mandate

Update Mandate.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.MandateApi();
let id = "id_example"; // String | Mandate ID
apiInstance.v1MandatesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Mandate ID | 

### Return type

[**MandateMandate**](MandateMandate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1MandatesPost

> MandateMandate v1MandatesPost()

create a new Mandate

Create a new Mandate.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.MandateApi();
apiInstance.v1MandatesPost((error, data, response) => {
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

[**MandateMandate**](MandateMandate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

