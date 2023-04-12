# FiberSwaggerExampleApi.UsageRecordApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubscriptionItemsIdUsageRecordSummariesGet**](UsageRecordApi.md#v1SubscriptionItemsIdUsageRecordSummariesGet) | **GET** /v1/subscription_items/{id}/usage_record_summaries | get all existing UsageRecords
[**v1SubscriptionItemsIdUsageRecordsGet**](UsageRecordApi.md#v1SubscriptionItemsIdUsageRecordsGet) | **GET** /v1/subscription_items/{id}/usage_records | get UsageRecord by given ID or 404 error.
[**v1UsageRecordIdDelete**](UsageRecordApi.md#v1UsageRecordIdDelete) | **DELETE** /v1/usage_record/{id} | delete UsageRecord by given ID
[**v1UsageRecordIdPost**](UsageRecordApi.md#v1UsageRecordIdPost) | **POST** /v1/usage_record/{id} | update UsageRecord
[**v1UsageRecordPost**](UsageRecordApi.md#v1UsageRecordPost) | **POST** /v1/usage_record | create a new UsageRecord



## v1SubscriptionItemsIdUsageRecordSummariesGet

> [UsageRecordUsageRecord] v1SubscriptionItemsIdUsageRecordSummariesGet()

get all existing UsageRecords

Get all existing UsageRecords.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.UsageRecordApi();
apiInstance.v1SubscriptionItemsIdUsageRecordSummariesGet((error, data, response) => {
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

[**[UsageRecordUsageRecord]**](UsageRecordUsageRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionItemsIdUsageRecordsGet

> UsageRecordUsageRecord v1SubscriptionItemsIdUsageRecordsGet(id)

get UsageRecord by given ID or 404 error.

Get UsageRecord by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.UsageRecordApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1SubscriptionItemsIdUsageRecordsGet(id, (error, data, response) => {
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

[**UsageRecordUsageRecord**](UsageRecordUsageRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UsageRecordIdDelete

> String v1UsageRecordIdDelete(id)

delete UsageRecord by given ID

Delete UsageRecord by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.UsageRecordApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1UsageRecordIdDelete(id, (error, data, response) => {
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

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UsageRecordIdPost

> UsageRecordUsageRecord v1UsageRecordIdPost(id)

update UsageRecord

Update UsageRecord.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.UsageRecordApi();
let id = "id_example"; // String | SubscriptionItem ID
apiInstance.v1UsageRecordIdPost(id, (error, data, response) => {
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

[**UsageRecordUsageRecord**](UsageRecordUsageRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1UsageRecordPost

> UsageRecordUsageRecord v1UsageRecordPost()

create a new UsageRecord

Create a new UsageRecord.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.UsageRecordApi();
apiInstance.v1UsageRecordPost((error, data, response) => {
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

[**UsageRecordUsageRecord**](UsageRecordUsageRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

