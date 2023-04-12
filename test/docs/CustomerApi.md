# FiberSwaggerExampleApi.CustomerApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersGet**](CustomerApi.md#v1CustomersGet) | **GET** /v1/customers | get all existing Customers
[**v1CustomersIdDelete**](CustomerApi.md#v1CustomersIdDelete) | **DELETE** /v1/customers/{id} | delete Customer by given ID
[**v1CustomersIdGet**](CustomerApi.md#v1CustomersIdGet) | **GET** /v1/customers/{id} | get Customer by given ID or 404 error.
[**v1CustomersIdPost**](CustomerApi.md#v1CustomersIdPost) | **POST** /v1/customers/{id} | update Customer
[**v1CustomersIdTaxIdsGet**](CustomerApi.md#v1CustomersIdTaxIdsGet) | **GET** /v1/customers/{id}/tax_ids | get all existing Customers
[**v1CustomersIdTaxIdsPost**](CustomerApi.md#v1CustomersIdTaxIdsPost) | **POST** /v1/customers/{id}/tax_ids | create a new Customer
[**v1CustomersIdTaxIdsTaxIdDelete**](CustomerApi.md#v1CustomersIdTaxIdsTaxIdDelete) | **DELETE** /v1/customers/{id}/tax_ids/{tax_id} | delete Customer by given ID
[**v1CustomersIdTaxIdsTaxIdGet**](CustomerApi.md#v1CustomersIdTaxIdsTaxIdGet) | **GET** /v1/customers/{id}/tax_ids/{tax_id} | get Customer by given ID or 404 error.
[**v1CustomersPost**](CustomerApi.md#v1CustomersPost) | **POST** /v1/customers | create a new Customer



## v1CustomersGet

> [CustomerCustomer] v1CustomersGet()

get all existing Customers

Get all existing Customers.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
apiInstance.v1CustomersGet((error, data, response) => {
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

[**[CustomerCustomer]**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdDelete

> String v1CustomersIdDelete(id)

delete Customer by given ID

Delete Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
let id = "id_example"; // String | Customer ID
apiInstance.v1CustomersIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Customer ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdGet

> CustomerCustomer v1CustomersIdGet(id)

get Customer by given ID or 404 error.

Get Customer by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
let id = "id_example"; // String | Customer ID
apiInstance.v1CustomersIdGet(id, (error, data, response) => {
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
 **id** | **String**| Customer ID | 

### Return type

[**CustomerCustomer**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdPost

> CustomerCustomer v1CustomersIdPost(id)

update Customer

Update Customer.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
let id = "id_example"; // String | Customer ID
apiInstance.v1CustomersIdPost(id, (error, data, response) => {
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
 **id** | **String**| Customer ID | 

### Return type

[**CustomerCustomer**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdTaxIdsGet

> [CustomerCustomer] v1CustomersIdTaxIdsGet()

get all existing Customers

Get all existing Customers.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
apiInstance.v1CustomersIdTaxIdsGet((error, data, response) => {
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

[**[CustomerCustomer]**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdTaxIdsPost

> CustomerCustomer v1CustomersIdTaxIdsPost()

create a new Customer

Create a new Customer.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
apiInstance.v1CustomersIdTaxIdsPost((error, data, response) => {
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

[**CustomerCustomer**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdTaxIdsTaxIdDelete

> String v1CustomersIdTaxIdsTaxIdDelete(taxId, id)

delete Customer by given ID

Delete Customer by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
let taxId = "taxId_example"; // String | Tax ID
let id = "id_example"; // String | Customer ID
apiInstance.v1CustomersIdTaxIdsTaxIdDelete(taxId, id, (error, data, response) => {
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
 **taxId** | **String**| Tax ID | 
 **id** | **String**| Customer ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CustomersIdTaxIdsTaxIdGet

> CustomerCustomer v1CustomersIdTaxIdsTaxIdGet(id, taxId)

get Customer by given ID or 404 error.

Get Customer by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
let id = "id_example"; // String | Customer ID
let taxId = "taxId_example"; // String | Tax ID
apiInstance.v1CustomersIdTaxIdsTaxIdGet(id, taxId, (error, data, response) => {
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
 **id** | **String**| Customer ID | 
 **taxId** | **String**| Tax ID | 

### Return type

[**CustomerCustomer**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersPost

> CustomerCustomer v1CustomersPost()

create a new Customer

Create a new Customer.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CustomerApi();
apiInstance.v1CustomersPost((error, data, response) => {
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

[**CustomerCustomer**](CustomerCustomer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

