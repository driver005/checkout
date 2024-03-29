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
 * The BalanceBalance model module.
 * @module model/BalanceBalance
 * @version 2.0
 */
class BalanceBalance {
    /**
     * Constructs a new <code>BalanceBalance</code>.
     * @alias module:model/BalanceBalance
     */
    constructor() { 
        
        BalanceBalance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BalanceBalance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceBalance} obj Optional instance to populate.
     * @return {module:model/BalanceBalance} The populated <code>BalanceBalance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceBalance();

            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], ['String']);
            }
            if (data.hasOwnProperty('connect_reserved')) {
                obj['connect_reserved'] = ApiClient.convertToType(data['connect_reserved'], ['String']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('instant_available')) {
                obj['instant_available'] = ApiClient.convertToType(data['instant_available'], ['String']);
            }
            if (data.hasOwnProperty('issuing')) {
                obj['issuing'] = ApiClient.convertToType(data['issuing'], 'String');
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
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], ['String']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BalanceBalance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BalanceBalance</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['available'])) {
            throw new Error("Expected the field `available` to be an array in the JSON data but got " + data['available']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['connect_reserved'])) {
            throw new Error("Expected the field `connect_reserved` to be an array in the JSON data but got " + data['connect_reserved']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['instant_available'])) {
            throw new Error("Expected the field `instant_available` to be an array in the JSON data but got " + data['instant_available']);
        }
        // ensure the json data is a string
        if (data['issuing'] && !(typeof data['issuing'] === 'string' || data['issuing'] instanceof String)) {
            throw new Error("Expected the field `issuing` to be a primitive type in the JSON string but got " + data['issuing']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['pending'])) {
            throw new Error("Expected the field `pending` to be an array in the JSON data but got " + data['pending']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). The available balance for each currency and payment type can be found in the `source_types` property.
 * @member {Array.<String>} available
 */
BalanceBalance.prototype['available'] = undefined;

/**
 * Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.
 * @member {Array.<String>} connect_reserved
 */
BalanceBalance.prototype['connect_reserved'] = undefined;

/**
 * @member {String} created_at
 */
BalanceBalance.prototype['created_at'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
BalanceBalance.prototype['deleted_at'] = undefined;

/**
 * @member {String} id
 */
BalanceBalance.prototype['id'] = undefined;

/**
 * Funds that can be paid out using Instant Payouts.
 * @member {Array.<String>} instant_available
 */
BalanceBalance.prototype['instant_available'] = undefined;

/**
 * @member {String} issuing
 */
BalanceBalance.prototype['issuing'] = undefined;

/**
 * @member {Boolean} livemode
 */
BalanceBalance.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
BalanceBalance.prototype['metadata'] = undefined;

/**
 * @member {String} object
 */
BalanceBalance.prototype['object'] = undefined;

/**
 * Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.
 * @member {Array.<String>} pending
 */
BalanceBalance.prototype['pending'] = undefined;

/**
 * @member {String} updated_at
 */
BalanceBalance.prototype['updated_at'] = undefined;






export default BalanceBalance;

