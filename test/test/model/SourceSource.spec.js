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
    instance = new FiberSwaggerExampleApi.SourceSource();
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

  describe('SourceSource', function() {
    it('should create an instance of SourceSource', function() {
      // uncomment below and update the code to test SourceSource
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be.a(FiberSwaggerExampleApi.SourceSource);
    });

    it('should have the property achCreditTransfer (base name: "ach_credit_transfer")', function() {
      // uncomment below and update the code to test the property achCreditTransfer
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property achDebit (base name: "ach_debit")', function() {
      // uncomment below and update the code to test the property achDebit
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property acssDebit (base name: "acss_debit")', function() {
      // uncomment below and update the code to test the property acssDebit
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property alipay (base name: "alipay")', function() {
      // uncomment below and update the code to test the property alipay
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property auBecsDebit (base name: "au_becs_debit")', function() {
      // uncomment below and update the code to test the property auBecsDebit
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property bancontact (base name: "bancontact")', function() {
      // uncomment below and update the code to test the property bancontact
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property card (base name: "card")', function() {
      // uncomment below and update the code to test the property card
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property cardPresent (base name: "card_present")', function() {
      // uncomment below and update the code to test the property cardPresent
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property codeVerification (base name: "code_verification")', function() {
      // uncomment below and update the code to test the property codeVerification
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property eps (base name: "eps")', function() {
      // uncomment below and update the code to test the property eps
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property flow (base name: "flow")', function() {
      // uncomment below and update the code to test the property flow
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property giropay (base name: "giropay")', function() {
      // uncomment below and update the code to test the property giropay
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property ideal (base name: "ideal")', function() {
      // uncomment below and update the code to test the property ideal
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property klarna (base name: "klarna")', function() {
      // uncomment below and update the code to test the property klarna
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property multibanco (base name: "multibanco")', function() {
      // uncomment below and update the code to test the property multibanco
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property p24 (base name: "p24")', function() {
      // uncomment below and update the code to test the property p24
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property receiver (base name: "receiver")', function() {
      // uncomment below and update the code to test the property receiver
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property redirect (base name: "redirect")', function() {
      // uncomment below and update the code to test the property redirect
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property sepaDebit (base name: "sepa_debit")', function() {
      // uncomment below and update the code to test the property sepaDebit
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property sofort (base name: "sofort")', function() {
      // uncomment below and update the code to test the property sofort
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property sourceOrder (base name: "source_order")', function() {
      // uncomment below and update the code to test the property sourceOrder
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptor (base name: "statement_descriptor")', function() {
      // uncomment below and update the code to test the property statementDescriptor
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property threeDSecure (base name: "three_d_secure")', function() {
      // uncomment below and update the code to test the property threeDSecure
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property usage (base name: "usage")', function() {
      // uncomment below and update the code to test the property usage
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

    it('should have the property wechat (base name: "wechat")', function() {
      // uncomment below and update the code to test the property wechat
      //var instance = new FiberSwaggerExampleApi.SourceSource();
      //expect(instance).to.be();
    });

  });

}));
