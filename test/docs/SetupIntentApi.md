# FiberSwaggerExampleApi.SetupIntentApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SetupIntentsGet**](SetupIntentApi.md#v1SetupIntentsGet) | **GET** /v1/setup_intents | get all existing SetupIntents
[**v1SetupIntentsIdCancelePost**](SetupIntentApi.md#v1SetupIntentsIdCancelePost) | **POST** /v1/setup_intents/{id}/cancele | cancel SetupIntent
[**v1SetupIntentsIdConfirmPost**](SetupIntentApi.md#v1SetupIntentsIdConfirmPost) | **POST** /v1/setup_intents/{id}/confirm | confirm SetupIntent
[**v1SetupIntentsIdDelete**](SetupIntentApi.md#v1SetupIntentsIdDelete) | **DELETE** /v1/setup_intents/{id} | delete SetupIntent by given ID
[**v1SetupIntentsIdGet**](SetupIntentApi.md#v1SetupIntentsIdGet) | **GET** /v1/setup_intents/{id} | get SetupIntent by given ID or 404 error.
[**v1SetupIntentsIdPost**](SetupIntentApi.md#v1SetupIntentsIdPost) | **POST** /v1/setup_intents/{id} | update SetupIntent
[**v1SetupIntentsPost**](SetupIntentApi.md#v1SetupIntentsPost) | **POST** /v1/setup_intents | create a new SetupIntent



## v1SetupIntentsGet

> [IntentSetupIntent] v1SetupIntentsGet()

get all existing SetupIntents

Get all existing SetupIntents.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
apiInstance.v1SetupIntentsGet((error, data, response) => {
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

[**[IntentSetupIntent]**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SetupIntentsIdCancelePost

> IntentSetupIntent v1SetupIntentsIdCancelePost(id)

cancel SetupIntent

Cancel SetupIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
let id = "id_example"; // String | SetupIntent ID
apiInstance.v1SetupIntentsIdCancelePost(id, (error, data, response) => {
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
 **id** | **String**| SetupIntent ID | 

### Return type

[**IntentSetupIntent**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupIntentsIdConfirmPost

> IntentSetupIntent v1SetupIntentsIdConfirmPost(id)

confirm SetupIntent

Confirm SetupIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
let id = "id_example"; // String | SetupIntent ID
apiInstance.v1SetupIntentsIdConfirmPost(id, (error, data, response) => {
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
 **id** | **String**| SetupIntent ID | 

### Return type

[**IntentSetupIntent**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupIntentsIdDelete

> String v1SetupIntentsIdDelete(id)

delete SetupIntent by given ID

Delete SetupIntent by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
let id = "id_example"; // String | SetupIntent ID
apiInstance.v1SetupIntentsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| SetupIntent ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupIntentsIdGet

> IntentSetupIntent v1SetupIntentsIdGet(id)

get SetupIntent by given ID or 404 error.

Get SetupIntent by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
let id = "id_example"; // String | SetupIntent ID
apiInstance.v1SetupIntentsIdGet(id, (error, data, response) => {
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
 **id** | **String**| SetupIntent ID | 

### Return type

[**IntentSetupIntent**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SetupIntentsIdPost

> IntentSetupIntent v1SetupIntentsIdPost(id)

update SetupIntent

Update SetupIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
let id = "id_example"; // String | SetupIntent ID
apiInstance.v1SetupIntentsIdPost(id, (error, data, response) => {
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
 **id** | **String**| SetupIntent ID | 

### Return type

[**IntentSetupIntent**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SetupIntentsPost

> IntentSetupIntent v1SetupIntentsPost()

create a new SetupIntent

Create a new SetupIntent.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SetupIntentApi();
apiInstance.v1SetupIntentsPost((error, data, response) => {
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

[**IntentSetupIntent**](IntentSetupIntent.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

