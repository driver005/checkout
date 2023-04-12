# FiberSwaggerExampleApi.QuoteApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1QuotesGet**](QuoteApi.md#v1QuotesGet) | **GET** /v1/quotes | get all existing Quotes
[**v1QuotesIdAcceptPost**](QuoteApi.md#v1QuotesIdAcceptPost) | **POST** /v1/quotes/{id}/accept | accept Quote
[**v1QuotesIdCancelPost**](QuoteApi.md#v1QuotesIdCancelPost) | **POST** /v1/quotes/{id}/cancel | cancel Quote
[**v1QuotesIdDelete**](QuoteApi.md#v1QuotesIdDelete) | **DELETE** /v1/quotes/{id} | delete Quote by given ID
[**v1QuotesIdFinalizePost**](QuoteApi.md#v1QuotesIdFinalizePost) | **POST** /v1/quotes/{id}/finalize | finalize Quote
[**v1QuotesIdGet**](QuoteApi.md#v1QuotesIdGet) | **GET** /v1/quotes/{id} | get Quote by given ID or 404 error.
[**v1QuotesIdPost**](QuoteApi.md#v1QuotesIdPost) | **POST** /v1/quotes/{id} | update Quote
[**v1QuotesPost**](QuoteApi.md#v1QuotesPost) | **POST** /v1/quotes | create a new Quote



## v1QuotesGet

> [QuoteQuote] v1QuotesGet()

get all existing Quotes

Get all existing Quotes.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
apiInstance.v1QuotesGet((error, data, response) => {
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

[**[QuoteQuote]**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1QuotesIdAcceptPost

> QuoteQuote v1QuotesIdAcceptPost(id)

accept Quote

Accept Quote.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdAcceptPost(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1QuotesIdCancelPost

> QuoteQuote v1QuotesIdCancelPost(id)

cancel Quote

Cancel Quote.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdCancelPost(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1QuotesIdDelete

> String v1QuotesIdDelete(id)

delete Quote by given ID

Delete Quote by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1QuotesIdFinalizePost

> QuoteQuote v1QuotesIdFinalizePost(id)

finalize Quote

Finalize Quote.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdFinalizePost(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1QuotesIdGet

> QuoteQuote v1QuotesIdGet(id)

get Quote by given ID or 404 error.

Get Quote by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1QuotesIdPost

> QuoteQuote v1QuotesIdPost(id)

update Quote

Update Quote.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
let id = "id_example"; // String | Quote ID
apiInstance.v1QuotesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Quote ID | 

### Return type

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1QuotesPost

> QuoteQuote v1QuotesPost()

create a new Quote

Create a new Quote.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.QuoteApi();
apiInstance.v1QuotesPost((error, data, response) => {
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

[**QuoteQuote**](QuoteQuote.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

