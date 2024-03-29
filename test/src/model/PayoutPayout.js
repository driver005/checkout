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
import PayoutMethod from './PayoutMethod';
import PayoutSourceType from './PayoutSourceType';
import PayoutStatus from './PayoutStatus';
import PayoutType from './PayoutType';

/**
 * The PayoutPayout model module.
 * @module model/PayoutPayout
 * @version 2.0
 */
class PayoutPayout {
    /**
     * Constructs a new <code>PayoutPayout</code>.
     * @alias module:model/PayoutPayout
     */
    constructor() { 
        
        PayoutPayout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PayoutPayout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PayoutPayout} obj Optional instance to populate.
     * @return {module:model/PayoutPayout} The populated <code>PayoutPayout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutPayout();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('arrival_date')) {
                obj['arrival_date'] = ApiClient.convertToType(data['arrival_date'], 'Number');
            }
            if (data.hasOwnProperty('automatic')) {
                obj['automatic'] = ApiClient.convertToType(data['automatic'], 'Boolean');
            }
            if (data.hasOwnProperty('balance_transaction')) {
                obj['balance_transaction'] = ApiClient.convertToType(data['balance_transaction'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('destination')) {
                obj['destination'] = ApiClient.convertToType(data['destination'], 'String');
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
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('method')) {
                obj['method'] = PayoutMethod.constructFromObject(data['method']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('original_payout')) {
                obj['original_payout'] = ApiClient.convertToType(data['original_payout'], 'String');
            }
            if (data.hasOwnProperty('reversed_by')) {
                obj['reversed_by'] = ApiClient.convertToType(data['reversed_by'], 'String');
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = PayoutSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('statement_descriptor')) {
                obj['statement_descriptor'] = ApiClient.convertToType(data['statement_descriptor'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = PayoutStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = PayoutType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PayoutPayout</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PayoutPayout</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['balance_transaction'] && !(typeof data['balance_transaction'] === 'string' || data['balance_transaction'] instanceof String)) {
            throw new Error("Expected the field `balance_transaction` to be a primitive type in the JSON string but got " + data['balance_transaction']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
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
        if (data['destination'] && !(typeof data['destination'] === 'string' || data['destination'] instanceof String)) {
            throw new Error("Expected the field `destination` to be a primitive type in the JSON string but got " + data['destination']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['original_payout'] && !(typeof data['original_payout'] === 'string' || data['original_payout'] instanceof String)) {
            throw new Error("Expected the field `original_payout` to be a primitive type in the JSON string but got " + data['original_payout']);
        }
        // ensure the json data is a string
        if (data['reversed_by'] && !(typeof data['reversed_by'] === 'string' || data['reversed_by'] instanceof String)) {
            throw new Error("Expected the field `reversed_by` to be a primitive type in the JSON string but got " + data['reversed_by']);
        }
        // ensure the json data is a string
        if (data['statement_descriptor'] && !(typeof data['statement_descriptor'] === 'string' || data['statement_descriptor'] instanceof String)) {
            throw new Error("Expected the field `statement_descriptor` to be a primitive type in the JSON string but got " + data['statement_descriptor']);
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
PayoutPayout.prototype['amount'] = undefined;

/**
 * @member {Number} arrival_date
 */
PayoutPayout.prototype['arrival_date'] = undefined;

/**
 * @member {Boolean} automatic
 */
PayoutPayout.prototype['automatic'] = undefined;

/**
 * @member {String} balance_transaction
 */
PayoutPayout.prototype['balance_transaction'] = undefined;

/**
 * @member {String} created_at
 */
PayoutPayout.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
PayoutPayout.prototype['currency'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
PayoutPayout.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
PayoutPayout.prototype['description'] = undefined;

/**
 * @member {String} destination
 */
PayoutPayout.prototype['destination'] = undefined;

/**
 * @member {String} failure_balance_transaction
 */
PayoutPayout.prototype['failure_balance_transaction'] = undefined;

/**
 * @member {String} failure_code
 */
PayoutPayout.prototype['failure_code'] = undefined;

/**
 * @member {String} failure_message
 */
PayoutPayout.prototype['failure_message'] = undefined;

/**
 * @member {String} id
 */
PayoutPayout.prototype['id'] = undefined;

/**
 * @member {Boolean} livemode
 */
PayoutPayout.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
PayoutPayout.prototype['metadata'] = undefined;

/**
 * @member {module:model/PayoutMethod} method
 */
PayoutPayout.prototype['method'] = undefined;

/**
 * @member {String} object
 */
PayoutPayout.prototype['object'] = undefined;

/**
 * @member {String} original_payout
 */
PayoutPayout.prototype['original_payout'] = undefined;

/**
 * @member {String} reversed_by
 */
PayoutPayout.prototype['reversed_by'] = undefined;

/**
 * @member {module:model/PayoutSourceType} source_type
 */
PayoutPayout.prototype['source_type'] = undefined;

/**
 * @member {String} statement_descriptor
 */
PayoutPayout.prototype['statement_descriptor'] = undefined;

/**
 * @member {module:model/PayoutStatus} status
 */
PayoutPayout.prototype['status'] = undefined;

/**
 * @member {module:model/PayoutType} type
 */
PayoutPayout.prototype['type'] = undefined;

/**
 * @member {String} updated_at
 */
PayoutPayout.prototype['updated_at'] = undefined;






export default PayoutPayout;

