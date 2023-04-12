# FiberSwaggerExampleApi.ProductApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ProductsGet**](ProductApi.md#v1ProductsGet) | **GET** /v1/products | get all existing Products
[**v1ProductsIdDelete**](ProductApi.md#v1ProductsIdDelete) | **DELETE** /v1/products/{id} | delete Product by given ID
[**v1ProductsIdGet**](ProductApi.md#v1ProductsIdGet) | **GET** /v1/products/{id} | get Product by given ID or 404 error.
[**v1ProductsIdPost**](ProductApi.md#v1ProductsIdPost) | **POST** /v1/products/{id} | update Product
[**v1ProductsPost**](ProductApi.md#v1ProductsPost) | **POST** /v1/products | create a new Product



## v1ProductsGet

> [ProductProduct] v1ProductsGet()

get all existing Products

Get all existing Products.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ProductApi();
apiInstance.v1ProductsGet((error, data, response) => {
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

[**[ProductProduct]**](ProductProduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ProductsIdDelete

> String v1ProductsIdDelete(id)

delete Product by given ID

Delete Product by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ProductApi();
let id = "id_example"; // String | Product ID
apiInstance.v1ProductsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Product ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ProductsIdGet

> ProductProduct v1ProductsIdGet(id)

get Product by given ID or 404 error.

Get Product by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ProductApi();
let id = "id_example"; // String | Product ID
apiInstance.v1ProductsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Product ID | 

### Return type

[**ProductProduct**](ProductProduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ProductsIdPost

> ProductProduct v1ProductsIdPost(id)

update Product

Update Product.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ProductApi();
let id = "id_example"; // String | Product ID
apiInstance.v1ProductsIdPost(id, (error, data, response) => {
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
 **id** | **String**| Product ID | 

### Return type

[**ProductProduct**](ProductProduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ProductsPost

> ProductProduct v1ProductsPost()

create a new Product

Create a new Product.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.ProductApi();
apiInstance.v1ProductsPost((error, data, response) => {
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

[**ProductProduct**](ProductProduct.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

