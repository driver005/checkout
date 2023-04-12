/**
 * Fiber Swagger Example API
 * This is a sample server server.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FiberSwaggerExampleApi);
  }
}(this, function(expect, FiberSwaggerExampleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FiberSwaggerExampleApi.SubscriptionItemApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionItemApi', function() {
    describe('v1SubscriptionItemsGet', function() {
      it('should call v1SubscriptionItemsGet successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionItemsGet
        //instance.v1SubscriptionItemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionItemsIdDelete', function() {
      it('should call v1SubscriptionItemsIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionItemsIdDelete
        //instance.v1SubscriptionItemsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionItemsIdGet', function() {
      it('should call v1SubscriptionItemsIdGet successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionItemsIdGet
        //instance.v1SubscriptionItemsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionItemsIdPost', function() {
      it('should call v1SubscriptionItemsIdPost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionItemsIdPost
        //instance.v1SubscriptionItemsIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionItemsPost', function() {
      it('should call v1SubscriptionItemsPost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionItemsPost
        //instance.v1SubscriptionItemsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));