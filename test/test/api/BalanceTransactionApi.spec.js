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
    instance = new FiberSwaggerExampleApi.BalanceTransactionApi();
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

  describe('BalanceTransactionApi', function() {
    describe('v1BalanceTransactionsGet', function() {
      it('should call v1BalanceTransactionsGet successfully', function(done) {
        //uncomment below and update the code to test v1BalanceTransactionsGet
        //instance.v1BalanceTransactionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1BalanceTransactionsIdGet', function() {
      it('should call v1BalanceTransactionsIdGet successfully', function(done) {
        //uncomment below and update the code to test v1BalanceTransactionsIdGet
        //instance.v1BalanceTransactionsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
