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

import ApiClient from '../ApiClient';
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The SubscriptionSubscription model module.
 * @module model/SubscriptionSubscription
 * @version 2.0
 */
class SubscriptionSubscription {
    /**
     * Constructs a new <code>SubscriptionSubscription</code>.
     * @alias module:model/SubscriptionSubscription
     */
    constructor() { 
        
        SubscriptionSubscription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubscriptionSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubscriptionSubscription} obj Optional instance to populate.
     * @return {module:model/SubscriptionSubscription} The populated <code>SubscriptionSubscription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubscriptionSubscription();

            if (data.hasOwnProperty('automatic_tax')) {
                obj['automatic_tax'] = ApiClient.convertToType(data['automatic_tax'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_cycle_anchor')) {
                obj['billing_cycle_anchor'] = ApiClient.convertToType(data['billing_cycle_anchor'], 'Number');
            }
            if (data.hasOwnProperty('billing_thresholds')) {
                obj['billing_thresholds'] = ApiClient.convertToType(data['billing_thresholds'], 'String');
            }
            if (data.hasOwnProperty('cancel_at')) {
                obj['cancel_at'] = ApiClient.convertToType(data['cancel_at'], 'Number');
            }
            if (data.hasOwnProperty('cancel_at_period_end')) {
                obj['cancel_at_period_end'] = ApiClient.convertToType(data['cancel_at_period_end'], 'Boolean');
            }
            if (data.hasOwnProperty('canceled_at')) {
                obj['canceled_at'] = ApiClient.convertToType(data['canceled_at'], 'Number');
            }
            if (data.hasOwnProperty('collection_method')) {
                obj['collection_method'] = ApiClient.convertToType(data['collection_method'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('current_period_end')) {
                obj['current_period_end'] = ApiClient.convertToType(data['current_period_end'], 'Number');
            }
            if (data.hasOwnProperty('current_period_start')) {
                obj['current_period_start'] = ApiClient.convertToType(data['current_period_start'], 'Number');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('days_until_due')) {
                obj['days_until_due'] = ApiClient.convertToType(data['days_until_due'], 'Number');
            }
            if (data.hasOwnProperty('default_payment_method')) {
                obj['default_payment_method'] = ApiClient.convertToType(data['default_payment_method'], 'String');
            }
            if (data.hasOwnProperty('default_tax_rates')) {
                obj['default_tax_rates'] = ApiClient.convertToType(data['default_tax_rates'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = ApiClient.convertToType(data['discount'], 'String');
            }
            if (data.hasOwnProperty('ended_at')) {
                obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('next_pending_invoice_item_invoice')) {
                obj['next_pending_invoice_item_invoice'] = ApiClient.convertToType(data['next_pending_invoice_item_invoice'], 'Number');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('pause_collection')) {
                obj['pause_collection'] = ApiClient.convertToType(data['pause_collection'], 'String');
            }
            if (data.hasOwnProperty('payment_settings')) {
                obj['payment_settings'] = ApiClient.convertToType(data['payment_settings'], 'String');
            }
            if (data.hasOwnProperty('pending_invoice_item_interval')) {
                obj['pending_invoice_item_interval'] = ApiClient.convertToType(data['pending_invoice_item_interval'], 'String');
            }
            if (data.hasOwnProperty('pending_setup_intent')) {
                obj['pending_setup_intent'] = ApiClient.convertToType(data['pending_setup_intent'], 'String');
            }
            if (data.hasOwnProperty('pending_update')) {
                obj['pending_update'] = ApiClient.convertToType(data['pending_update'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], 'String');
            }
            if (data.hasOwnProperty('start_date')) {
                obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('trial_end')) {
                obj['trial_end'] = ApiClient.convertToType(data['trial_end'], 'Number');
            }
            if (data.hasOwnProperty('trial_start')) {
                obj['trial_start'] = ApiClient.convertToType(data['trial_start'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubscriptionSubscription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubscriptionSubscription</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['billing_thresholds'] && !(typeof data['billing_thresholds'] === 'string' || data['billing_thresholds'] instanceof String)) {
            throw new Error("Expected the field `billing_thresholds` to be a primitive type in the JSON string but got " + data['billing_thresholds']);
        }
        // ensure the json data is a string
        if (data['collection_method'] && !(typeof data['collection_method'] === 'string' || data['collection_method'] instanceof String)) {
            throw new Error("Expected the field `collection_method` to be a primitive type in the JSON string but got " + data['collection_method']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['customer'] && !(typeof data['customer'] === 'string' || data['customer'] instanceof String)) {
            throw new Error("Expected the field `customer` to be a primitive type in the JSON string but got " + data['customer']);
        }
        // ensure the json data is a string
        if (data['default_payment_method'] && !(typeof data['default_payment_method'] === 'string' || data['default_payment_method'] instanceof String)) {
            throw new Error("Expected the field `default_payment_method` to be a primitive type in the JSON string but got " + data['default_payment_method']);
        }
        // ensure the json data is a string
        if (data['default_tax_rates'] && !(typeof data['default_tax_rates'] === 'string' || data['default_tax_rates'] instanceof String)) {
            throw new Error("Expected the field `default_tax_rates` to be a primitive type in the JSON string but got " + data['default_tax_rates']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['discount'] && !(typeof data['discount'] === 'string' || data['discount'] instanceof String)) {
            throw new Error("Expected the field `discount` to be a primitive type in the JSON string but got " + data['discount']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['pause_collection'] && !(typeof data['pause_collection'] === 'string' || data['pause_collection'] instanceof String)) {
            throw new Error("Expected the field `pause_collection` to be a primitive type in the JSON string but got " + data['pause_collection']);
        }
        // ensure the json data is a string
        if (data['payment_settings'] && !(typeof data['payment_settings'] === 'string' || data['payment_settings'] instanceof String)) {
            throw new Error("Expected the field `payment_settings` to be a primitive type in the JSON string but got " + data['payment_settings']);
        }
        // ensure the json data is a string
        if (data['pending_invoice_item_interval'] && !(typeof data['pending_invoice_item_interval'] === 'string' || data['pending_invoice_item_interval'] instanceof String)) {
            throw new Error("Expected the field `pending_invoice_item_interval` to be a primitive type in the JSON string but got " + data['pending_invoice_item_interval']);
        }
        // ensure the json data is a string
        if (data['pending_setup_intent'] && !(typeof data['pending_setup_intent'] === 'string' || data['pending_setup_intent'] instanceof String)) {
            throw new Error("Expected the field `pending_setup_intent` to be a primitive type in the JSON string but got " + data['pending_setup_intent']);
        }
        // ensure the json data is a string
        if (data['pending_update'] && !(typeof data['pending_update'] === 'string' || data['pending_update'] instanceof String)) {
            throw new Error("Expected the field `pending_update` to be a primitive type in the JSON string but got " + data['pending_update']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['schedule'] && !(typeof data['schedule'] === 'string' || data['schedule'] instanceof String)) {
            throw new Error("Expected the field `schedule` to be a primitive type in the JSON string but got " + data['schedule']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {Boolean} automatic_tax
 */
SubscriptionSubscription.prototype['automatic_tax'] = undefined;

/**
 * Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. The timestamp is in UTC format.
 * @member {Number} billing_cycle_anchor
 */
SubscriptionSubscription.prototype['billing_cycle_anchor'] = undefined;

/**
 * @member {String} billing_thresholds
 */
SubscriptionSubscription.prototype['billing_thresholds'] = undefined;

/**
 * A date in the future at which the subscription will automatically get canceled
 * @member {Number} cancel_at
 */
SubscriptionSubscription.prototype['cancel_at'] = undefined;

/**
 * If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
 * @member {Boolean} cancel_at_period_end
 */
SubscriptionSubscription.prototype['cancel_at_period_end'] = undefined;

/**
 * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
 * @member {Number} canceled_at
 */
SubscriptionSubscription.prototype['canceled_at'] = undefined;

/**
 * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`.
 * @member {String} collection_method
 */
SubscriptionSubscription.prototype['collection_method'] = undefined;

/**
 * @member {String} created_at
 */
SubscriptionSubscription.prototype['created_at'] = undefined;

/**
 * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
 * @member {String} currency
 */
SubscriptionSubscription.prototype['currency'] = undefined;

/**
 * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
 * @member {Number} current_period_end
 */
SubscriptionSubscription.prototype['current_period_end'] = undefined;

/**
 * Start of the current period that the subscription has been invoiced for.
 * @member {Number} current_period_start
 */
SubscriptionSubscription.prototype['current_period_start'] = undefined;

/**
 * @member {String} customer
 */
SubscriptionSubscription.prototype['customer'] = undefined;

/**
 * Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
 * @member {Number} days_until_due
 */
SubscriptionSubscription.prototype['days_until_due'] = undefined;

/**
 * @member {String} default_payment_method
 */
SubscriptionSubscription.prototype['default_payment_method'] = undefined;

/**
 * The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
 * @member {String} default_tax_rates
 */
SubscriptionSubscription.prototype['default_tax_rates'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
SubscriptionSubscription.prototype['deleted_at'] = undefined;

/**
 * The subscription's description, meant to be displayable to the customer. Use this field to optionally store an explanation of the subscription for rendering in Stripe surfaces.
 * @member {String} description
 */
SubscriptionSubscription.prototype['description'] = undefined;

/**
 * @member {String} discount
 */
SubscriptionSubscription.prototype['discount'] = undefined;

/**
 * If the subscription has ended, the date the subscription ended.
 * @member {Number} ended_at
 */
SubscriptionSubscription.prototype['ended_at'] = undefined;

/**
 * @member {String} id
 */
SubscriptionSubscription.prototype['id'] = undefined;

/**
 * @member {Boolean} livemode
 */
SubscriptionSubscription.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
SubscriptionSubscription.prototype['metadata'] = undefined;

/**
 * Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
 * @member {Number} next_pending_invoice_item_invoice
 */
SubscriptionSubscription.prototype['next_pending_invoice_item_invoice'] = undefined;

/**
 * @member {String} object
 */
SubscriptionSubscription.prototype['object'] = undefined;

/**
 * @member {String} pause_collection
 */
SubscriptionSubscription.prototype['pause_collection'] = undefined;

/**
 * @member {String} payment_settings
 */
SubscriptionSubscription.prototype['payment_settings'] = undefined;

/**
 * @member {String} pending_invoice_item_interval
 */
SubscriptionSubscription.prototype['pending_invoice_item_interval'] = undefined;

/**
 * @member {String} pending_setup_intent
 */
SubscriptionSubscription.prototype['pending_setup_intent'] = undefined;

/**
 * @member {String} pending_update
 */
SubscriptionSubscription.prototype['pending_update'] = undefined;

/**
 * @member {String} price
 */
SubscriptionSubscription.prototype['price'] = undefined;

/**
 * @member {String} schedule
 */
SubscriptionSubscription.prototype['schedule'] = undefined;

/**
 * Date when the subscription was first created. The date might differ from the `created` date due to backdating.
 * @member {Number} start_date
 */
SubscriptionSubscription.prototype['start_date'] = undefined;

/**
 * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.   For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.   A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.   If subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.   If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
 * @member {String} status
 */
SubscriptionSubscription.prototype['status'] = undefined;

/**
 * If the subscription has a trial, the end of that trial.
 * @member {Number} trial_end
 */
SubscriptionSubscription.prototype['trial_end'] = undefined;

/**
 * If the subscription has a trial, the beginning of that trial.
 * @member {Number} trial_start
 */
SubscriptionSubscription.prototype['trial_start'] = undefined;

/**
 * @member {String} updated_at
 */
SubscriptionSubscription.prototype['updated_at'] = undefined;






export default SubscriptionSubscription;
