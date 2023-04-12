# FiberSwaggerExampleApi.CashBalanceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersIdCashBalanceGet**](CashBalanceApi.md#v1CustomersIdCashBalanceGet) | **GET** /v1/customers/{id}/cash_balance | get all existing CashBalances
[**v1CustomersIdCashBalanceIdDelete**](CashBalanceApi.md#v1CustomersIdCashBalanceIdDelete) | **DELETE** /v1/customers/{id}/cash_balance/{id} | delete CashBalance by given ID
[**v1CustomersIdCashBalanceIdGet**](CashBalanceApi.md#v1CustomersIdCashBalanceIdGet) | **GET** /v1/customers/{id}/cash_balance/{id} | get CashBalance by given ID or 404 error.
[**v1CustomersIdCashBalanceIdPost**](CashBalanceApi.md#v1CustomersIdCashBalanceIdPost) | **POST** /v1/customers/{id}/cash_balance/{id} | update CashBalance
[**v1CustomersIdCashBalancePost**](CashBalanceApi.md#v1CustomersIdCashBalancePost) | **POST** /v1/customers/{id}/cash_balance | create a new CashBalance



## v1CustomersIdCashBalanceGet

> [CashCashBalance] v1CustomersIdCashBalanceGet(id, customerId)

get all existing CashBalances

Get all existing CashBalances.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CashBalanceApi();
let id = "id_example"; // String | CashBalance ID
let customerId = "customerId_example"; // String | Customer ID
apiInstance.v1CustomersIdCashBalanceGet(id, customerId, (error, data, response) => {
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
 **id** | **String**| CashBalance ID | 
 **customerId** | **String**| Customer ID | 

### Return type

[**[CashCashBalance]**](CashCashBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdCashBalanceIdDelete

> String v1CustomersIdCashBalanceIdDelete(id, customerId)

delete CashBalance by given ID

Delete CashBalance by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CashBalanceApi();
let id = "id_example"; // String | CashBalance ID
let customerId = "customerId_example"; // String | Customer ID
apiInstance.v1CustomersIdCashBalanceIdDelete(id, customerId, (error, data, response) => {
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
 **id** | **String**| CashBalance ID | 
 **customerId** | **String**| Customer ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdCashBalanceIdGet

> CashCashBalance v1CustomersIdCashBalanceIdGet(id, customerId)

get CashBalance by given ID or 404 error.

Get CashBalance by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CashBalanceApi();
let id = "id_example"; // String | CashBalance ID
let customerId = "customerId_example"; // String | Customer ID
apiInstance.v1CustomersIdCashBalanceIdGet(id, customerId, (error, data, response) => {
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
 **id** | **String**| CashBalance ID | 
 **customerId** | **String**| Customer ID | 

### Return type

[**CashCashBalance**](CashCashBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdCashBalanceIdPost

> CashCashBalance v1CustomersIdCashBalanceIdPost(id, customerId)

update CashBalance

Update CashBalance.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CashBalanceApi();
let id = "id_example"; // String | CashBalance ID
let customerId = "customerId_example"; // String | Customer ID
apiInstance.v1CustomersIdCashBalanceIdPost(id, customerId, (error, data, response) => {
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
 **id** | **String**| CashBalance ID | 
 **customerId** | **String**| Customer ID | 

### Return type

[**CashCashBalance**](CashCashBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdCashBalancePost

> CashCashBalance v1CustomersIdCashBalancePost()

create a new CashBalance

Create a new CashBalance.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CashBalanceApi();
apiInstance.v1CustomersIdCashBalancePost((error, data, response) => {
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

[**CashCashBalance**](CashCashBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

