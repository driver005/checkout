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
    instance = new FiberSwaggerExampleApi.PaymentLinkApi();
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

  describe('PaymentLinkApi', function() {
    describe('v1PaymentLinksGet', function() {
      it('should call v1PaymentLinksGet successfully', function(done) {
        //uncomment below and update the code to test v1PaymentLinksGet
        //instance.v1PaymentLinksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentLinksIdDelete', function() {
      it('should call v1PaymentLinksIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1PaymentLinksIdDelete
        //instance.v1PaymentLinksIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentLinksIdGet', function() {
      it('should call v1PaymentLinksIdGet successfully', function(done) {
        //uncomment below and update the code to test v1PaymentLinksIdGet
        //instance.v1PaymentLinksIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentLinksIdPost', function() {
      it('should call v1PaymentLinksIdPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentLinksIdPost
        //instance.v1PaymentLinksIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1PaymentLinksPost', function() {
      it('should call v1PaymentLinksPost successfully', function(done) {
        //uncomment below and update the code to test v1PaymentLinksPost
        //instance.v1PaymentLinksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
