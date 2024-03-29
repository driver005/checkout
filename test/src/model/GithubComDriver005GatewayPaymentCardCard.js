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
import CardAddressLine1Check from './CardAddressLine1Check';
import CardAddressZipCheck from './CardAddressZipCheck';
import CardBrand from './CardBrand';
import CardCvcCheck from './CardCvcCheck';
import CardFunding from './CardFunding';
import CardTokenizationMethod from './CardTokenizationMethod';
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The GithubComDriver005GatewayPaymentCardCard model module.
 * @module model/GithubComDriver005GatewayPaymentCardCard
 * @version 2.0
 */
class GithubComDriver005GatewayPaymentCardCard {
    /**
     * Constructs a new <code>GithubComDriver005GatewayPaymentCardCard</code>.
     * @alias module:model/GithubComDriver005GatewayPaymentCardCard
     */
    constructor() { 
        
        GithubComDriver005GatewayPaymentCardCard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GithubComDriver005GatewayPaymentCardCard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GithubComDriver005GatewayPaymentCardCard} obj Optional instance to populate.
     * @return {module:model/GithubComDriver005GatewayPaymentCardCard} The populated <code>GithubComDriver005GatewayPaymentCardCard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GithubComDriver005GatewayPaymentCardCard();

            if (data.hasOwnProperty('account')) {
                obj['account'] = ApiClient.convertToType(data['account'], 'String');
            }
            if (data.hasOwnProperty('address_city')) {
                obj['address_city'] = ApiClient.convertToType(data['address_city'], 'String');
            }
            if (data.hasOwnProperty('address_country')) {
                obj['address_country'] = ApiClient.convertToType(data['address_country'], 'String');
            }
            if (data.hasOwnProperty('address_line1')) {
                obj['address_line1'] = ApiClient.convertToType(data['address_line1'], 'String');
            }
            if (data.hasOwnProperty('address_line1_check')) {
                obj['address_line1_check'] = CardAddressLine1Check.constructFromObject(data['address_line1_check']);
            }
            if (data.hasOwnProperty('address_line2')) {
                obj['address_line2'] = ApiClient.convertToType(data['address_line2'], 'String');
            }
            if (data.hasOwnProperty('address_state')) {
                obj['address_state'] = ApiClient.convertToType(data['address_state'], 'String');
            }
            if (data.hasOwnProperty('address_zip')) {
                obj['address_zip'] = ApiClient.convertToType(data['address_zip'], 'String');
            }
            if (data.hasOwnProperty('address_zip_check')) {
                obj['address_zip_check'] = CardAddressZipCheck.constructFromObject(data['address_zip_check']);
            }
            if (data.hasOwnProperty('available_payout_methods')) {
                obj['available_payout_methods'] = ApiClient.convertToType(data['available_payout_methods'], ['String']);
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = CardBrand.constructFromObject(data['brand']);
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
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
            if (data.hasOwnProperty('cvc_check')) {
                obj['cvc_check'] = CardCvcCheck.constructFromObject(data['cvc_check']);
            }
            if (data.hasOwnProperty('default_for_currency')) {
                obj['default_for_currency'] = ApiClient.convertToType(data['default_for_currency'], 'Boolean');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('dynamic_last4')) {
                obj['dynamic_last4'] = ApiClient.convertToType(data['dynamic_last4'], 'String');
            }
            if (data.hasOwnProperty('exp_month')) {
                obj['exp_month'] = ApiClient.convertToType(data['exp_month'], 'Number');
            }
            if (data.hasOwnProperty('exp_year')) {
                obj['exp_year'] = ApiClient.convertToType(data['exp_year'], 'Number');
            }
            if (data.hasOwnProperty('fingerprint')) {
                obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
            }
            if (data.hasOwnProperty('funding')) {
                obj['funding'] = CardFunding.constructFromObject(data['funding']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last4')) {
                obj['last4'] = ApiClient.convertToType(data['last4'], 'String');
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
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
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('tokenization_method')) {
                obj['tokenization_method'] = CardTokenizationMethod.constructFromObject(data['tokenization_method']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GithubComDriver005GatewayPaymentCardCard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GithubComDriver005GatewayPaymentCardCard</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account'] && !(typeof data['account'] === 'string' || data['account'] instanceof String)) {
            throw new Error("Expected the field `account` to be a primitive type in the JSON string but got " + data['account']);
        }
        // ensure the json data is a string
        if (data['address_city'] && !(typeof data['address_city'] === 'string' || data['address_city'] instanceof String)) {
            throw new Error("Expected the field `address_city` to be a primitive type in the JSON string but got " + data['address_city']);
        }
        // ensure the json data is a string
        if (data['address_country'] && !(typeof data['address_country'] === 'string' || data['address_country'] instanceof String)) {
            throw new Error("Expected the field `address_country` to be a primitive type in the JSON string but got " + data['address_country']);
        }
        // ensure the json data is a string
        if (data['address_line1'] && !(typeof data['address_line1'] === 'string' || data['address_line1'] instanceof String)) {
            throw new Error("Expected the field `address_line1` to be a primitive type in the JSON string but got " + data['address_line1']);
        }
        // ensure the json data is a string
        if (data['address_line2'] && !(typeof data['address_line2'] === 'string' || data['address_line2'] instanceof String)) {
            throw new Error("Expected the field `address_line2` to be a primitive type in the JSON string but got " + data['address_line2']);
        }
        // ensure the json data is a string
        if (data['address_state'] && !(typeof data['address_state'] === 'string' || data['address_state'] instanceof String)) {
            throw new Error("Expected the field `address_state` to be a primitive type in the JSON string but got " + data['address_state']);
        }
        // ensure the json data is a string
        if (data['address_zip'] && !(typeof data['address_zip'] === 'string' || data['address_zip'] instanceof String)) {
            throw new Error("Expected the field `address_zip` to be a primitive type in the JSON string but got " + data['address_zip']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['available_payout_methods'])) {
            throw new Error("Expected the field `available_payout_methods` to be an array in the JSON data but got " + data['available_payout_methods']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
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
        if (data['dynamic_last4'] && !(typeof data['dynamic_last4'] === 'string' || data['dynamic_last4'] instanceof String)) {
            throw new Error("Expected the field `dynamic_last4` to be a primitive type in the JSON string but got " + data['dynamic_last4']);
        }
        // ensure the json data is a string
        if (data['fingerprint'] && !(typeof data['fingerprint'] === 'string' || data['fingerprint'] instanceof String)) {
            throw new Error("Expected the field `fingerprint` to be a primitive type in the JSON string but got " + data['fingerprint']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last4'] && !(typeof data['last4'] === 'string' || data['last4'] instanceof String)) {
            throw new Error("Expected the field `last4` to be a primitive type in the JSON string but got " + data['last4']);
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
 * @member {String} account
 */
GithubComDriver005GatewayPaymentCardCard.prototype['account'] = undefined;

/**
 * @member {String} address_city
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_city'] = undefined;

/**
 * @member {String} address_country
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_country'] = undefined;

/**
 * @member {String} address_line1
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_line1'] = undefined;

/**
 * @member {module:model/CardAddressLine1Check} address_line1_check
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_line1_check'] = undefined;

/**
 * @member {String} address_line2
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_line2'] = undefined;

/**
 * @member {String} address_state
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_state'] = undefined;

/**
 * @member {String} address_zip
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_zip'] = undefined;

/**
 * @member {module:model/CardAddressZipCheck} address_zip_check
 */
GithubComDriver005GatewayPaymentCardCard.prototype['address_zip_check'] = undefined;

/**
 * @member {Array.<String>} available_payout_methods
 */
GithubComDriver005GatewayPaymentCardCard.prototype['available_payout_methods'] = undefined;

/**
 * @member {module:model/CardBrand} brand
 */
GithubComDriver005GatewayPaymentCardCard.prototype['brand'] = undefined;

/**
 * @member {String} country
 */
GithubComDriver005GatewayPaymentCardCard.prototype['country'] = undefined;

/**
 * @member {String} created_at
 */
GithubComDriver005GatewayPaymentCardCard.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
GithubComDriver005GatewayPaymentCardCard.prototype['currency'] = undefined;

/**
 * @member {String} customer
 */
GithubComDriver005GatewayPaymentCardCard.prototype['customer'] = undefined;

/**
 * @member {module:model/CardCvcCheck} cvc_check
 */
GithubComDriver005GatewayPaymentCardCard.prototype['cvc_check'] = undefined;

/**
 * @member {Boolean} default_for_currency
 */
GithubComDriver005GatewayPaymentCardCard.prototype['default_for_currency'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
GithubComDriver005GatewayPaymentCardCard.prototype['deleted_at'] = undefined;

/**
 * @member {String} dynamic_last4
 */
GithubComDriver005GatewayPaymentCardCard.prototype['dynamic_last4'] = undefined;

/**
 * @member {Number} exp_month
 */
GithubComDriver005GatewayPaymentCardCard.prototype['exp_month'] = undefined;

/**
 * @member {Number} exp_year
 */
GithubComDriver005GatewayPaymentCardCard.prototype['exp_year'] = undefined;

/**
 * @member {String} fingerprint
 */
GithubComDriver005GatewayPaymentCardCard.prototype['fingerprint'] = undefined;

/**
 * @member {module:model/CardFunding} funding
 */
GithubComDriver005GatewayPaymentCardCard.prototype['funding'] = undefined;

/**
 * @member {String} id
 */
GithubComDriver005GatewayPaymentCardCard.prototype['id'] = undefined;

/**
 * @member {String} last4
 */
GithubComDriver005GatewayPaymentCardCard.prototype['last4'] = undefined;

/**
 * @member {Boolean} livemode
 */
GithubComDriver005GatewayPaymentCardCard.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
GithubComDriver005GatewayPaymentCardCard.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
GithubComDriver005GatewayPaymentCardCard.prototype['name'] = undefined;

/**
 * @member {String} object
 */
GithubComDriver005GatewayPaymentCardCard.prototype['object'] = undefined;

/**
 * @member {String} status
 */
GithubComDriver005GatewayPaymentCardCard.prototype['status'] = undefined;

/**
 * @member {module:model/CardTokenizationMethod} tokenization_method
 */
GithubComDriver005GatewayPaymentCardCard.prototype['tokenization_method'] = undefined;

/**
 * @member {String} updated_at
 */
GithubComDriver005GatewayPaymentCardCard.prototype['updated_at'] = undefined;






export default GithubComDriver005GatewayPaymentCardCard;

