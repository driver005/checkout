# FiberSwaggerExampleApi.SubscriptionScheduleApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SubscriptionSchedulesGet**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesGet) | **GET** /v1/subscription_schedules | get all existing SubscriptionSchedules
[**v1SubscriptionSchedulesIdCancelePost**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesIdCancelePost) | **POST** /v1/subscription_schedules/{id}/cancele | cancel SubscriptionSchedule
[**v1SubscriptionSchedulesIdDelete**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesIdDelete) | **DELETE** /v1/subscription_schedules/{id} | delete SubscriptionSchedule by given ID
[**v1SubscriptionSchedulesIdGet**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesIdGet) | **GET** /v1/subscription_schedules/{id} | get SubscriptionSchedule by given ID or 404 error.
[**v1SubscriptionSchedulesIdPost**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesIdPost) | **POST** /v1/subscription_schedules/{id} | update SubscriptionSchedule
[**v1SubscriptionSchedulesIdReleasePost**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesIdReleasePost) | **POST** /v1/subscription_schedules/{id}/release | release SubscriptionSchedule
[**v1SubscriptionSchedulesPost**](SubscriptionScheduleApi.md#v1SubscriptionSchedulesPost) | **POST** /v1/subscription_schedules | create a new SubscriptionSchedule



## v1SubscriptionSchedulesGet

> [SubscriptionScheduleSubscriptionSchedule] v1SubscriptionSchedulesGet()

get all existing SubscriptionSchedules

Get all existing SubscriptionSchedules.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
apiInstance.v1SubscriptionSchedulesGet((error, data, response) => {
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

[**[SubscriptionScheduleSubscriptionSchedule]**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionSchedulesIdCancelePost

> SubscriptionScheduleSubscriptionSchedule v1SubscriptionSchedulesIdCancelePost(id)

cancel SubscriptionSchedule

Cancel SubscriptionSchedule.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
let id = "id_example"; // String | SubscriptionSchedule ID
apiInstance.v1SubscriptionSchedulesIdCancelePost(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionSchedule ID | 

### Return type

[**SubscriptionScheduleSubscriptionSchedule**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionSchedulesIdDelete

> String v1SubscriptionSchedulesIdDelete(id)

delete SubscriptionSchedule by given ID

Delete SubscriptionSchedule by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
let id = "id_example"; // String | SubscriptionSchedule ID
apiInstance.v1SubscriptionSchedulesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionSchedule ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionSchedulesIdGet

> SubscriptionScheduleSubscriptionSchedule v1SubscriptionSchedulesIdGet(id)

get SubscriptionSchedule by given ID or 404 error.

Get SubscriptionSchedule by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
let id = "id_example"; // String | SubscriptionSchedule ID
apiInstance.v1SubscriptionSchedulesIdGet(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionSchedule ID | 

### Return type

[**SubscriptionScheduleSubscriptionSchedule**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SubscriptionSchedulesIdPost

> SubscriptionScheduleSubscriptionSchedule v1SubscriptionSchedulesIdPost(id)

update SubscriptionSchedule

Update SubscriptionSchedule.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
let id = "id_example"; // String | SubscriptionSchedule ID
apiInstance.v1SubscriptionSchedulesIdPost(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionSchedule ID | 

### Return type

[**SubscriptionScheduleSubscriptionSchedule**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionSchedulesIdReleasePost

> SubscriptionScheduleSubscriptionSchedule v1SubscriptionSchedulesIdReleasePost(id)

release SubscriptionSchedule

Release SubscriptionSchedule.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
let id = "id_example"; // String | SubscriptionSchedule ID
apiInstance.v1SubscriptionSchedulesIdReleasePost(id, (error, data, response) => {
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
 **id** | **String**| SubscriptionSchedule ID | 

### Return type

[**SubscriptionScheduleSubscriptionSchedule**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SubscriptionSchedulesPost

> SubscriptionScheduleSubscriptionSchedule v1SubscriptionSchedulesPost()

create a new SubscriptionSchedule

Create a new SubscriptionSchedule.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
apiInstance.v1SubscriptionSchedulesPost((error, data, response) => {
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

[**SubscriptionScheduleSubscriptionSchedule**](SubscriptionScheduleSubscriptionSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

