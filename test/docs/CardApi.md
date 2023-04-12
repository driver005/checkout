# FiberSwaggerExampleApi.CardApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CustomersIdSourcesGet**](CardApi.md#v1CustomersIdSourcesGet) | **GET** /v1/customers/{id}/sources | get all existing Cards
[**v1CustomersIdSourcesIdGet**](CardApi.md#v1CustomersIdSourcesIdGet) | **GET** /v1/customers/{id}/sources/{id} | get Card by given ID or 404 error.
[**v1CustomersIdSourcesIdPost**](CardApi.md#v1CustomersIdSourcesIdPost) | **POST** /v1/customers/{id}/sources/{id} | update Card



## v1CustomersIdSourcesGet

> [GithubComDriver005GatewayPaymentCardCard] v1CustomersIdSourcesGet()

get all existing Cards

Get all existing Cards.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CardApi();
apiInstance.v1CustomersIdSourcesGet((error, data, response) => {
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

[**[GithubComDriver005GatewayPaymentCardCard]**](GithubComDriver005GatewayPaymentCardCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdSourcesIdGet

> GithubComDriver005GatewayPaymentCardCard v1CustomersIdSourcesIdGet(id)

get Card by given ID or 404 error.

Get Card by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CardApi();
let id = "id_example"; // String | Card ID
apiInstance.v1CustomersIdSourcesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Card ID | 

### Return type

[**GithubComDriver005GatewayPaymentCardCard**](GithubComDriver005GatewayPaymentCardCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CustomersIdSourcesIdPost

> GithubComDriver005GatewayPaymentCardCard v1CustomersIdSourcesIdPost(id)

update Card

Update Card.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CardApi();
let id = "id_example"; // String | Card ID
apiInstance.v1CustomersIdSourcesIdPost(id, (error, data, response) => {
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
 **id** | **String**| Card ID | 

### Return type

[**GithubComDriver005GatewayPaymentCardCard**](GithubComDriver005GatewayPaymentCardCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

