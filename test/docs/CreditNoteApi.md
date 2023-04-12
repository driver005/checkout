# FiberSwaggerExampleApi.CreditNoteApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreditNotesIdLinesGet**](CreditNoteApi.md#v1CreditNotesIdLinesGet) | **GET** /v1/credit_notes/{id}/lines | get CreditNote by given ID and return his Linitems.
[**v1CreditNotesIdVoidGet**](CreditNoteApi.md#v1CreditNotesIdVoidGet) | **GET** /v1/credit_notes/{id}/void | update CreditNote to status void



## v1CreditNotesIdLinesGet

> CreditCreditNote v1CreditNotesIdLinesGet(id)

get CreditNote by given ID and return his Linitems.

Get CreditNote by given ID and return his Linitems.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CreditNoteApi();
let id = "id_example"; // String | CreditNote ID
apiInstance.v1CreditNotesIdLinesGet(id, (error, data, response) => {
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
 **id** | **String**| CreditNote ID | 

### Return type

[**CreditCreditNote**](CreditCreditNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CreditNotesIdVoidGet

> CreditCreditNote v1CreditNotesIdVoidGet(id)

update CreditNote to status void

Update CreditNote to status void.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CreditNoteApi();
let id = "id_example"; // String | CreditNote ID
apiInstance.v1CreditNotesIdVoidGet(id, (error, data, response) => {
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
 **id** | **String**| CreditNote ID | 

### Return type

[**CreditCreditNote**](CreditCreditNote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

