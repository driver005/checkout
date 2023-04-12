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
import ChargeStatus from './ChargeStatus';
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The ChargeCharge model module.
 * @module model/ChargeCharge
 * @version 2.0
 */
class ChargeCharge {
    /**
     * Constructs a new <code>ChargeCharge</code>.
     * @alias module:model/ChargeCharge
     */
    constructor() { 
        
        ChargeCharge.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChargeCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChargeCharge} obj Optional instance to populate.
     * @return {module:model/ChargeCharge} The populated <code>ChargeCharge</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChargeCharge();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('amount_captured')) {
                obj['amount_captured'] = ApiClient.convertToType(data['amount_captured'], 'Number');
            }
            if (data.hasOwnProperty('amount_refunded')) {
                obj['amount_refunded'] = ApiClient.convertToType(data['amount_refunded'], 'Number');
            }
            if (data.hasOwnProperty('balance_transaction')) {
                obj['balance_transaction'] = ApiClient.convertToType(data['balance_transaction'], 'String');
            }
            if (data.hasOwnProperty('billing_details')) {
                obj['billing_details'] = ApiClient.convertToType(data['billing_details'], 'String');
            }
            if (data.hasOwnProperty('calculated_statement_descriptor')) {
                obj['calculated_statement_descriptor'] = ApiClient.convertToType(data['calculated_statement_descriptor'], 'String');
            }
            if (data.hasOwnProperty('captured')) {
                obj['captured'] = ApiClient.convertToType(data['captured'], 'Boolean');
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
            if (data.hasOwnProperty('disputed')) {
                obj['disputed'] = ApiClient.convertToType(data['disputed'], 'Boolean');
            }
            if (data.hasOwnProperty('failure_balance_transaction')) {
                obj['failure_balance_transaction'] = ApiClient.convertToType(data['failure_balance_transaction'], 'String');
            }
            if (data.hasOwnProperty('failure_code')) {
                obj['failure_code'] = ApiClient.convertToType(data['failure_code'], 'String');
            }
            if (data.hasOwnProperty('failure_message')) {
                obj['failure_message'] = ApiClient.convertToType(data['failure_message'], 'String');
            }
            if (data.hasOwnProperty('fraud_details')) {
                obj['fraud_details'] = ApiClient.convertToType(data['fraud_details'], 'String');
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
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('outcome')) {
                obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
            }
            if (data.hasOwnProperty('paid')) {
                obj['paid'] = ApiClient.convertToType(data['paid'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_method')) {
                obj['payment_method'] = ApiClient.convertToType(data['payment_method'], 'String');
            }
            if (data.hasOwnProperty('payment_method_details')) {
                obj['payment_method_details'] = ApiClient.convertToType(data['payment_method_details'], 'String');
            }
            if (data.hasOwnProperty('radar_options')) {
                obj['radar_options'] = ApiClient.convertToType(data['radar_options'], 'String');
            }
            if (data.hasOwnProperty('receipt_email')) {
                obj['receipt_email'] = ApiClient.convertToType(data['receipt_email'], 'String');
            }
            if (data.hasOwnProperty('receipt_number')) {
                obj['receipt_number'] = ApiClient.convertToType(data['receipt_number'], 'String');
            }
            if (data.hasOwnProperty('receipt_url')) {
                obj['receipt_url'] = ApiClient.convertToType(data['receipt_url'], 'String');
            }
            if (data.hasOwnProperty('refunded')) {
                obj['refunded'] = ApiClient.convertToType(data['refunded'], 'Boolean');
            }
            if (data.hasOwnProperty('review')) {
                obj['review'] = ApiClient.convertToType(data['review'], 'String');
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
                obj['status'] = ChargeStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChargeCharge</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChargeCharge</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['balance_transaction'] && !(typeof data['balance_transaction'] === 'string' || data['balance_transaction'] instanceof String)) {
            throw new Error("Expected the field `balance_transaction` to be a primitive type in the JSON string but got " + data['balance_transaction']);
        }
        // ensure the json data is a string
        if (data['billing_details'] && !(typeof data['billing_details'] === 'string' || data['billing_details'] instanceof String)) {
            throw new Error("Expected the field `billing_details` to be a primitive type in the JSON string but got " + data['billing_details']);
        }
        // ensure the json data is a string
        if (data['calculated_statement_descriptor'] && !(typeof data['calculated_statement_descriptor'] === 'string' || data['calculated_statement_descriptor'] instanceof String)) {
            throw new Error("Expected the field `calculated_statement_descriptor` to be a primitive type in the JSON string but got " + data['calculated_statement_descriptor']);
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
        if (data['failure_balance_transaction'] && !(typeof data['failure_balance_transaction'] === 'string' || data['failure_balance_transaction'] instanceof String)) {
            throw new Error("Expected the field `failure_balance_transaction` to be a primitive type in the JSON string but got " + data['failure_balance_transaction']);
        }
        // ensure the json data is a string
        if (data['failure_code'] && !(typeof data['failure_code'] === 'string' || data['failure_code'] instanceof String)) {
            throw new Error("Expected the field `failure_code` to be a primitive type in the JSON string but got " + data['failure_code']);
        }
        // ensure the json data is a string
        if (data['failure_message'] && !(typeof data['failure_message'] === 'string' || data['failure_message'] instanceof String)) {
            throw new Error("Expected the field `failure_message` to be a primitive type in the JSON string but got " + data['failure_message']);
        }
        // ensure the json data is a string
        if (data['fraud_details'] && !(typeof data['fraud_details'] === 'string' || data['fraud_details'] instanceof String)) {
            throw new Error("Expected the field `fraud_details` to be a primitive type in the JSON string but got " + data['fraud_details']);
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
        if (data['outcome'] && !(typeof data['outcome'] === 'string' || data['outcome'] instanceof String)) {
            throw new Error("Expected the field `outcome` to be a primitive type in the JSON string but got " + data['outcome']);
        }
        // ensure the json data is a string
        if (data['payment_method'] && !(typeof data['payment_method'] === 'string' || data['payment_method'] instanceof String)) {
            throw new Error("Expected the field `payment_method` to be a primitive type in the JSON string but got " + data['payment_method']);
        }
        // ensure the json data is a string
        if (data['payment_method_details'] && !(typeof data['payment_method_details'] === 'string' || data['payment_method_details'] instanceof String)) {
            throw new Error("Expected the field `payment_method_details` to be a primitive type in the JSON string but got " + data['payment_method_details']);
        }
        // ensure the json data is a string
        if (data['radar_options'] && !(typeof data['radar_options'] === 'string' || data['radar_options'] instanceof String)) {
            throw new Error("Expected the field `radar_options` to be a primitive type in the JSON string but got " + data['radar_options']);
        }
        // ensure the json data is a string
        if (data['receipt_email'] && !(typeof data['receipt_email'] === 'string' || data['receipt_email'] instanceof String)) {
            throw new Error("Expected the field `receipt_email` to be a primitive type in the JSON string but got " + data['receipt_email']);
        }
        // ensure the json data is a string
        if (data['receipt_number'] && !(typeof data['receipt_number'] === 'string' || data['receipt_number'] instanceof String)) {
            throw new Error("Expected the field `receipt_number` to be a primitive type in the JSON string but got " + data['receipt_number']);
        }
        // ensure the json data is a string
        if (data['receipt_url'] && !(typeof data['receipt_url'] === 'string' || data['receipt_url'] instanceof String)) {
            throw new Error("Expected the field `receipt_url` to be a primitive type in the JSON string but got " + data['receipt_url']);
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
ChargeCharge.prototype['amount'] = undefined;

/**
 * @member {Number} amount_captured
 */
ChargeCharge.prototype['amount_captured'] = undefined;

/**
 * @member {Number} amount_refunded
 */
ChargeCharge.prototype['amount_refunded'] = undefined;

/**
 * @member {String} balance_transaction
 */
ChargeCharge.prototype['balance_transaction'] = undefined;

/**
 * @member {String} billing_details
 */
ChargeCharge.prototype['billing_details'] = undefined;

/**
 * @member {String} calculated_statement_descriptor
 */
ChargeCharge.prototype['calculated_statement_descriptor'] = undefined;

/**
 * @member {Boolean} captured
 */
ChargeCharge.prototype['captured'] = undefined;

/**
 * @member {String} created_at
 */
ChargeCharge.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
ChargeCharge.prototype['currency'] = undefined;

/**
 * @member {String} customer
 */
ChargeCharge.prototype['customer'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
ChargeCharge.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
ChargeCharge.prototype['description'] = undefined;

/**
 * @member {Boolean} disputed
 */
ChargeCharge.prototype['disputed'] = undefined;

/**
 * @member {String} failure_balance_transaction
 */
ChargeCharge.prototype['failure_balance_transaction'] = undefined;

/**
 * @member {String} failure_code
 */
ChargeCharge.prototype['failure_code'] = undefined;

/**
 * @member {String} failure_message
 */
ChargeCharge.prototype['failure_message'] = undefined;

/**
 * @member {String} fraud_details
 */
ChargeCharge.prototype['fraud_details'] = undefined;

/**
 * @member {String} id
 */
ChargeCharge.prototype['id'] = undefined;

/**
 * @member {Boolean} livemode
 */
ChargeCharge.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
ChargeCharge.prototype['metadata'] = undefined;

/**
 * @member {String} object
 */
ChargeCharge.prototype['object'] = undefined;

/**
 * @member {String} outcome
 */
ChargeCharge.prototype['outcome'] = undefined;

/**
 * @member {Boolean} paid
 */
ChargeCharge.prototype['paid'] = undefined;

/**
 * @member {String} payment_method
 */
ChargeCharge.prototype['payment_method'] = undefined;

/**
 * @member {String} payment_method_details
 */
ChargeCharge.prototype['payment_method_details'] = undefined;

/**
 * @member {String} radar_options
 */
ChargeCharge.prototype['radar_options'] = undefined;

/**
 * @member {String} receipt_email
 */
ChargeCharge.prototype['receipt_email'] = undefined;

/**
 * @member {String} receipt_number
 */
ChargeCharge.prototype['receipt_number'] = undefined;

/**
 * @member {String} receipt_url
 */
ChargeCharge.prototype['receipt_url'] = undefined;

/**
 * @member {Boolean} refunded
 */
ChargeCharge.prototype['refunded'] = undefined;

/**
 * @member {String} review
 */
ChargeCharge.prototype['review'] = undefined;

/**
 * @member {String} shipping
 */
ChargeCharge.prototype['shipping'] = undefined;

/**
 * @member {String} statement_descriptor
 */
ChargeCharge.prototype['statement_descriptor'] = undefined;

/**
 * @member {String} statement_descriptor_suffix
 */
ChargeCharge.prototype['statement_descriptor_suffix'] = undefined;

/**
 * @member {module:model/ChargeStatus} status
 */
ChargeCharge.prototype['status'] = undefined;

/**
 * @member {String} updated_at
 */
ChargeCharge.prototype['updated_at'] = undefined;






export default ChargeCharge;
