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
import GithubComDriver005GatewayInternalIntentCancellationReason from './GithubComDriver005GatewayInternalIntentCancellationReason';
import GithubComDriver005GatewayInternalIntentStatus from './GithubComDriver005GatewayInternalIntentStatus';
import IntentCaptureMethod from './IntentCaptureMethod';
import IntentConfirmationMethod from './IntentConfirmationMethod';
import IntentSetupFutureUsage from './IntentSetupFutureUsage';

/**
 * The IntentPaymentIntent model module.
 * @module model/IntentPaymentIntent
 * @version 2.0
 */
class IntentPaymentIntent {
    /**
     * Constructs a new <code>IntentPaymentIntent</code>.
     * @alias module:model/IntentPaymentIntent
     */
    constructor() { 
        
        IntentPaymentIntent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntentPaymentIntent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IntentPaymentIntent} obj Optional instance to populate.
     * @return {module:model/IntentPaymentIntent} The populated <code>IntentPaymentIntent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntentPaymentIntent();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amount_capturable')) {
                obj['amount_capturable'] = ApiClient.convertToType(data['amount_capturable'], 'Number');
            }
            if (data.hasOwnProperty('amount_details')) {
                obj['amount_details'] = ApiClient.convertToType(data['amount_details'], 'String');
            }
            if (data.hasOwnProperty('amount_received')) {
                obj['amount_received'] = ApiClient.convertToType(data['amount_received'], 'Number');
            }
            if (data.hasOwnProperty('automatic_payment_methods')) {
                obj['automatic_payment_methods'] = ApiClient.convertToType(data['automatic_payment_methods'], 'Boolean');
            }
            if (data.hasOwnProperty('canceled_at')) {
                obj['canceled_at'] = ApiClient.convertToType(data['canceled_at'], 'Number');
            }
            if (data.hasOwnProperty('cancellation_reason')) {
                obj['cancellation_reason'] = GithubComDriver005GatewayInternalIntentCancellationReason.constructFromObject(data['cancellation_reason']);
            }
            if (data.hasOwnProperty('capture_method')) {
                obj['capture_method'] = IntentCaptureMethod.constructFromObject(data['capture_method']);
            }
            if (data.hasOwnProperty('client_secret')) {
                obj['client_secret'] = ApiClient.convertToType(data['client_secret'], 'String');
            }
            if (data.hasOwnProperty('confirmation_method')) {
                obj['confirmation_method'] = IntentConfirmationMethod.constructFromObject(data['confirmation_method']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_payment_error')) {
                obj['last_payment_error'] = ApiClient.convertToType(data['last_payment_error'], 'String');
            }
            if (data.hasOwnProperty('latest_charge')) {
                obj['latest_charge'] = ApiClient.convertToType(data['latest_charge'], 'String');
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('next_action')) {
                obj['next_action'] = ApiClient.convertToType(data['next_action'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('payment_method_options')) {
                obj['payment_method_options'] = ApiClient.convertToType(data['payment_method_options'], 'String');
            }
            if (data.hasOwnProperty('payment_method_types')) {
                obj['payment_method_types'] = ApiClient.convertToType(data['payment_method_types'], ['String']);
            }
            if (data.hasOwnProperty('processing')) {
                obj['processing'] = ApiClient.convertToType(data['processing'], 'String');
            }
            if (data.hasOwnProperty('receipt_email')) {
                obj['receipt_email'] = ApiClient.convertToType(data['receipt_email'], 'String');
            }
            if (data.hasOwnProperty('review')) {
                obj['review'] = ApiClient.convertToType(data['review'], 'String');
            }
            if (data.hasOwnProperty('setup_future_usage')) {
                obj['setup_future_usage'] = IntentSetupFutureUsage.constructFromObject(data['setup_future_usage']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = ApiClient.convertToType(data['shipping'], 'String');
            }
            if (data.hasOwnProperty('statement_descriptor')) {
                obj['statement_descriptor'] = ApiClient.convertToType(data['statement_descriptor'], 'String');
            }
            if (data.hasOwnProperty('statement_descriptor_suffix')) {
                obj['statement_descriptor_suffix'] = ApiClient.convertToType(data['statement_descriptor_suffix'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = GithubComDriver005GatewayInternalIntentStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IntentPaymentIntent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IntentPaymentIntent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['amount_details'] && !(typeof data['amount_details'] === 'string' || data['amount_details'] instanceof String)) {
            throw new Error("Expected the field `amount_details` to be a primitive type in the JSON string but got " + data['amount_details']);
        }
        // ensure the json data is a string
        if (data['client_secret'] && !(typeof data['client_secret'] === 'string' || data['client_secret'] instanceof String)) {
            throw new Error("Expected the field `client_secret` to be a primitive type in the JSON string but got " + data['client_secret']);
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
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_payment_error'] && !(typeof data['last_payment_error'] === 'string' || data['last_payment_error'] instanceof String)) {
            throw new Error("Expected the field `last_payment_error` to be a primitive type in the JSON string but got " + data['last_payment_error']);
        }
        // ensure the json data is a string
        if (data['latest_charge'] && !(typeof data['latest_charge'] === 'string' || data['latest_charge'] instanceof String)) {
            throw new Error("Expected the field `latest_charge` to be a primitive type in the JSON string but got " + data['latest_charge']);
        }
        // ensure the json data is a string
        if (data['next_action'] && !(typeof data['next_action'] === 'string' || data['next_action'] instanceof String)) {
            throw new Error("Expected the field `next_action` to be a primitive type in the JSON string but got " + data['next_action']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['payment_method'] && !(typeof data['payment_method'] === 'string' || data['payment_method'] instanceof String)) {
            throw new Error("Expected the field `payment_method` to be a primitive type in the JSON string but got " + data['payment_method']);
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
        if (data['processing'] && !(typeof data['processing'] === 'string' || data['processing'] instanceof String)) {
            throw new Error("Expected the field `processing` to be a primitive type in the JSON string but got " + data['processing']);
        }
        // ensure the json data is a string
        if (data['receipt_email'] && !(typeof data['receipt_email'] === 'string' || data['receipt_email'] instanceof String)) {
            throw new Error("Expected the field `receipt_email` to be a primitive type in the JSON string but got " + data['receipt_email']);
        }
        // ensure the json data is a string
        if (data['review'] && !(typeof data['review'] === 'string' || data['review'] instanceof String)) {
            throw new Error("Expected the field `review` to be a primitive type in the JSON string but got " + data['review']);
        }
        // ensure the json data is a string
        if (data['shipping'] && !(typeof data['shipping'] === 'string' || data['shipping'] instanceof String)) {
            throw new Error("Expected the field `shipping` to be a primitive type in the JSON string but got " + data['shipping']);
        }
        // ensure the json data is a string
        if (data['statement_descriptor'] && !(typeof data['statement_descriptor'] === 'string' || data['statement_descriptor'] instanceof String)) {
            throw new Error("Expected the field `statement_descriptor` to be a primitive type in the JSON string but got " + data['statement_descriptor']);
        }
        // ensure the json data is a string
        if (data['statement_descriptor_suffix'] && !(typeof data['statement_descriptor_suffix'] === 'string' || data['statement_descriptor_suffix'] instanceof String)) {
            throw new Error("Expected the field `statement_descriptor_suffix` to be a primitive type in the JSON string but got " + data['statement_descriptor_suffix']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
IntentPaymentIntent.prototype['amount'] = undefined;

/**
 * @member {Number} amount_capturable
 */
IntentPaymentIntent.prototype['amount_capturable'] = undefined;

/**
 * @member {String} amount_details
 */
IntentPaymentIntent.prototype['amount_details'] = undefined;

/**
 * @member {Number} amount_received
 */
IntentPaymentIntent.prototype['amount_received'] = undefined;

/**
 * @member {Boolean} automatic_payment_methods
 */
IntentPaymentIntent.prototype['automatic_payment_methods'] = undefined;

/**
 * @member {Number} canceled_at
 */
IntentPaymentIntent.prototype['canceled_at'] = undefined;

/**
 * @member {module:model/GithubComDriver005GatewayInternalIntentCancellationReason} cancellation_reason
 */
IntentPaymentIntent.prototype['cancellation_reason'] = undefined;

/**
 * @member {module:model/IntentCaptureMethod} capture_method
 */
IntentPaymentIntent.prototype['capture_method'] = undefined;

/**
 * @member {String} client_secret
 */
IntentPaymentIntent.prototype['client_secret'] = undefined;

/**
 * @member {module:model/IntentConfirmationMethod} confirmation_method
 */
IntentPaymentIntent.prototype['confirmation_method'] = undefined;

/**
 * @member {String} created_at
 */
IntentPaymentIntent.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
IntentPaymentIntent.prototype['currency'] = undefined;

/**
 * @member {String} customer
 */
IntentPaymentIntent.prototype['customer'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
IntentPaymentIntent.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
IntentPaymentIntent.prototype['description'] = undefined;

/**
 * @member {String} id
 */
IntentPaymentIntent.prototype['id'] = undefined;

/**
 * @member {String} last_payment_error
 */
IntentPaymentIntent.prototype['last_payment_error'] = undefined;

/**
 * @member {String} latest_charge
 */
IntentPaymentIntent.prototype['latest_charge'] = undefined;

/**
 * @member {Boolean} livemode
 */
IntentPaymentIntent.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
IntentPaymentIntent.prototype['metadata'] = undefined;

/**
 * @member {String} next_action
 */
IntentPaymentIntent.prototype['next_action'] = undefined;

/**
 * @member {String} object
 */
IntentPaymentIntent.prototype['object'] = undefined;

/**
 * @member {String} payment_method
 */
IntentPaymentIntent.prototype['payment_method'] = undefined;

/**
 * @member {String} payment_method_options
 */
IntentPaymentIntent.prototype['payment_method_options'] = undefined;

/**
 * @member {Array.<String>} payment_method_types
 */
IntentPaymentIntent.prototype['payment_method_types'] = undefined;

/**
 * @member {String} processing
 */
IntentPaymentIntent.prototype['processing'] = undefined;

/**
 * @member {String} receipt_email
 */
IntentPaymentIntent.prototype['receipt_email'] = undefined;

/**
 * @member {String} review
 */
IntentPaymentIntent.prototype['review'] = undefined;

/**
 * @member {module:model/IntentSetupFutureUsage} setup_future_usage
 */
IntentPaymentIntent.prototype['setup_future_usage'] = undefined;

/**
 * @member {String} shipping
 */
IntentPaymentIntent.prototype['shipping'] = undefined;

/**
 * @member {String} statement_descriptor
 */
IntentPaymentIntent.prototype['statement_descriptor'] = undefined;

/**
 * @member {String} statement_descriptor_suffix
 */
IntentPaymentIntent.prototype['statement_descriptor_suffix'] = undefined;

/**
 * @member {module:model/GithubComDriver005GatewayInternalIntentStatus} status
 */
IntentPaymentIntent.prototype['status'] = undefined;

/**
 * @member {String} updated_at
 */
IntentPaymentIntent.prototype['updated_at'] = undefined;






export default IntentPaymentIntent;

