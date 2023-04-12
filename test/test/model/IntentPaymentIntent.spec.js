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
    instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
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

  describe('IntentPaymentIntent', function() {
    it('should create an instance of IntentPaymentIntent', function() {
      // uncomment below and update the code to test IntentPaymentIntent
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be.a(FiberSwaggerExampleApi.IntentPaymentIntent);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property amountCapturable (base name: "amount_capturable")', function() {
      // uncomment below and update the code to test the property amountCapturable
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property amountDetails (base name: "amount_details")', function() {
      // uncomment below and update the code to test the property amountDetails
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property amountReceived (base name: "amount_received")', function() {
      // uncomment below and update the code to test the property amountReceived
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property automaticPaymentMethods (base name: "automatic_payment_methods")', function() {
      // uncomment below and update the code to test the property automaticPaymentMethods
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property canceledAt (base name: "canceled_at")', function() {
      // uncomment below and update the code to test the property canceledAt
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property cancellationReason (base name: "cancellation_reason")', function() {
      // uncomment below and update the code to test the property cancellationReason
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property captureMethod (base name: "capture_method")', function() {
      // uncomment below and update the code to test the property captureMethod
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property confirmationMethod (base name: "confirmation_method")', function() {
      // uncomment below and update the code to test the property confirmationMethod
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property lastPaymentError (base name: "last_payment_error")', function() {
      // uncomment below and update the code to test the property lastPaymentError
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property latestCharge (base name: "latest_charge")', function() {
      // uncomment below and update the code to test the property latestCharge
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property nextAction (base name: "next_action")', function() {
      // uncomment below and update the code to test the property nextAction
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "payment_method")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodOptions (base name: "payment_method_options")', function() {
      // uncomment below and update the code to test the property paymentMethodOptions
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethodTypes (base name: "payment_method_types")', function() {
      // uncomment below and update the code to test the property paymentMethodTypes
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property processing (base name: "processing")', function() {
      // uncomment below and update the code to test the property processing
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property receiptEmail (base name: "receipt_email")', function() {
      // uncomment below and update the code to test the property receiptEmail
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property review (base name: "review")', function() {
      // uncomment below and update the code to test the property review
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property setupFutureUsage (base name: "setup_future_usage")', function() {
      // uncomment below and update the code to test the property setupFutureUsage
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptor (base name: "statement_descriptor")', function() {
      // uncomment below and update the code to test the property statementDescriptor
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property statementDescriptorSuffix (base name: "statement_descriptor_suffix")', function() {
      // uncomment below and update the code to test the property statementDescriptorSuffix
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FiberSwaggerExampleApi.IntentPaymentIntent();
      //expect(instance).to.be();
    });

  });

}));
