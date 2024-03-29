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
    instance = new FiberSwaggerExampleApi.SubscriptionScheduleApi();
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

  describe('SubscriptionScheduleApi', function() {
    describe('v1SubscriptionSchedulesGet', function() {
      it('should call v1SubscriptionSchedulesGet successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesGet
        //instance.v1SubscriptionSchedulesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesIdCancelePost', function() {
      it('should call v1SubscriptionSchedulesIdCancelePost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesIdCancelePost
        //instance.v1SubscriptionSchedulesIdCancelePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesIdDelete', function() {
      it('should call v1SubscriptionSchedulesIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesIdDelete
        //instance.v1SubscriptionSchedulesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesIdGet', function() {
      it('should call v1SubscriptionSchedulesIdGet successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesIdGet
        //instance.v1SubscriptionSchedulesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesIdPost', function() {
      it('should call v1SubscriptionSchedulesIdPost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesIdPost
        //instance.v1SubscriptionSchedulesIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesIdReleasePost', function() {
      it('should call v1SubscriptionSchedulesIdReleasePost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesIdReleasePost
        //instance.v1SubscriptionSchedulesIdReleasePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SubscriptionSchedulesPost', function() {
      it('should call v1SubscriptionSchedulesPost successfully', function(done) {
        //uncomment below and update the code to test v1SubscriptionSchedulesPost
        //instance.v1SubscriptionSchedulesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
