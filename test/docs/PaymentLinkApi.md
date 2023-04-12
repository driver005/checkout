# FiberSwaggerExampleApi.PaymentLinkApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PaymentLinksGet**](PaymentLinkApi.md#v1PaymentLinksGet) | **GET** /v1/payment_links | get all existing PaymentLinks
[**v1PaymentLinksIdDelete**](PaymentLinkApi.md#v1PaymentLinksIdDelete) | **DELETE** /v1/payment_links/{id} | delete PaymentLink by given ID
[**v1PaymentLinksIdGet**](PaymentLinkApi.md#v1PaymentLinksIdGet) | **GET** /v1/payment_links/{id} | get PaymentLink by given ID or 404 error.
[**v1PaymentLinksIdPost**](PaymentLinkApi.md#v1PaymentLinksIdPost) | **POST** /v1/payment_links/{id} | update PaymentLink
[**v1PaymentLinksPost**](PaymentLinkApi.md#v1PaymentLinksPost) | **POST** /v1/payment_links | create a new PaymentLink



## v1PaymentLinksGet

> [LinkPaymentLink] v1PaymentLinksGet()

get all existing PaymentLinks

Get all existing PaymentLinks.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentLinkApi();
apiInstance.v1PaymentLinksGet((error, data, response) => {
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

[**[LinkPaymentLink]**](LinkPaymentLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentLinksIdDelete

> String v1PaymentLinksIdDelete(id)

delete PaymentLink by given ID

Delete PaymentLink by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentLinkApi();
let id = "id_example"; // String | PaymentLink ID
apiInstance.v1PaymentLinksIdDelete(id, (error, data, response) => {
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
 **id** | **String**| PaymentLink ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentLinksIdGet

> LinkPaymentLink v1PaymentLinksIdGet(id)

get PaymentLink by given ID or 404 error.

Get PaymentLink by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentLinkApi();
let id = "id_example"; // String | PaymentLink ID
apiInstance.v1PaymentLinksIdGet(id, (error, data, response) => {
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
 **id** | **String**| PaymentLink ID | 

### Return type

[**LinkPaymentLink**](LinkPaymentLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PaymentLinksIdPost

> LinkPaymentLink v1PaymentLinksIdPost(id)

update PaymentLink

Update PaymentLink.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentLinkApi();
let id = "id_example"; // String | PaymentLink ID
apiInstance.v1PaymentLinksIdPost(id, (error, data, response) => {
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
 **id** | **String**| PaymentLink ID | 

### Return type

[**LinkPaymentLink**](LinkPaymentLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PaymentLinksPost

> LinkPaymentLink v1PaymentLinksPost()

create a new PaymentLink

Create a new PaymentLink.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PaymentLinkApi();
apiInstance.v1PaymentLinksPost((error, data, response) => {
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

[**LinkPaymentLink**](LinkPaymentLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

