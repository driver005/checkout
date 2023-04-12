# FiberSwaggerExampleApi.DiscountApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersIdDiscountGet**](DiscountApi.md#v1CustomersIdDiscountGet) | **GET** /v1/customers/{id}/discount | get all existing Discounts
[**v1CustomersIdDiscountIdDelete**](DiscountApi.md#v1CustomersIdDiscountIdDelete) | **DELETE** /v1/customers/{id}/discount/{id} | delete Discount by given ID
[**v1CustomersIdDiscountIdGet**](DiscountApi.md#v1CustomersIdDiscountIdGet) | **GET** /v1/customers/{id}/discount/{id} | get Discount by given ID or 404 error.
[**v1CustomersIdDiscountIdPost**](DiscountApi.md#v1CustomersIdDiscountIdPost) | **POST** /v1/customers/{id}/discount/{id} | update Discount
[**v1CustomersIdDiscountPost**](DiscountApi.md#v1CustomersIdDiscountPost) | **POST** /v1/customers/{id}/discount | create a new Discount



## v1CustomersIdDiscountGet

> [DiscountDiscount] v1CustomersIdDiscountGet()

get all existing Discounts

Get all existing Discounts.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DiscountApi();
apiInstance.v1CustomersIdDiscountGet((error, data, response) => {
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

[**[DiscountDiscount]**](DiscountDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdDiscountIdDelete

> String v1CustomersIdDiscountIdDelete(id)

delete Discount by given ID

Delete Discount by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DiscountApi();
let id = "id_example"; // String | Discount ID
apiInstance.v1CustomersIdDiscountIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Discount ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdDiscountIdGet

> DiscountDiscount v1CustomersIdDiscountIdGet(id)

get Discount by given ID or 404 error.

Get Discount by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DiscountApi();
let id = "id_example"; // String | Discount ID
apiInstance.v1CustomersIdDiscountIdGet(id, (error, data, response) => {
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
 **id** | **String**| Discount ID | 

### Return type

[**DiscountDiscount**](DiscountDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdDiscountIdPost

> DiscountDiscount v1CustomersIdDiscountIdPost(id)

update Discount

Update Discount.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DiscountApi();
let id = "id_example"; // String | Discount ID
apiInstance.v1CustomersIdDiscountIdPost(id, (error, data, response) => {
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
 **id** | **String**| Discount ID | 

### Return type

[**DiscountDiscount**](DiscountDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdDiscountPost

> DiscountDiscount v1CustomersIdDiscountPost()

create a new Discount

Create a new Discount.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.DiscountApi();
apiInstance.v1CustomersIdDiscountPost((error, data, response) => {
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

[**DiscountDiscount**](DiscountDiscount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

