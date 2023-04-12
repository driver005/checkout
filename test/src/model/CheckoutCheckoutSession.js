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
import CheckoutBillingAddressCollection from './CheckoutBillingAddressCollection';
import CheckoutCustomerCreation from './CheckoutCustomerCreation';
import CheckoutLocale from './CheckoutLocale';
import CheckoutMode from './CheckoutMode';
import CheckoutPaymentMethodCollection from './CheckoutPaymentMethodCollection';
import CheckoutPaymentStatus from './CheckoutPaymentStatus';
import CheckoutStatus from './CheckoutStatus';
import CheckoutSubmitType from './CheckoutSubmitType';
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The CheckoutCheckoutSession model module.
 * @module model/CheckoutCheckoutSession
 * @version 2.0
 */
class CheckoutCheckoutSession {
    /**
     * Constructs a new <code>CheckoutCheckoutSession</code>.
     * @alias module:model/CheckoutCheckoutSession
     */
    constructor() { 
        
        CheckoutCheckoutSession.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutCheckoutSession</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CheckoutCheckoutSession} obj Optional instance to populate.
     * @return {module:model/CheckoutCheckoutSession} The populated <code>CheckoutCheckoutSession</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutCheckoutSession();

            if (data.hasOwnProperty('after_expiration')) {
                obj['after_expiration'] = ApiClient.convertToType(data['after_expiration'], 'String');
            }
            if (data.hasOwnProperty('allow_promotion_codes')) {
                obj['allow_promotion_codes'] = ApiClient.convertToType(data['allow_promotion_codes'], 'Boolean');
            }
            if (data.hasOwnProperty('amount_subtotal')) {
                obj['amount_subtotal'] = ApiClient.convertToType(data['amount_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('amount_total')) {
                obj['amount_total'] = ApiClient.convertToType(data['amount_total'], 'Number');
            }
            if (data.hasOwnProperty('automatic_tax')) {
                obj['automatic_tax'] = ApiClient.convertToType(data['automatic_tax'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_address_collection')) {
                obj['billing_address_collection'] = CheckoutBillingAddressCollection.constructFromObject(data['billing_address_collection']);
            }
            if (data.hasOwnProperty('cancel_url')) {
                obj['cancel_url'] = ApiClient.convertToType(data['cancel_url'], 'String');
            }
            if (data.hasOwnProperty('client_reference_id')) {
                obj['client_reference_id'] = ApiClient.convertToType(data['client_reference_id'], 'String');
            }
            if (data.hasOwnProperty('consent')) {
                obj['consent'] = ApiClient.convertToType(data['consent'], 'String');
            }
            if (data.hasOwnProperty('consent_collection')) {
                obj['consent_collection'] = ApiClient.convertToType(data['consent_collection'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('custom_text')) {
                obj['custom_text'] = ApiClient.convertToType(data['custom_text'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('customer_creation')) {
                obj['customer_creation'] = CheckoutCustomerCreation.constructFromObject(data['customer_creation']);
            }
            if (data.hasOwnProperty('customer_details')) {
                obj['customer_details'] = ApiClient.convertToType(data['customer_details'], 'String');
            }
            if (data.hasOwnProperty('customer_email')) {
                obj['customer_email'] = ApiClient.convertToType(data['customer_email'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice')) {
                obj['invoice'] = ApiClient.convertToType(data['invoice'], 'String');
            }
            if (data.hasOwnProperty('invoice_creation')) {
                obj['invoice_creation'] = ApiClient.convertToType(data['invoice_creation'], 'String');
            }
            if (data.hasOwnProperty('line_items')) {
                obj['line_items'] = ApiClient.convertToType(data['line_items'], ['String']);
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = CheckoutLocale.constructFromObject(data['locale']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('mode')) {
                obj['mode'] = CheckoutMode.constructFromObject(data['mode']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('payment_intent')) {
                obj['payment_intent'] = ApiClient.convertToType(data['payment_intent'], 'String');
            }
            if (data.hasOwnProperty('payment_link')) {
                obj['payment_link'] = ApiClient.convertToType(data['payment_link'], 'String');
            }
            if (data.hasOwnProperty('payment_method_collection')) {
                obj['payment_method_collection'] = CheckoutPaymentMethodCollection.constructFromObject(data['payment_method_collection']);
            }
            if (data.hasOwnProperty('payment_method_options')) {
                obj['payment_method_options'] = ApiClient.convertToType(data['payment_method_options'], 'String');
            }
            if (data.hasOwnProperty('payment_method_types')) {
                obj['payment_method_types'] = ApiClient.convertToType(data['payment_method_types'], ['String']);
            }
            if (data.hasOwnProperty('payment_status')) {
                obj['payment_status'] = CheckoutPaymentStatus.constructFromObject(data['payment_status']);
            }
            if (data.hasOwnProperty('phone_number_collection')) {
                obj['phone_number_collection'] = ApiClient.convertToType(data['phone_number_collection'], 'Boolean');
            }
            if (data.hasOwnProperty('recovered_from')) {
                obj['recovered_from'] = ApiClient.convertToType(data['recovered_from'], 'String');
            }
            if (data.hasOwnProperty('setup_intent')) {
                obj['setup_intent'] = ApiClient.convertToType(data['setup_intent'], 'String');
            }
            if (data.hasOwnProperty('shipping_address_collection')) {
                obj['shipping_address_collection'] = ApiClient.convertToType(data['shipping_address_collection'], 'String');
            }
            if (data.hasOwnProperty('shipping_cost')) {
                obj['shipping_cost'] = ApiClient.convertToType(data['shipping_cost'], 'String');
            }
            if (data.hasOwnProperty('shipping_details')) {
                obj['shipping_details'] = ApiClient.convertToType(data['shipping_details'], 'String');
            }
            if (data.hasOwnProperty('shipping_options')) {
                obj['shipping_options'] = ApiClient.convertToType(data['shipping_options'], ['String']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = CheckoutStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('submit_type')) {
                obj['submit_type'] = CheckoutSubmitType.constructFromObject(data['submit_type']);
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
            if (data.hasOwnProperty('success_url')) {
                obj['success_url'] = ApiClient.convertToType(data['success_url'], 'String');
            }
            if (data.hasOwnProperty('tax_id_collection')) {
                obj['tax_id_collection'] = ApiClient.convertToType(data['tax_id_collection'], 'Boolean');
            }
            if (data.hasOwnProperty('total_details')) {
                obj['total_details'] = ApiClient.convertToType(data['total_details'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CheckoutCheckoutSession</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CheckoutCheckoutSession</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['after_expiration'] && !(typeof data['after_expiration'] === 'string' || data['after_expiration'] instanceof String)) {
            throw new Error("Expected the field `after_expiration` to be a primitive type in the JSON string but got " + data['after_expiration']);
        }
        // ensure the json data is a string
        if (data['cancel_url'] && !(typeof data['cancel_url'] === 'string' || data['cancel_url'] instanceof String)) {
            throw new Error("Expected the field `cancel_url` to be a primitive type in the JSON string but got " + data['cancel_url']);
        }
        // ensure the json data is a string
        if (data['client_reference_id'] && !(typeof data['client_reference_id'] === 'string' || data['client_reference_id'] instanceof String)) {
            throw new Error("Expected the field `client_reference_id` to be a primitive type in the JSON string but got " + data['client_reference_id']);
        }
        // ensure the json data is a string
        if (data['consent'] && !(typeof data['consent'] === 'string' || data['consent'] instanceof String)) {
            throw new Error("Expected the field `consent` to be a primitive type in the JSON string but got " + data['consent']);
        }
        // ensure the json data is a string
        if (data['consent_collection'] && !(typeof data['consent_collection'] === 'string' || data['consent_collection'] instanceof String)) {
            throw new Error("Expected the field `consent_collection` to be a primitive type in the JSON string but got " + data['consent_collection']);
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
        if (data['custom_text'] && !(typeof data['custom_text'] === 'string' || data['custom_text'] instanceof String)) {
            throw new Error("Expected the field `custom_text` to be a primitive type in the JSON string but got " + data['custom_text']);
        }
        // ensure the json data is a string
        if (data['customer'] && !(typeof data['customer'] === 'string' || data['customer'] instanceof String)) {
            throw new Error("Expected the field `customer` to be a primitive type in the JSON string but got " + data['customer']);
        }
        // ensure the json data is a string
        if (data['customer_details'] && !(typeof data['customer_details'] === 'string' || data['customer_details'] instanceof String)) {
            throw new Error("Expected the field `customer_details` to be a primitive type in the JSON string but got " + data['customer_details']);
        }
        // ensure the json data is a string
        if (data['customer_email'] && !(typeof data['customer_email'] === 'string' || data['customer_email'] instanceof String)) {
            throw new Error("Expected the field `customer_email` to be a primitive type in the JSON string but got " + data['customer_email']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['invoice'] && !(typeof data['invoice'] === 'string' || data['invoice'] instanceof String)) {
            throw new Error("Expected the field `invoice` to be a primitive type in the JSON string but got " + data['invoice']);
        }
        // ensure the json data is a string
        if (data['invoice_creation'] && !(typeof data['invoice_creation'] === 'string' || data['invoice_creation'] instanceof String)) {
            throw new Error("Expected the field `invoice_creation` to be a primitive type in the JSON string but got " + data['invoice_creation']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['line_items'])) {
            throw new Error("Expected the field `line_items` to be an array in the JSON data but got " + data['line_items']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['payment_intent'] && !(typeof data['payment_intent'] === 'string' || data['payment_intent'] instanceof String)) {
            throw new Error("Expected the field `payment_intent` to be a primitive type in the JSON string but got " + data['payment_intent']);
        }
        // ensure the json data is a string
        if (data['payment_link'] && !(typeof data['payment_link'] === 'string' || data['payment_link'] instanceof String)) {
            throw new Error("Expected the field `payment_link` to be a primitive type in the JSON string but got " + data['payment_link']);
        }
        // ensure the json data is a string
        if (data['payment_method_options'] && !(typeof data['payment_method_options'] === 'string' || data['payment_method_options'] instanceof String)) {
            throw new Error("Expected the field `payment_method_options` to be a primitive type in the JSON string but got " + data['payment_method_options']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['payment_method_types'])) {
            throw new Error("Expected the field `payment_method_types` to be an array in the JSON data but got " + data['payment_method_types']);
        }
        // ensure the json data is a string
        if (data['recovered_from'] && !(typeof data['recovered_from'] === 'string' || data['recovered_from'] instanceof String)) {
            throw new Error("Expected the field `recovered_from` to be a primitive type in the JSON string but got " + data['recovered_from']);
        }
        // ensure the json data is a string
        if (data['setup_intent'] && !(typeof data['setup_intent'] === 'string' || data['setup_intent'] instanceof String)) {
            throw new Error("Expected the field `setup_intent` to be a primitive type in the JSON string but got " + data['setup_intent']);
        }
        // ensure the json data is a string
        if (data['shipping_address_collection'] && !(typeof data['shipping_address_collection'] === 'string' || data['shipping_address_collection'] instanceof String)) {
            throw new Error("Expected the field `shipping_address_collection` to be a primitive type in the JSON string but got " + data['shipping_address_collection']);
        }
        // ensure the json data is a string
        if (data['shipping_cost'] && !(typeof data['shipping_cost'] === 'string' || data['shipping_cost'] instanceof String)) {
            throw new Error("Expected the field `shipping_cost` to be a primitive type in the JSON string but got " + data['shipping_cost']);
        }
        // ensure the json data is a string
        if (data['shipping_details'] && !(typeof data['shipping_details'] === 'string' || data['shipping_details'] instanceof String)) {
            throw new Error("Expected the field `shipping_details` to be a primitive type in the JSON string but got " + data['shipping_details']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['shipping_options'])) {
            throw new Error("Expected the field `shipping_options` to be an array in the JSON data but got " + data['shipping_options']);
        }
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
        }
        // ensure the json data is a string
        if (data['success_url'] && !(typeof data['success_url'] === 'string' || data['success_url'] instanceof String)) {
            throw new Error("Expected the field `success_url` to be a primitive type in the JSON string but got " + data['success_url']);
        }
        // ensure the json data is a string
        if (data['total_details'] && !(typeof data['total_details'] === 'string' || data['total_details'] instanceof String)) {
            throw new Error("Expected the field `total_details` to be a primitive type in the JSON string but got " + data['total_details']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} after_expiration
 */
CheckoutCheckoutSession.prototype['after_expiration'] = undefined;

/**
 * @member {Boolean} allow_promotion_codes
 */
CheckoutCheckoutSession.prototype['allow_promotion_codes'] = undefined;

/**
 * @member {Number} amount_subtotal
 */
CheckoutCheckoutSession.prototype['amount_subtotal'] = undefined;

/**
 * @member {Number} amount_total
 */
CheckoutCheckoutSession.prototype['amount_total'] = undefined;

/**
 * @member {Boolean} automatic_tax
 */
CheckoutCheckoutSession.prototype['automatic_tax'] = undefined;

/**
 * @member {module:model/CheckoutBillingAddressCollection} billing_address_collection
 */
CheckoutCheckoutSession.prototype['billing_address_collection'] = undefined;

/**
 * @member {String} cancel_url
 */
CheckoutCheckoutSession.prototype['cancel_url'] = undefined;

/**
 * @member {String} client_reference_id
 */
CheckoutCheckoutSession.prototype['client_reference_id'] = undefined;

/**
 * @member {String} consent
 */
CheckoutCheckoutSession.prototype['consent'] = undefined;

/**
 * @member {String} consent_collection
 */
CheckoutCheckoutSession.prototype['consent_collection'] = undefined;

/**
 * @member {String} created_at
 */
CheckoutCheckoutSession.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
CheckoutCheckoutSession.prototype['currency'] = undefined;

/**
 * @member {String} custom_text
 */
CheckoutCheckoutSession.prototype['custom_text'] = undefined;

/**
 * @member {String} customer
 */
CheckoutCheckoutSession.prototype['customer'] = undefined;

/**
 * @member {module:model/CheckoutCustomerCreation} customer_creation
 */
CheckoutCheckoutSession.prototype['customer_creation'] = undefined;

/**
 * @member {String} customer_details
 */
CheckoutCheckoutSession.prototype['customer_details'] = undefined;

/**
 * @member {String} customer_email
 */
CheckoutCheckoutSession.prototype['customer_email'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
CheckoutCheckoutSession.prototype['deleted_at'] = undefined;

/**
 * @member {Number} expires_at
 */
CheckoutCheckoutSession.prototype['expires_at'] = undefined;

/**
 * @member {String} id
 */
CheckoutCheckoutSession.prototype['id'] = undefined;

/**
 * @member {String} invoice
 */
CheckoutCheckoutSession.prototype['invoice'] = undefined;

/**
 * @member {String} invoice_creation
 */
CheckoutCheckoutSession.prototype['invoice_creation'] = undefined;

/**
 * @member {Array.<String>} line_items
 */
CheckoutCheckoutSession.prototype['line_items'] = undefined;

/**
 * @member {Boolean} livemode
 */
CheckoutCheckoutSession.prototype['livemode'] = undefined;

/**
 * @member {module:model/CheckoutLocale} locale
 */
CheckoutCheckoutSession.prototype['locale'] = undefined;

/**
 * @member {Object} metadata
 */
CheckoutCheckoutSession.prototype['metadata'] = undefined;

/**
 * @member {module:model/CheckoutMode} mode
 */
CheckoutCheckoutSession.prototype['mode'] = undefined;

/**
 * @member {String} object
 */
CheckoutCheckoutSession.prototype['object'] = undefined;

/**
 * @member {String} payment_intent
 */
CheckoutCheckoutSession.prototype['payment_intent'] = undefined;

/**
 * @member {String} payment_link
 */
CheckoutCheckoutSession.prototype['payment_link'] = undefined;

/**
 * @member {module:model/CheckoutPaymentMethodCollection} payment_method_collection
 */
CheckoutCheckoutSession.prototype['payment_method_collection'] = undefined;

/**
 * @member {String} payment_method_options
 */
CheckoutCheckoutSession.prototype['payment_method_options'] = undefined;

/**
 * @member {Array.<String>} payment_method_types
 */
CheckoutCheckoutSession.prototype['payment_method_types'] = undefined;

/**
 * @member {module:model/CheckoutPaymentStatus} payment_status
 */
CheckoutCheckoutSession.prototype['payment_status'] = undefined;

/**
 * @member {Boolean} phone_number_collection
 */
CheckoutCheckoutSession.prototype['phone_number_collection'] = undefined;

/**
 * @member {String} recovered_from
 */
CheckoutCheckoutSession.prototype['recovered_from'] = undefined;

/**
 * @member {String} setup_intent
 */
CheckoutCheckoutSession.prototype['setup_intent'] = undefined;

/**
 * @member {String} shipping_address_collection
 */
CheckoutCheckoutSession.prototype['shipping_address_collection'] = undefined;

/**
 * @member {String} shipping_cost
 */
CheckoutCheckoutSession.prototype['shipping_cost'] = undefined;

/**
 * @member {String} shipping_details
 */
CheckoutCheckoutSession.prototype['shipping_details'] = undefined;

/**
 * @member {Array.<String>} shipping_options
 */
CheckoutCheckoutSession.prototype['shipping_options'] = undefined;

/**
 * @member {module:model/CheckoutStatus} status
 */
CheckoutCheckoutSession.prototype['status'] = undefined;

/**
 * @member {module:model/CheckoutSubmitType} submit_type
 */
CheckoutCheckoutSession.prototype['submit_type'] = undefined;

/**
 * @member {String} subscription
 */
CheckoutCheckoutSession.prototype['subscription'] = undefined;

/**
 * @member {String} success_url
 */
CheckoutCheckoutSession.prototype['success_url'] = undefined;

/**
 * @member {Boolean} tax_id_collection
 */
CheckoutCheckoutSession.prototype['tax_id_collection'] = undefined;

/**
 * @member {String} total_details
 */
CheckoutCheckoutSession.prototype['total_details'] = undefined;

/**
 * @member {String} updated_at
 */
CheckoutCheckoutSession.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
CheckoutCheckoutSession.prototype['url'] = undefined;






export default CheckoutCheckoutSession;
