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
    instance = new FiberSwaggerExampleApi.CustomerApi();
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

  describe('CustomerApi', function() {
    describe('v1CustomersGet', function() {
      it('should call v1CustomersGet successfully', function(done) {
        //uncomment below and update the code to test v1CustomersGet
        //instance.v1CustomersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdDelete', function() {
      it('should call v1CustomersIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdDelete
        //instance.v1CustomersIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdGet', function() {
      it('should call v1CustomersIdGet successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdGet
        //instance.v1CustomersIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdPost', function() {
      it('should call v1CustomersIdPost successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdPost
        //instance.v1CustomersIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdTaxIdsGet', function() {
      it('should call v1CustomersIdTaxIdsGet successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdTaxIdsGet
        //instance.v1CustomersIdTaxIdsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdTaxIdsPost', function() {
      it('should call v1CustomersIdTaxIdsPost successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdTaxIdsPost
        //instance.v1CustomersIdTaxIdsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdTaxIdsTaxIdDelete', function() {
      it('should call v1CustomersIdTaxIdsTaxIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdTaxIdsTaxIdDelete
        //instance.v1CustomersIdTaxIdsTaxIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersIdTaxIdsTaxIdGet', function() {
      it('should call v1CustomersIdTaxIdsTaxIdGet successfully', function(done) {
        //uncomment below and update the code to test v1CustomersIdTaxIdsTaxIdGet
        //instance.v1CustomersIdTaxIdsTaxIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1CustomersPost', function() {
      it('should call v1CustomersPost successfully', function(done) {
        //uncomment below and update the code to test v1CustomersPost
        //instance.v1CustomersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
