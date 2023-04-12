# FiberSwaggerExampleApi.BankAccountApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersIdSourcesIdVerifyPost**](BankAccountApi.md#v1CustomersIdSourcesIdVerifyPost) | **POST** /v1/customers/{id}/sources/{id}/verify | verify BankAccount



## v1CustomersIdSourcesIdVerifyPost

> BankBankAccount v1CustomersIdSourcesIdVerifyPost(id)

verify BankAccount

Verify BankAccount.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.BankAccountApi();
let id = "id_example"; // String | BankAccount ID
apiInstance.v1CustomersIdSourcesIdVerifyPost(id, (error, data, response) => {
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
 **id** | **String**| BankAccount ID | 

### Return type

[**BankBankAccount**](BankBankAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

