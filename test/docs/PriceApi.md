# FiberSwaggerExampleApi.PriceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PricesGet**](PriceApi.md#v1PricesGet) | **GET** /v1/prices | get all existing Prices
[**v1PricesIdDelete**](PriceApi.md#v1PricesIdDelete) | **DELETE** /v1/prices/{id} | delete Price by given ID
[**v1PricesIdGet**](PriceApi.md#v1PricesIdGet) | **GET** /v1/prices/{id} | get Price by given ID or 404 error.
[**v1PricesIdPost**](PriceApi.md#v1PricesIdPost) | **POST** /v1/prices/{id} | update Price
[**v1PricesPost**](PriceApi.md#v1PricesPost) | **POST** /v1/prices | create a new Price



## v1PricesGet

> [PricePrice] v1PricesGet()

get all existing Prices

Get all existing Prices.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PriceApi();
apiInstance.v1PricesGet((error, data, response) => {
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

[**[PricePrice]**](PricePrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PricesIdDelete

> String v1PricesIdDelete(id)

delete Price by given ID

Delete Price by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PriceApi();
let id = "id_example"; // String | Price ID
apiInstance.v1PricesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Price ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PricesIdGet

> PricePrice v1PricesIdGet(id)

get Price by given ID or 404 error.

Get Price by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PriceApi();
let id = "id_example"; // String | Price ID
apiInstance.v1PricesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Price ID | 

### Return type

[**PricePrice**](PricePrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PricesIdPost

> PricePrice v1PricesIdPost(id)

update Price

Update Price.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PriceApi();
let id = "id_example"; // String | Price ID
apiInstance.v1PricesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Price ID | 

### Return type

[**PricePrice**](PricePrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PricesPost

> PricePrice v1PricesPost()

create a new Price

Create a new Price.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PriceApi();
apiInstance.v1PricesPost((error, data, response) => {
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

[**PricePrice**](PricePrice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

