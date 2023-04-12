# FiberSwaggerExampleApi.PaymentMethodApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PaymentMethodsGet**](PaymentMethodApi.md#v1PaymentMethodsGet) | **GET** /v1/payment_methods | get all existing PaymentMethods
[**v1PaymentMethodsIdAttachPost**](PaymentMethodApi.md#v1PaymentMethodsIdAttachPost) | **POST** /v1/payment_methods/{id}/attach | attaching PaymentMethod to Customer by given ID
[**v1PaymentMethodsIdDelete**](PaymentMethodApi.md#v1PaymentMethodsIdDelete) | **DELETE** /v1/payment_methods/{id} | delete PaymentMethod by given ID
[**v1PaymentMethodsIdDettachPost**](PaymentMethodApi.md#v1PaymentMethodsIdDettachPost) | **POST** /v1/payment_methods/{id}/dettach | dettaching PaymentMethod from Customer by given ID
[**v1PaymentMethodsIdGet**](PaymentMethodApi.md#v1PaymentMethodsIdGet) | **GET** /v1/payment_methods/{id} | get PaymentMethod by given ID or 404 error.
[**v1PaymentMethodsIdPost**](PaymentMethodApi.md#v1PaymentMethodsIdPost) | **POST** /v1/payment_methods/{id} | update PaymentMethod
[**v1PaymentMethodsPost**](PaymentMethodApi.md#v1PaymentMethodsPost) | **POST** /v1/payment_methods | create a new PaymentMethod



## v1PaymentMethodsGet

> [MethodPaymentMethod] v1PaymentMethodsGet()

get all existing PaymentMethods

Get all existing PaymentMethods.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
apiInstance.v1PaymentMethodsGet((error, data, response) => {
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

[**[MethodPaymentMethod]**](MethodPaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentMethodsIdAttachPost

> String v1PaymentMethodsIdAttachPost(id)

attaching PaymentMethod to Customer by given ID

Attaching PaymentMethod to Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
let id = "id_example"; // String | PaymentMethod ID
apiInstance.v1PaymentMethodsIdAttachPost(id, (error, data, response) => {
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
 **id** | **String**| PaymentMethod ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentMethodsIdDelete

> String v1PaymentMethodsIdDelete(id)

delete PaymentMethod by given ID

Delete PaymentMethod by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
let id = "id_example"; // String | PaymentMethod ID
apiInstance.v1PaymentMethodsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| PaymentMethod ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentMethodsIdDettachPost

> String v1PaymentMethodsIdDettachPost(id)

dettaching PaymentMethod from Customer by given ID

dettaching PaymentMethod from Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
let id = "id_example"; // String | PaymentMethod ID
apiInstance.v1PaymentMethodsIdDettachPost(id, (error, data, response) => {
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
 **id** | **String**| PaymentMethod ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentMethodsIdGet

> MethodPaymentMethod v1PaymentMethodsIdGet(id)

get PaymentMethod by given ID or 404 error.

Get PaymentMethod by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
let id = "id_example"; // String | PaymentMethod ID
apiInstance.v1PaymentMethodsIdGet(id, (error, data, response) => {
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
 **id** | **String**| PaymentMethod ID | 

### Return type

[**MethodPaymentMethod**](MethodPaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentMethodsIdPost

> MethodPaymentMethod v1PaymentMethodsIdPost(id)

update PaymentMethod

Update PaymentMethod.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
let id = "id_example"; // String | PaymentMethod ID
apiInstance.v1PaymentMethodsIdPost(id, (error, data, response) => {
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
 **id** | **String**| PaymentMethod ID | 

### Return type

[**MethodPaymentMethod**](MethodPaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentMethodsPost

> MethodPaymentMethod v1PaymentMethodsPost()

create a new PaymentMethod

Create a new PaymentMethod.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentMethodApi();
apiInstance.v1PaymentMethodsPost((error, data, response) => {
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

[**MethodPaymentMethod**](MethodPaymentMethod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

