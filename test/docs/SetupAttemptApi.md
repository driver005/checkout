# FiberSwaggerExampleApi.SetupAttemptApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SetupAttemptsGet**](SetupAttemptApi.md#v1SetupAttemptsGet) | **GET** /v1/setup_attempts | get all existing SetupAttempts
[**v1SetupAttemptsIdDelete**](SetupAttemptApi.md#v1SetupAttemptsIdDelete) | **DELETE** /v1/setup_attempts/{id} | delete SetupAttempt by given ID
[**v1SetupAttemptsIdGet**](SetupAttemptApi.md#v1SetupAttemptsIdGet) | **GET** /v1/setup_attempts/{id} | get SetupAttempt by given ID or 404 error.
[**v1SetupAttemptsIdPost**](SetupAttemptApi.md#v1SetupAttemptsIdPost) | **POST** /v1/setup_attempts/{id} | update SetupAttempt
[**v1SetupAttemptsPost**](SetupAttemptApi.md#v1SetupAttemptsPost) | **POST** /v1/setup_attempts | create a new SetupAttempt



## v1SetupAttemptsGet

> [AttemptSetupAttempt] v1SetupAttemptsGet()

get all existing SetupAttempts

Get all existing SetupAttempts.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupAttemptApi();
apiInstance.v1SetupAttemptsGet((error, data, response) => {
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

[**[AttemptSetupAttempt]**](AttemptSetupAttempt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SetupAttemptsIdDelete

> String v1SetupAttemptsIdDelete(id)

delete SetupAttempt by given ID

Delete SetupAttempt by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupAttemptApi();
let id = "id_example"; // String | SetupAttempt ID
apiInstance.v1SetupAttemptsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| SetupAttempt ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupAttemptsIdGet

> AttemptSetupAttempt v1SetupAttemptsIdGet(id)

get SetupAttempt by given ID or 404 error.

Get SetupAttempt by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupAttemptApi();
let id = "id_example"; // String | SetupAttempt ID
apiInstance.v1SetupAttemptsIdGet(id, (error, data, response) => {
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
 **id** | **String**| SetupAttempt ID | 

### Return type

[**AttemptSetupAttempt**](AttemptSetupAttempt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SetupAttemptsIdPost

> AttemptSetupAttempt v1SetupAttemptsIdPost(id)

update SetupAttempt

Update SetupAttempt.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupAttemptApi();
let id = "id_example"; // String | SetupAttempt ID
apiInstance.v1SetupAttemptsIdPost(id, (error, data, response) => {
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
 **id** | **String**| SetupAttempt ID | 

### Return type

[**AttemptSetupAttempt**](AttemptSetupAttempt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupAttemptsPost

> AttemptSetupAttempt v1SetupAttemptsPost()

create a new SetupAttempt

Create a new SetupAttempt.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupAttemptApi();
apiInstance.v1SetupAttemptsPost((error, data, response) => {
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

[**AttemptSetupAttempt**](AttemptSetupAttempt.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

