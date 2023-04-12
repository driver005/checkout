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
    instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
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

  describe('SubscriptionScheduleSubscriptionSchedule', function() {
    it('should create an instance of SubscriptionScheduleSubscriptionSchedule', function() {
      // uncomment below and update the code to test SubscriptionScheduleSubscriptionSchedule
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be.a(FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule);
    });

    it('should have the property canceledAt (base name: "canceled_at")', function() {
      // uncomment below and update the code to test the property canceledAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property completedAt (base name: "completed_at")', function() {
      // uncomment below and update the code to test the property completedAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property defaultSettings (base name: "default_settings")', function() {
      // uncomment below and update the code to test the property defaultSettings
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property deletedAt (base name: "deleted_at")', function() {
      // uncomment below and update the code to test the property deletedAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property endBehavior (base name: "end_behavior")', function() {
      // uncomment below and update the code to test the property endBehavior
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "end_date")', function() {
      // uncomment below and update the code to test the property endDate
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property phases (base name: "phases")', function() {
      // uncomment below and update the code to test the property phases
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property releasedAt (base name: "released_at")', function() {
      // uncomment below and update the code to test the property releasedAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property releasedSubscription (base name: "released_subscription")', function() {
      // uncomment below and update the code to test the property releasedSubscription
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new FiberSwaggerExampleApi.SubscriptionScheduleSubscriptionSchedule();
      //expect(instance).to.be();
    });

  });

}));
