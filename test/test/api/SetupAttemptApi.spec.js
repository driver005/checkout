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
    instance = new FiberSwaggerExampleApi.SetupAttemptApi();
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

  describe('SetupAttemptApi', function() {
    describe('v1SetupAttemptsGet', function() {
      it('should call v1SetupAttemptsGet successfully', function(done) {
        //uncomment below and update the code to test v1SetupAttemptsGet
        //instance.v1SetupAttemptsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SetupAttemptsIdDelete', function() {
      it('should call v1SetupAttemptsIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1SetupAttemptsIdDelete
        //instance.v1SetupAttemptsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SetupAttemptsIdGet', function() {
      it('should call v1SetupAttemptsIdGet successfully', function(done) {
        //uncomment below and update the code to test v1SetupAttemptsIdGet
        //instance.v1SetupAttemptsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SetupAttemptsIdPost', function() {
      it('should call v1SetupAttemptsIdPost successfully', function(done) {
        //uncomment below and update the code to test v1SetupAttemptsIdPost
        //instance.v1SetupAttemptsIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1SetupAttemptsPost', function() {
      it('should call v1SetupAttemptsPost successfully', function(done) {
        //uncomment below and update the code to test v1SetupAttemptsPost
        //instance.v1SetupAttemptsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
