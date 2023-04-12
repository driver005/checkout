# FiberSwaggerExampleApi.PromotionCodeApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PromotionCodesGet**](PromotionCodeApi.md#v1PromotionCodesGet) | **GET** /v1/promotion_codes | get all existing PromotionCodes
[**v1PromotionCodesIdDelete**](PromotionCodeApi.md#v1PromotionCodesIdDelete) | **DELETE** /v1/promotion_codes/{id} | delete PromotionCode by given ID
[**v1PromotionCodesIdGet**](PromotionCodeApi.md#v1PromotionCodesIdGet) | **GET** /v1/promotion_codes/{id} | get PromotionCode by given ID or 404 error.
[**v1PromotionCodesIdPost**](PromotionCodeApi.md#v1PromotionCodesIdPost) | **POST** /v1/promotion_codes/{id} | update PromotionCode
[**v1PromotionCodesPost**](PromotionCodeApi.md#v1PromotionCodesPost) | **POST** /v1/promotion_codes | create a new PromotionCode



## v1PromotionCodesGet

> [PromotionPromotionCode] v1PromotionCodesGet()

get all existing PromotionCodes

Get all existing PromotionCodes.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PromotionCodeApi();
apiInstance.v1PromotionCodesGet((error, data, response) => {
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

[**[PromotionPromotionCode]**](PromotionPromotionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PromotionCodesIdDelete

> String v1PromotionCodesIdDelete(id)

delete PromotionCode by given ID

Delete PromotionCode by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PromotionCodeApi();
let id = "id_example"; // String | PromotionCode ID
apiInstance.v1PromotionCodesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| PromotionCode ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PromotionCodesIdGet

> PromotionPromotionCode v1PromotionCodesIdGet(id)

get PromotionCode by given ID or 404 error.

Get PromotionCode by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PromotionCodeApi();
let id = "id_example"; // String | PromotionCode ID
apiInstance.v1PromotionCodesIdGet(id, (error, data, response) => {
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
 **id** | **String**| PromotionCode ID | 

### Return type

[**PromotionPromotionCode**](PromotionPromotionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PromotionCodesIdPost

> PromotionPromotionCode v1PromotionCodesIdPost(id)

update PromotionCode

Update PromotionCode.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PromotionCodeApi();
let id = "id_example"; // String | PromotionCode ID
apiInstance.v1PromotionCodesIdPost(id, (error, data, response) => {
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
 **id** | **String**| PromotionCode ID | 

### Return type

[**PromotionPromotionCode**](PromotionPromotionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PromotionCodesPost

> PromotionPromotionCode v1PromotionCodesPost()

create a new PromotionCode

Create a new PromotionCode.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PromotionCodeApi();
apiInstance.v1PromotionCodesPost((error, data, response) => {
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

[**PromotionPromotionCode**](PromotionPromotionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

