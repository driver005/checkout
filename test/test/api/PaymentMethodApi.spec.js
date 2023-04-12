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
    instance = new FiberSwaggerExampleApi.PaymentMethodApi();
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

  describe('PaymentMethodApi', function() {
    describe('v1PaymentMethodsGet', function() {
      it('should call v1PaymentMethodsGet successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsGet
        //instance.v1PaymentMethodsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsIdAttachPost', function() {
      it('should call v1PaymentMethodsIdAttachPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsIdAttachPost
        //instance.v1PaymentMethodsIdAttachPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsIdDelete', function() {
      it('should call v1PaymentMethodsIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsIdDelete
        //instance.v1PaymentMethodsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsIdDettachPost', function() {
      it('should call v1PaymentMethodsIdDettachPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsIdDettachPost
        //instance.v1PaymentMethodsIdDettachPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsIdGet', function() {
      it('should call v1PaymentMethodsIdGet successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsIdGet
        //instance.v1PaymentMethodsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsIdPost', function() {
      it('should call v1PaymentMethodsIdPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsIdPost
        //instance.v1PaymentMethodsIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentMethodsPost', function() {
      it('should call v1PaymentMethodsPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentMethodsPost
        //instance.v1PaymentMethodsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
