# FiberSwaggerExampleApi.LineItemApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CreditNotesGet**](LineItemApi.md#v1CreditNotesGet) | **GET** /v1/credit_notes | get all existing LineItems
[**v1CreditNotesIdDelete**](LineItemApi.md#v1CreditNotesIdDelete) | **DELETE** /v1/credit_notes/{id} | delete LineItem by given ID
[**v1CreditNotesIdGet**](LineItemApi.md#v1CreditNotesIdGet) | **GET** /v1/credit_notes/{id} | get LineItem by given ID or 404 error.
[**v1CreditNotesIdPost**](LineItemApi.md#v1CreditNotesIdPost) | **POST** /v1/credit_notes/{id} | update LineItem
[**v1CreditNotesPost**](LineItemApi.md#v1CreditNotesPost) | **POST** /v1/credit_notes | create a new LineItem



## v1CreditNotesGet

> [ItemLineItem] v1CreditNotesGet()

get all existing LineItems

Get all existing LineItems.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.LineItemApi();
apiInstance.v1CreditNotesGet((error, data, response) => {
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

[**[ItemLineItem]**](ItemLineItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CreditNotesIdDelete

> String v1CreditNotesIdDelete(id)

delete LineItem by given ID

Delete LineItem by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.LineItemApi();
let id = "id_example"; // String | LineItem ID
apiInstance.v1CreditNotesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| LineItem ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreditNotesIdGet

> ItemLineItem v1CreditNotesIdGet(id)

get LineItem by given ID or 404 error.

Get LineItem by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.LineItemApi();
let id = "id_example"; // String | LineItem ID
apiInstance.v1CreditNotesIdGet(id, (error, data, response) => {
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
 **id** | **String**| LineItem ID | 

### Return type

[**ItemLineItem**](ItemLineItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CreditNotesIdPost

> ItemLineItem v1CreditNotesIdPost(id)

update LineItem

Update LineItem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.LineItemApi();
let id = "id_example"; // String | LineItem ID
apiInstance.v1CreditNotesIdPost(id, (error, data, response) => {
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
 **id** | **String**| LineItem ID | 

### Return type

[**ItemLineItem**](ItemLineItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CreditNotesPost

> ItemLineItem v1CreditNotesPost()

create a new LineItem

Create a new LineItem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.LineItemApi();
apiInstance.v1CreditNotesPost((error, data, response) => {
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

[**ItemLineItem**](ItemLineItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

