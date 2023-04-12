# FiberSwaggerExampleApi.ChargeApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ChargesGet**](ChargeApi.md#v1ChargesGet) | **GET** /v1/charges | get all existing Charges
[**v1ChargesIdCapturePost**](ChargeApi.md#v1ChargesIdCapturePost) | **POST** /v1/charges/{id}/capture | capture Charge
[**v1ChargesIdDelete**](ChargeApi.md#v1ChargesIdDelete) | **DELETE** /v1/charges/{id} | delete Charge by given ID
[**v1ChargesIdGet**](ChargeApi.md#v1ChargesIdGet) | **GET** /v1/charges/{id} | get Charge by given ID or 404 error.
[**v1ChargesIdPost**](ChargeApi.md#v1ChargesIdPost) | **POST** /v1/charges/{id} | update Charge
[**v1ChargesPost**](ChargeApi.md#v1ChargesPost) | **POST** /v1/charges | create a new Charge



## v1ChargesGet

> [ChargeCharge] v1ChargesGet()

get all existing Charges

Get all existing Charges.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
apiInstance.v1ChargesGet((error, data, response) => {
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

[**[ChargeCharge]**](ChargeCharge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ChargesIdCapturePost

> ChargeCharge v1ChargesIdCapturePost(id)

capture Charge

Capture Charge.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
let id = "id_example"; // String | Charge ID
apiInstance.v1ChargesIdCapturePost(id, (error, data, response) => {
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
 **id** | **String**| Charge ID | 

### Return type

[**ChargeCharge**](ChargeCharge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ChargesIdDelete

> String v1ChargesIdDelete(id)

delete Charge by given ID

Delete Charge by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
let id = "id_example"; // String | Charge ID
apiInstance.v1ChargesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Charge ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ChargesIdGet

> ChargeCharge v1ChargesIdGet(id)

get Charge by given ID or 404 error.

Get Charge by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
let id = "id_example"; // String | Charge ID
apiInstance.v1ChargesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Charge ID | 

### Return type

[**ChargeCharge**](ChargeCharge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ChargesIdPost

> ChargeCharge v1ChargesIdPost(id)

update Charge

Update Charge.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
let id = "id_example"; // String | Charge ID
apiInstance.v1ChargesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Charge ID | 

### Return type

[**ChargeCharge**](ChargeCharge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ChargesPost

> ChargeCharge v1ChargesPost()

create a new Charge

Create a new Charge.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ChargeApi();
apiInstance.v1ChargesPost((error, data, response) => {
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

[**ChargeCharge**](ChargeCharge.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

