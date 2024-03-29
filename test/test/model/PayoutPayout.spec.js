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
    instance = new FiberSwaggerExampleApi.PayoutPayout();
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

  describe('PayoutPayout', function() {
    it('should create an instance of PayoutPayout', function() {
      // uncomment below and update the code to test PayoutPayout
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be.a(FiberSwaggerExampleApi.PayoutPayout);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property arrivalDate (base name: "arrival_date")', function() {
      // uncomment below and update the code to test the property arrivalDate
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property automatic (base name: "automatic")', function() {
      // uncomment below and update the code to test the property automatic
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property balanceTransaction (base name: "balance_transaction")', function() {
      // uncomment below and update the code to test the property balanceTransaction
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property failureBalanceTransaction (base name: "failure_balance_transaction")', function() {
      // uncomment below and update the code to test the property failureBalanceTransaction
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property failureCode (base name: "failure_code")', function() {
      // uncomment below and update the code to test the property failureCode
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property failureMessage (base name: "failure_message")', function() {
      // uncomment below and update the code to test the property failureMessage
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property method (base name: "method")', function() {
      // uncomment below and update the code to test the property method
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property originalPayout (base name: "original_payout")', function() {
      // uncomment below and update the code to test the property originalPayout
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property reversedBy (base name: "reversed_by")', function() {
      // uncomment below and update the code to test the property reversedBy
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property sourceType (base name: "source_type")', function() {
      // uncomment below and update the code to test the property sourceType
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptor (base name: "statement_descriptor")', function() {
      // uncomment below and update the code to test the property statementDescriptor
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FiberSwaggerExampleApi.PayoutPayout();
      //expect(instance).to.be();
    });

  });

}));
