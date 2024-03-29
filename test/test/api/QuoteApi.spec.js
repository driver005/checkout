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
    instance = new FiberSwaggerExampleApi.QuoteApi();
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

  describe('QuoteApi', function() {
    describe('v1QuotesGet', function() {
      it('should call v1QuotesGet successfully', function(done) {
        //uncomment below and update the code to test v1QuotesGet
        //instance.v1QuotesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdAcceptPost', function() {
      it('should call v1QuotesIdAcceptPost successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdAcceptPost
        //instance.v1QuotesIdAcceptPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdCancelPost', function() {
      it('should call v1QuotesIdCancelPost successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdCancelPost
        //instance.v1QuotesIdCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdDelete', function() {
      it('should call v1QuotesIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdDelete
        //instance.v1QuotesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdFinalizePost', function() {
      it('should call v1QuotesIdFinalizePost successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdFinalizePost
        //instance.v1QuotesIdFinalizePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdGet', function() {
      it('should call v1QuotesIdGet successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdGet
        //instance.v1QuotesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesIdPost', function() {
      it('should call v1QuotesIdPost successfully', function(done) {
        //uncomment below and update the code to test v1QuotesIdPost
        //instance.v1QuotesIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1QuotesPost', function() {
      it('should call v1QuotesPost successfully', function(done) {
        //uncomment below and update the code to test v1QuotesPost
        //instance.v1QuotesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
