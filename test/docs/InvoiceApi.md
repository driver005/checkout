# FiberSwaggerExampleApi.InvoiceApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1InvoicesGet**](InvoiceApi.md#v1InvoicesGet) | **GET** /v1/invoices | get all existing Invoices
[**v1InvoicesIdCancelPost**](InvoiceApi.md#v1InvoicesIdCancelPost) | **POST** /v1/invoices/{id}/cancel | cancel Invoice
[**v1InvoicesIdCapturePost**](InvoiceApi.md#v1InvoicesIdCapturePost) | **POST** /v1/invoices/{id}/capture | capture Invoice
[**v1InvoicesIdDelete**](InvoiceApi.md#v1InvoicesIdDelete) | **DELETE** /v1/invoices/{id} | delete Invoice by given ID
[**v1InvoicesIdFinalizePost**](InvoiceApi.md#v1InvoicesIdFinalizePost) | **POST** /v1/invoices/{id}/finalize | finalize Invoice
[**v1InvoicesIdGet**](InvoiceApi.md#v1InvoicesIdGet) | **GET** /v1/invoices/{id} | get Invoice by given ID or 404 error.
[**v1InvoicesIdMarkUncollectiblePost**](InvoiceApi.md#v1InvoicesIdMarkUncollectiblePost) | **POST** /v1/invoices/{id}/mark_uncollectible | mark Invoice as uncollectible
[**v1InvoicesIdPayPost**](InvoiceApi.md#v1InvoicesIdPayPost) | **POST** /v1/invoices/{id}/pay | pay Invoice
[**v1InvoicesIdPost**](InvoiceApi.md#v1InvoicesIdPost) | **POST** /v1/invoices/{id} | update Invoice
[**v1InvoicesIdSendPost**](InvoiceApi.md#v1InvoicesIdSendPost) | **POST** /v1/invoices/{id}/send | send Invoice
[**v1InvoicesIdUpcomingPost**](InvoiceApi.md#v1InvoicesIdUpcomingPost) | **POST** /v1/invoices/{id}/upcoming | upcoming Invoice
[**v1InvoicesIdVoidPost**](InvoiceApi.md#v1InvoicesIdVoidPost) | **POST** /v1/invoices/{id}/void | void Invoice
[**v1InvoicesPost**](InvoiceApi.md#v1InvoicesPost) | **POST** /v1/invoices | create a new Invoice



## v1InvoicesGet

> [InvoiceInvoice] v1InvoicesGet()

get all existing Invoices

Get all existing Invoices.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
apiInstance.v1InvoicesGet((error, data, response) => {
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

[**[InvoiceInvoice]**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1InvoicesIdCancelPost

> InvoiceInvoice v1InvoicesIdCancelPost(id)

cancel Invoice

Cancel Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdCancelPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdCapturePost

> InvoiceInvoice v1InvoicesIdCapturePost(id)

capture Invoice

Capture Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdCapturePost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdDelete

> String v1InvoicesIdDelete(id)

delete Invoice by given ID

Delete Invoice by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdFinalizePost

> InvoiceInvoice v1InvoicesIdFinalizePost(id)

finalize Invoice

Finalize Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdFinalizePost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdGet

> InvoiceInvoice v1InvoicesIdGet(id)

get Invoice by given ID or 404 error.

Get Invoice by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1InvoicesIdMarkUncollectiblePost

> InvoiceInvoice v1InvoicesIdMarkUncollectiblePost(id)

mark Invoice as uncollectible

Mark Invoice as uncollectible.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdMarkUncollectiblePost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdPayPost

> InvoiceInvoice v1InvoicesIdPayPost(id)

pay Invoice

Pay Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdPayPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdPost

> InvoiceInvoice v1InvoicesIdPost(id)

update Invoice

Update Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdSendPost

> InvoiceInvoice v1InvoicesIdSendPost(id)

send Invoice

Send Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdSendPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdUpcomingPost

> InvoiceInvoice v1InvoicesIdUpcomingPost(id)

upcoming Invoice

Upcoming Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdUpcomingPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesIdVoidPost

> InvoiceInvoice v1InvoicesIdVoidPost(id)

void Invoice

Void Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
let id = "id_example"; // String | Invoice ID
apiInstance.v1InvoicesIdVoidPost(id, (error, data, response) => {
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
 **id** | **String**| Invoice ID | 

### Return type

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1InvoicesPost

> InvoiceInvoice v1InvoicesPost()

create a new Invoice

Create a new Invoice.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.InvoiceApi();
apiInstance.v1InvoicesPost((error, data, response) => {
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

[**InvoiceInvoice**](InvoiceInvoice.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

