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
import CouponDuration from './CouponDuration';
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The CouponCoupon model module.
 * @module model/CouponCoupon
 * @version 2.0
 */
class CouponCoupon {
    /**
     * Constructs a new <code>CouponCoupon</code>.
     * @alias module:model/CouponCoupon
     */
    constructor() { 
        
        CouponCoupon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CouponCoupon} obj Optional instance to populate.
     * @return {module:model/CouponCoupon} The populated <code>CouponCoupon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponCoupon();

            if (data.hasOwnProperty('amount_off')) {
                obj['amount_off'] = ApiClient.convertToType(data['amount_off'], 'Number');
            }
            if (data.hasOwnProperty('applies_to')) {
                obj['applies_to'] = ApiClient.convertToType(data['applies_to'], ['String']);
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
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = CouponDuration.constructFromObject(data['duration']);
            }
            if (data.hasOwnProperty('duration_in_months')) {
                obj['duration_in_months'] = ApiClient.convertToType(data['duration_in_months'], 'Number');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('percent_off')) {
                obj['percent_off'] = ApiClient.convertToType(data['percent_off'], 'Number');
            }
            if (data.hasOwnProperty('redeem_by')) {
                obj['redeem_by'] = ApiClient.convertToType(data['redeem_by'], 'Number');
            }
            if (data.hasOwnProperty('times_redeemed')) {
                obj['times_redeemed'] = ApiClient.convertToType(data['times_redeemed'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('valid')) {
                obj['valid'] = ApiClient.convertToType(data['valid'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CouponCoupon</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CouponCoupon</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['applies_to'])) {
            throw new Error("Expected the field `applies_to` to be an array in the JSON data but got " + data['applies_to']);
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
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
 * @member {Number} amount_off
 */
CouponCoupon.prototype['amount_off'] = undefined;

/**
 * @member {Array.<String>} applies_to
 */
CouponCoupon.prototype['applies_to'] = undefined;

/**
 * @member {String} created_at
 */
CouponCoupon.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
CouponCoupon.prototype['currency'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
CouponCoupon.prototype['deleted_at'] = undefined;

/**
 * @member {module:model/CouponDuration} duration
 */
CouponCoupon.prototype['duration'] = undefined;

/**
 * @member {Number} duration_in_months
 */
CouponCoupon.prototype['duration_in_months'] = undefined;

/**
 * @member {String} id
 */
CouponCoupon.prototype['id'] = undefined;

/**
 * @member {Boolean} livemode
 */
CouponCoupon.prototype['livemode'] = undefined;

/**
 * @member {Number} max_redemptions
 */
CouponCoupon.prototype['max_redemptions'] = undefined;

/**
 * @member {Object} metadata
 */
CouponCoupon.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
CouponCoupon.prototype['name'] = undefined;

/**
 * @member {String} object
 */
CouponCoupon.prototype['object'] = undefined;

/**
 * @member {Number} percent_off
 */
CouponCoupon.prototype['percent_off'] = undefined;

/**
 * @member {Number} redeem_by
 */
CouponCoupon.prototype['redeem_by'] = undefined;

/**
 * @member {Number} times_redeemed
 */
CouponCoupon.prototype['times_redeemed'] = undefined;

/**
 * @member {String} updated_at
 */
CouponCoupon.prototype['updated_at'] = undefined;

/**
 * @member {Boolean} valid
 */
CouponCoupon.prototype['valid'] = undefined;






export default CouponCoupon;

