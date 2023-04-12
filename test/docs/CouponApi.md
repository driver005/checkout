# FiberSwaggerExampleApi.CouponApi

All URIs are relative to *http://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CouponsGet**](CouponApi.md#v1CouponsGet) | **GET** /v1/coupons | get all existing Coupons
[**v1CouponsIdDelete**](CouponApi.md#v1CouponsIdDelete) | **DELETE** /v1/coupons/{id} | delete Coupon by given ID
[**v1CouponsIdGet**](CouponApi.md#v1CouponsIdGet) | **GET** /v1/coupons/{id} | get Coupon by given ID or 404 error.
[**v1CouponsIdPost**](CouponApi.md#v1CouponsIdPost) | **POST** /v1/coupons/{id} | update Coupon
[**v1CouponsPost**](CouponApi.md#v1CouponsPost) | **POST** /v1/coupons | create a new Coupon



## v1CouponsGet

> [CouponCoupon] v1CouponsGet()

get all existing Coupons

Get all existing Coupons.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CouponApi();
apiInstance.v1CouponsGet((error, data, response) => {
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

[**[CouponCoupon]**](CouponCoupon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CouponsIdDelete

> String v1CouponsIdDelete(id)

delete Coupon by given ID

Delete Coupon by given ID.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CouponApi();
let id = "id_example"; // String | Coupon ID
apiInstance.v1CouponsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Coupon ID | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CouponsIdGet

> CouponCoupon v1CouponsIdGet(id)

get Coupon by given ID or 404 error.

Get Coupon by given ID or 404 error.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CouponApi();
let id = "id_example"; // String | Coupon ID
apiInstance.v1CouponsIdGet(id, (error, data, response) => {
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
 **id** | **String**| Coupon ID | 

### Return type

[**CouponCoupon**](CouponCoupon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CouponsIdPost

> CouponCoupon v1CouponsIdPost(id)

update Coupon

Update Coupon.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CouponApi();
let id = "id_example"; // String | Coupon ID
apiInstance.v1CouponsIdPost(id, (error, data, response) => {
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
 **id** | **String**| Coupon ID | 

### Return type

[**CouponCoupon**](CouponCoupon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CouponsPost

> CouponCoupon v1CouponsPost()

create a new Coupon

Create a new Coupon.

### Example

```javascript
import FiberSwaggerExampleApi from 'fiber_swagger_example_api';

let apiInstance = new FiberSwaggerExampleApi.CouponApi();
apiInstance.v1CouponsPost((error, data, response) => {
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

[**CouponCoupon**](CouponCoupon.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

