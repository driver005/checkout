# FiberSwaggerExampleApi.InvoiceitemApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoiceitemsGet**](InvoiceitemApi.md#v1InvoiceitemsGet) | **GET** /v1/invoiceitems | get all existing Invoiceitems
[**v1InvoiceitemsIdDelete**](InvoiceitemApi.md#v1InvoiceitemsIdDelete) | **DELETE** /v1/invoiceitems/{id} | delete Invoiceitem by given ID
[**v1InvoiceitemsIdGet**](InvoiceitemApi.md#v1InvoiceitemsIdGet) | **GET** /v1/invoiceitems/{id} | get Invoiceitem by given ID or 404 error.
[**v1InvoiceitemsIdPost**](InvoiceitemApi.md#v1InvoiceitemsIdPost) | **POST** /v1/invoiceitems/{id} | update Invoiceitem
[**v1InvoiceitemsPost**](InvoiceitemApi.md#v1InvoiceitemsPost) | **POST** /v1/invoiceitems | create a new Invoiceitem



## v1InvoiceitemsGet

> [InvoiceItemInvoiceitem] v1InvoiceitemsGet()

get all existing Invoiceitems

Get all existing Invoiceitems.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceitemApi();
apiInstance.v1InvoiceitemsGet((error, data, response) => {
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

[**[InvoiceItemInvoiceitem]**](InvoiceItemInvoiceitem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1InvoiceitemsIdDelete

> String v1InvoiceitemsIdDelete(id)

delete Invoiceitem by given ID

Delete Invoiceitem by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceitemApi();
let id = "id_example"; // String | Invoiceitem ID
apiInstance.v1InvoiceitemsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Invoiceitem ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoiceitemsIdGet

> InvoiceItemInvoiceitem v1InvoiceitemsIdGet(id)

get Invoiceitem by given ID or 404 error.

Get Invoiceitem by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceitemApi();
let id = "id_example"; // String | Invoiceitem ID
apiInstance.v1InvoiceitemsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Invoiceitem ID | 

### Return type

[**InvoiceItemInvoiceitem**](InvoiceItemInvoiceitem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1InvoiceitemsIdPost

> InvoiceItemInvoiceitem v1InvoiceitemsIdPost(id)

update Invoiceitem

Update Invoiceitem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceitemApi();
let id = "id_example"; // String | Invoiceitem ID
apiInstance.v1InvoiceitemsIdPost(id, (error, data, response) => {
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
 **id** | **String**| Invoiceitem ID | 

### Return type

[**InvoiceItemInvoiceitem**](InvoiceItemInvoiceitem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoiceitemsPost

> InvoiceItemInvoiceitem v1InvoiceitemsPost()

create a new Invoiceitem

Create a new Invoiceitem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceitemApi();
apiInstance.v1InvoiceitemsPost((error, data, response) => {
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

[**InvoiceItemInvoiceitem**](InvoiceItemInvoiceitem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

