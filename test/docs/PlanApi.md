# FiberSwaggerExampleApi.PlanApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PlansGet**](PlanApi.md#v1PlansGet) | **GET** /v1/plans | get all existing Plans
[**v1PlansIdDelete**](PlanApi.md#v1PlansIdDelete) | **DELETE** /v1/plans/{id} | delete Plan by given ID
[**v1PlansIdGet**](PlanApi.md#v1PlansIdGet) | **GET** /v1/plans/{id} | get Plan by given ID or 404 error.
[**v1PlansIdPost**](PlanApi.md#v1PlansIdPost) | **POST** /v1/plans/{id} | update Plan
[**v1PlansPost**](PlanApi.md#v1PlansPost) | **POST** /v1/plans | create a new Plan



## v1PlansGet

> [PlanPlan] v1PlansGet()

get all existing Plans

Get all existing Plans.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PlanApi();
apiInstance.v1PlansGet((error, data, response) => {
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

[**[PlanPlan]**](PlanPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PlansIdDelete

> String v1PlansIdDelete(id)

delete Plan by given ID

Delete Plan by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PlanApi();
let id = "id_example"; // String | Plan ID
apiInstance.v1PlansIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Plan ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PlansIdGet

> PlanPlan v1PlansIdGet(id)

get Plan by given ID or 404 error.

Get Plan by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PlanApi();
let id = "id_example"; // String | Plan ID
apiInstance.v1PlansIdGet(id, (error, data, response) => {
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
 **id** | **String**| Plan ID | 

### Return type

[**PlanPlan**](PlanPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PlansIdPost

> PlanPlan v1PlansIdPost(id)

update Plan

Update Plan.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PlanApi();
let id = "id_example"; // String | Plan ID
apiInstance.v1PlansIdPost(id, (error, data, response) => {
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
 **id** | **String**| Plan ID | 

### Return type

[**PlanPlan**](PlanPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PlansPost

> PlanPlan v1PlansPost()

create a new Plan

Create a new Plan.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.PlanApi();
apiInstance.v1PlansPost((error, data, response) => {
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

[**PlanPlan**](PlanPlan.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

