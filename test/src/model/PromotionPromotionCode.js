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
 * The PromotionPromotionCode model module.
 * @module model/PromotionPromotionCode
 * @version 2.0
 */
class PromotionPromotionCode {
    /**
     * Constructs a new <code>PromotionPromotionCode</code>.
     * @alias module:model/PromotionPromotionCode
     */
    constructor() { 
        
        PromotionPromotionCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PromotionPromotionCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PromotionPromotionCode} obj Optional instance to populate.
     * @return {module:model/PromotionPromotionCode} The populated <code>PromotionPromotionCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PromotionPromotionCode();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('coupon')) {
                obj['coupon'] = ApiClient.convertToType(data['coupon'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Number');
            }
            if (data.hasOwnProperty('first_time_transaction')) {
                obj['first_time_transaction'] = ApiClient.convertToType(data['first_time_transaction'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('max_redemptions')) {
                obj['max_redemptions'] = ApiClient.convertToType(data['max_redemptions'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('minimum_amount')) {
                obj['minimum_amount'] = ApiClient.convertToType(data['minimum_amount'], 'Number');
            }
            if (data.hasOwnProperty('minimum_amount_currency')) {
                obj['minimum_amount_currency'] = ApiClient.convertToType(data['minimum_amount_currency'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('times_redeemed')) {
                obj['times_redeemed'] = ApiClient.convertToType(data['times_redeemed'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PromotionPromotionCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PromotionPromotionCode</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['coupon'] && !(typeof data['coupon'] === 'string' || data['coupon'] instanceof String)) {
            throw new Error("Expected the field `coupon` to be a primitive type in the JSON string but got " + data['coupon']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['minimum_amount_currency'] && !(typeof data['minimum_amount_currency'] === 'string' || data['minimum_amount_currency'] instanceof String)) {
            throw new Error("Expected the field `minimum_amount_currency` to be a primitive type in the JSON string but got " + data['minimum_amount_currency']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
PromotionPromotionCode.prototype['active'] = undefined;

/**
 * @member {String} code
 */
PromotionPromotionCode.prototype['code'] = undefined;

/**
 * @member {String} coupon
 */
PromotionPromotionCode.prototype['coupon'] = undefined;

/**
 * @member {String} created_at
 */
PromotionPromotionCode.prototype['created_at'] = undefined;

/**
 * @member {String} customer
 */
PromotionPromotionCode.prototype['customer'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
PromotionPromotionCode.prototype['deleted_at'] = undefined;

/**
 * @member {Number} expires_at
 */
PromotionPromotionCode.prototype['expires_at'] = undefined;

/**
 * @member {Boolean} first_time_transaction
 */
PromotionPromotionCode.prototype['first_time_transaction'] = undefined;

/**
 * @member {String} id
 */
PromotionPromotionCode.prototype['id'] = undefined;

/**
 * @member {Boolean} livemode
 */
PromotionPromotionCode.prototype['livemode'] = undefined;

/**
 * @member {Number} max_redemptions
 */
PromotionPromotionCode.prototype['max_redemptions'] = undefined;

/**
 * @member {Object} metadata
 */
PromotionPromotionCode.prototype['metadata'] = undefined;

/**
 * @member {Number} minimum_amount
 */
PromotionPromotionCode.prototype['minimum_amount'] = undefined;

/**
 * @member {String} minimum_amount_currency
 */
PromotionPromotionCode.prototype['minimum_amount_currency'] = undefined;

/**
 * @member {String} object
 */
PromotionPromotionCode.prototype['object'] = undefined;

/**
 * @member {Number} times_redeemed
 */
PromotionPromotionCode.prototype['times_redeemed'] = undefined;

/**
 * @member {String} updated_at
 */
PromotionPromotionCode.prototype['updated_at'] = undefined;






export default PromotionPromotionCode;

