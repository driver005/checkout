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
    instance = new FiberSwaggerExampleApi.DisputeApi();
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

  describe('DisputeApi', function() {
    describe('v1DisputesGet', function() {
      it('should call v1DisputesGet successfully', function(done) {
        //uncomment below and update the code to test v1DisputesGet
        //instance.v1DisputesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DisputesIdClosePost', function() {
      it('should call v1DisputesIdClosePost successfully', function(done) {
        //uncomment below and update the code to test v1DisputesIdClosePost
        //instance.v1DisputesIdClosePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DisputesIdDelete', function() {
      it('should call v1DisputesIdDelete successfully', function(done) {
        //uncomment below and update the code to test v1DisputesIdDelete
        //instance.v1DisputesIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DisputesIdGet', function() {
      it('should call v1DisputesIdGet successfully', function(done) {
        //uncomment below and update the code to test v1DisputesIdGet
        //instance.v1DisputesIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DisputesIdPost', function() {
      it('should call v1DisputesIdPost successfully', function(done) {
        //uncomment below and update the code to test v1DisputesIdPost
        //instance.v1DisputesIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1DisputesPost', function() {
      it('should call v1DisputesPost successfully', function(done) {
        //uncomment below and update the code to test v1DisputesPost
        //instance.v1DisputesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));