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
    instance = new FiberSwaggerExampleApi.DiscountDiscount();
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

  describe('DiscountDiscount', function() {
    it('should create an instance of DiscountDiscount', function() {
      // uncomment below and update the code to test DiscountDiscount
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be.a(FiberSwaggerExampleApi.DiscountDiscount);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property checkoutSession (base name: "checkout_session")', function() {
      // uncomment below and update the code to test the property checkoutSession
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property coupon (base name: "coupon")', function() {
      // uncomment below and update the code to test the property coupon
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property invoice (base name: "invoice")', function() {
      // uncomment below and update the code to test the property invoice
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property invoiceItem (base name: "invoice_item")', function() {
      // uncomment below and update the code to test the property invoiceItem
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property promotionCode (base name: "promotion_code")', function() {
      // uncomment below and update the code to test the property promotionCode
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FiberSwaggerExampleApi.DiscountDiscount();
      //expect(instance).to.be();
    });

  });

}));
