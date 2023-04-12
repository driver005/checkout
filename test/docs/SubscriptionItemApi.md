# FiberSwaggerExampleApi.SubscriptionItemApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubscriptionItemsGet**](SubscriptionItemApi.md#v1SubscriptionItemsGet) | **GET** /v1/subscription_items | get all existing SubscriptionItems
[**v1SubscriptionItemsIdDelete**](SubscriptionItemApi.md#v1SubscriptionItemsIdDelete) | **DELETE** /v1/subscription_items/{id} | delete SubscriptionItem by given ID
[**v1SubscriptionItemsIdGet**](SubscriptionItemApi.md#v1SubscriptionItemsIdGet) | **GET** /v1/subscription_items/{id} | get SubscriptionItem by given ID or 404 error.
[**v1SubscriptionItemsIdPost**](SubscriptionItemApi.md#v1SubscriptionItemsIdPost) | **POST** /v1/subscription_items/{id} | update SubscriptionItem
[**v1SubscriptionItemsPost**](SubscriptionItemApi.md#v1SubscriptionItemsPost) | **POST** /v1/subscription_items | create a new SubscriptionItem



## v1SubscriptionItemsGet

> [SubscriptionItemSubscriptionItem] v1SubscriptionItemsGet()

get all existing SubscriptionItems

Get all existing SubscriptionItems.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionItemApi();
apiInstance.v1SubscriptionItemsGet((error, data, response) => {
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

[**[SubscriptionItemSubscriptionItem]**](SubscriptionItemSubscriptionItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionItemsIdDelete

> String v1SubscriptionItemsIdDelete(id)

delete SubscriptionItem by given ID

Delete SubscriptionItem by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionItemApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1SubscriptionItemsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionItem ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionItemsIdGet

> SubscriptionItemSubscriptionItem v1SubscriptionItemsIdGet(id)

get SubscriptionItem by given ID or 404 error.

Get SubscriptionItem by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionItemApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1SubscriptionItemsIdGet(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionItem ID | 

### Return type

[**SubscriptionItemSubscriptionItem**](SubscriptionItemSubscriptionItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionItemsIdPost

> SubscriptionItemSubscriptionItem v1SubscriptionItemsIdPost(id)

update SubscriptionItem

Update SubscriptionItem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionItemApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1SubscriptionItemsIdPost(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionItem ID | 

### Return type

[**SubscriptionItemSubscriptionItem**](SubscriptionItemSubscriptionItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionItemsPost

> SubscriptionItemSubscriptionItem v1SubscriptionItemsPost()

create a new SubscriptionItem

Create a new SubscriptionItem.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionItemApi();
apiInstance.v1SubscriptionItemsPost((error, data, response) => {
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

[**SubscriptionItemSubscriptionItem**](SubscriptionItemSubscriptionItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

