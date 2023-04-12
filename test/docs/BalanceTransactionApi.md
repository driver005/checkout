# FiberSwaggerExampleApi.BalanceTransactionApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1BalanceTransactionsGet**](BalanceTransactionApi.md#v1BalanceTransactionsGet) | **GET** /v1/balance_transactions | get all existing BalanceTransaction
[**v1BalanceTransactionsIdGet**](BalanceTransactionApi.md#v1BalanceTransactionsIdGet) | **GET** /v1/balance_transactions/{id} | get BalanceTransaction by given ID or 404 error.



## v1BalanceTransactionsGet

> [BalanceBalanceTransaction] v1BalanceTransactionsGet()

get all existing BalanceTransaction

Get all existing BalanceTransaction.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.BalanceTransactionApi();
apiInstance.v1BalanceTransactionsGet((error, data, response) => {
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

[**[BalanceBalanceTransaction]**](BalanceBalanceTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1BalanceTransactionsIdGet

> BalanceBalanceTransaction v1BalanceTransactionsIdGet(id)

get BalanceTransaction by given ID or 404 error.

Get BalanceTransaction by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.BalanceTransactionApi();
let id = "id_example"; // String | BalanceTransaction ID
apiInstance.v1BalanceTransactionsIdGet(id, (error, data, response) => {
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
 **id** | **String**| BalanceTransaction ID | 

### Return type

[**BalanceBalanceTransaction**](BalanceBalanceTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

