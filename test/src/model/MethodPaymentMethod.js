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
import MethodType from './MethodType';

/**
 * The MethodPaymentMethod model module.
 * @module model/MethodPaymentMethod
 * @version 2.0
 */
class MethodPaymentMethod {
    /**
     * Constructs a new <code>MethodPaymentMethod</code>.
     * @alias module:model/MethodPaymentMethod
     */
    constructor() { 
        
        MethodPaymentMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MethodPaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MethodPaymentMethod} obj Optional instance to populate.
     * @return {module:model/MethodPaymentMethod} The populated <code>MethodPaymentMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MethodPaymentMethod();

            if (data.hasOwnProperty('acss_debit')) {
                obj['acss_debit'] = ApiClient.convertToType(data['acss_debit'], 'String');
            }
            if (data.hasOwnProperty('affirm')) {
                obj['affirm'] = ApiClient.convertToType(data['affirm'], 'String');
            }
            if (data.hasOwnProperty('afterpay_clearpay')) {
                obj['afterpay_clearpay'] = ApiClient.convertToType(data['afterpay_clearpay'], 'String');
            }
            if (data.hasOwnProperty('alipay')) {
                obj['alipay'] = ApiClient.convertToType(data['alipay'], 'String');
            }
            if (data.hasOwnProperty('au_becs_debit')) {
                obj['au_becs_debit'] = ApiClient.convertToType(data['au_becs_debit'], 'String');
            }
            if (data.hasOwnProperty('bacs_debit')) {
                obj['bacs_debit'] = ApiClient.convertToType(data['bacs_debit'], 'String');
            }
            if (data.hasOwnProperty('bancontact')) {
                obj['bancontact'] = ApiClient.convertToType(data['bancontact'], 'String');
            }
            if (data.hasOwnProperty('billing_details')) {
                obj['billing_details'] = ApiClient.convertToType(data['billing_details'], 'String');
            }
            if (data.hasOwnProperty('blik')) {
                obj['blik'] = ApiClient.convertToType(data['blik'], 'String');
            }
            if (data.hasOwnProperty('boleto')) {
                obj['boleto'] = ApiClient.convertToType(data['boleto'], 'String');
            }
            if (data.hasOwnProperty('btc_pay')) {
                obj['btc_pay'] = ApiClient.convertToType(data['btc_pay'], 'String');
            }
            if (data.hasOwnProperty('card')) {
                obj['card'] = ApiClient.convertToType(data['card'], 'String');
            }
            if (data.hasOwnProperty('card_present')) {
                obj['card_present'] = ApiClient.convertToType(data['card_present'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('customer_balance')) {
                obj['customer_balance'] = ApiClient.convertToType(data['customer_balance'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('eps')) {
                obj['eps'] = ApiClient.convertToType(data['eps'], 'String');
            }
            if (data.hasOwnProperty('fpx')) {
                obj['fpx'] = ApiClient.convertToType(data['fpx'], 'String');
            }
            if (data.hasOwnProperty('giropay')) {
                obj['giropay'] = ApiClient.convertToType(data['giropay'], 'String');
            }
            if (data.hasOwnProperty('grabpay')) {
                obj['grabpay'] = ApiClient.convertToType(data['grabpay'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ideal')) {
                obj['ideal'] = ApiClient.convertToType(data['ideal'], 'String');
            }
            if (data.hasOwnProperty('interac_present')) {
                obj['interac_present'] = ApiClient.convertToType(data['interac_present'], 'String');
            }
            if (data.hasOwnProperty('klarna')) {
                obj['klarna'] = ApiClient.convertToType(data['klarna'], 'String');
            }
            if (data.hasOwnProperty('konbini')) {
                obj['konbini'] = ApiClient.convertToType(data['konbini'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
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
            if (data.hasOwnProperty('oxxo')) {
                obj['oxxo'] = ApiClient.convertToType(data['oxxo'], 'String');
            }
            if (data.hasOwnProperty('p24')) {
                obj['p24'] = ApiClient.convertToType(data['p24'], 'String');
            }
            if (data.hasOwnProperty('paynow')) {
                obj['paynow'] = ApiClient.convertToType(data['paynow'], 'String');
            }
            if (data.hasOwnProperty('pix')) {
                obj['pix'] = ApiClient.convertToType(data['pix'], 'String');
            }
            if (data.hasOwnProperty('promptpay')) {
                obj['promptpay'] = ApiClient.convertToType(data['promptpay'], 'String');
            }
            if (data.hasOwnProperty('radar_options')) {
                obj['radar_options'] = ApiClient.convertToType(data['radar_options'], 'String');
            }
            if (data.hasOwnProperty('sepa_debit')) {
                obj['sepa_debit'] = ApiClient.convertToType(data['sepa_debit'], 'String');
            }
            if (data.hasOwnProperty('sofort')) {
                obj['sofort'] = ApiClient.convertToType(data['sofort'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MethodType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('us_bank_account')) {
                obj['us_bank_account'] = ApiClient.convertToType(data['us_bank_account'], 'String');
            }
            if (data.hasOwnProperty('wechat_pay')) {
                obj['wechat_pay'] = ApiClient.convertToType(data['wechat_pay'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MethodPaymentMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MethodPaymentMethod</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['acss_debit'] && !(typeof data['acss_debit'] === 'string' || data['acss_debit'] instanceof String)) {
            throw new Error("Expected the field `acss_debit` to be a primitive type in the JSON string but got " + data['acss_debit']);
        }
        // ensure the json data is a string
        if (data['affirm'] && !(typeof data['affirm'] === 'string' || data['affirm'] instanceof String)) {
            throw new Error("Expected the field `affirm` to be a primitive type in the JSON string but got " + data['affirm']);
        }
        // ensure the json data is a string
        if (data['afterpay_clearpay'] && !(typeof data['afterpay_clearpay'] === 'string' || data['afterpay_clearpay'] instanceof String)) {
            throw new Error("Expected the field `afterpay_clearpay` to be a primitive type in the JSON string but got " + data['afterpay_clearpay']);
        }
        // ensure the json data is a string
        if (data['alipay'] && !(typeof data['alipay'] === 'string' || data['alipay'] instanceof String)) {
            throw new Error("Expected the field `alipay` to be a primitive type in the JSON string but got " + data['alipay']);
        }
        // ensure the json data is a string
        if (data['au_becs_debit'] && !(typeof data['au_becs_debit'] === 'string' || data['au_becs_debit'] instanceof String)) {
            throw new Error("Expected the field `au_becs_debit` to be a primitive type in the JSON string but got " + data['au_becs_debit']);
        }
        // ensure the json data is a string
        if (data['bacs_debit'] && !(typeof data['bacs_debit'] === 'string' || data['bacs_debit'] instanceof String)) {
            throw new Error("Expected the field `bacs_debit` to be a primitive type in the JSON string but got " + data['bacs_debit']);
        }
        // ensure the json data is a string
        if (data['bancontact'] && !(typeof data['bancontact'] === 'string' || data['bancontact'] instanceof String)) {
            throw new Error("Expected the field `bancontact` to be a primitive type in the JSON string but got " + data['bancontact']);
        }
        // ensure the json data is a string
        if (data['billing_details'] && !(typeof data['billing_details'] === 'string' || data['billing_details'] instanceof String)) {
            throw new Error("Expected the field `billing_details` to be a primitive type in the JSON string but got " + data['billing_details']);
        }
        // ensure the json data is a string
        if (data['blik'] && !(typeof data['blik'] === 'string' || data['blik'] instanceof String)) {
            throw new Error("Expected the field `blik` to be a primitive type in the JSON string but got " + data['blik']);
        }
        // ensure the json data is a string
        if (data['boleto'] && !(typeof data['boleto'] === 'string' || data['boleto'] instanceof String)) {
            throw new Error("Expected the field `boleto` to be a primitive type in the JSON string but got " + data['boleto']);
        }
        // ensure the json data is a string
        if (data['btc_pay'] && !(typeof data['btc_pay'] === 'string' || data['btc_pay'] instanceof String)) {
            throw new Error("Expected the field `btc_pay` to be a primitive type in the JSON string but got " + data['btc_pay']);
        }
        // ensure the json data is a string
        if (data['card'] && !(typeof data['card'] === 'string' || data['card'] instanceof String)) {
            throw new Error("Expected the field `card` to be a primitive type in the JSON string but got " + data['card']);
        }
        // ensure the json data is a string
        if (data['card_present'] && !(typeof data['card_present'] === 'string' || data['card_present'] instanceof String)) {
            throw new Error("Expected the field `card_present` to be a primitive type in the JSON string but got " + data['card_present']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['customer'] && !(typeof data['customer'] === 'string' || data['customer'] instanceof String)) {
            throw new Error("Expected the field `customer` to be a primitive type in the JSON string but got " + data['customer']);
        }
        // ensure the json data is a string
        if (data['customer_balance'] && !(typeof data['customer_balance'] === 'string' || data['customer_balance'] instanceof String)) {
            throw new Error("Expected the field `customer_balance` to be a primitive type in the JSON string but got " + data['customer_balance']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['eps'] && !(typeof data['eps'] === 'string' || data['eps'] instanceof String)) {
            throw new Error("Expected the field `eps` to be a primitive type in the JSON string but got " + data['eps']);
        }
        // ensure the json data is a string
        if (data['fpx'] && !(typeof data['fpx'] === 'string' || data['fpx'] instanceof String)) {
            throw new Error("Expected the field `fpx` to be a primitive type in the JSON string but got " + data['fpx']);
        }
        // ensure the json data is a string
        if (data['giropay'] && !(typeof data['giropay'] === 'string' || data['giropay'] instanceof String)) {
            throw new Error("Expected the field `giropay` to be a primitive type in the JSON string but got " + data['giropay']);
        }
        // ensure the json data is a string
        if (data['grabpay'] && !(typeof data['grabpay'] === 'string' || data['grabpay'] instanceof String)) {
            throw new Error("Expected the field `grabpay` to be a primitive type in the JSON string but got " + data['grabpay']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['ideal'] && !(typeof data['ideal'] === 'string' || data['ideal'] instanceof String)) {
            throw new Error("Expected the field `ideal` to be a primitive type in the JSON string but got " + data['ideal']);
        }
        // ensure the json data is a string
        if (data['interac_present'] && !(typeof data['interac_present'] === 'string' || data['interac_present'] instanceof String)) {
            throw new Error("Expected the field `interac_present` to be a primitive type in the JSON string but got " + data['interac_present']);
        }
        // ensure the json data is a string
        if (data['klarna'] && !(typeof data['klarna'] === 'string' || data['klarna'] instanceof String)) {
            throw new Error("Expected the field `klarna` to be a primitive type in the JSON string but got " + data['klarna']);
        }
        // ensure the json data is a string
        if (data['konbini'] && !(typeof data['konbini'] === 'string' || data['konbini'] instanceof String)) {
            throw new Error("Expected the field `konbini` to be a primitive type in the JSON string but got " + data['konbini']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['oxxo'] && !(typeof data['oxxo'] === 'string' || data['oxxo'] instanceof String)) {
            throw new Error("Expected the field `oxxo` to be a primitive type in the JSON string but got " + data['oxxo']);
        }
        // ensure the json data is a string
        if (data['p24'] && !(typeof data['p24'] === 'string' || data['p24'] instanceof String)) {
            throw new Error("Expected the field `p24` to be a primitive type in the JSON string but got " + data['p24']);
        }
        // ensure the json data is a string
        if (data['paynow'] && !(typeof data['paynow'] === 'string' || data['paynow'] instanceof String)) {
            throw new Error("Expected the field `paynow` to be a primitive type in the JSON string but got " + data['paynow']);
        }
        // ensure the json data is a string
        if (data['pix'] && !(typeof data['pix'] === 'string' || data['pix'] instanceof String)) {
            throw new Error("Expected the field `pix` to be a primitive type in the JSON string but got " + data['pix']);
        }
        // ensure the json data is a string
        if (data['promptpay'] && !(typeof data['promptpay'] === 'string' || data['promptpay'] instanceof String)) {
            throw new Error("Expected the field `promptpay` to be a primitive type in the JSON string but got " + data['promptpay']);
        }
        // ensure the json data is a string
        if (data['radar_options'] && !(typeof data['radar_options'] === 'string' || data['radar_options'] instanceof String)) {
            throw new Error("Expected the field `radar_options` to be a primitive type in the JSON string but got " + data['radar_options']);
        }
        // ensure the json data is a string
        if (data['sepa_debit'] && !(typeof data['sepa_debit'] === 'string' || data['sepa_debit'] instanceof String)) {
            throw new Error("Expected the field `sepa_debit` to be a primitive type in the JSON string but got " + data['sepa_debit']);
        }
        // ensure the json data is a string
        if (data['sofort'] && !(typeof data['sofort'] === 'string' || data['sofort'] instanceof String)) {
            throw new Error("Expected the field `sofort` to be a primitive type in the JSON string but got " + data['sofort']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['us_bank_account'] && !(typeof data['us_bank_account'] === 'string' || data['us_bank_account'] instanceof String)) {
            throw new Error("Expected the field `us_bank_account` to be a primitive type in the JSON string but got " + data['us_bank_account']);
        }
        // ensure the json data is a string
        if (data['wechat_pay'] && !(typeof data['wechat_pay'] === 'string' || data['wechat_pay'] instanceof String)) {
            throw new Error("Expected the field `wechat_pay` to be a primitive type in the JSON string but got " + data['wechat_pay']);
        }

        return true;
    }


}



/**
 * @member {String} acss_debit
 */
MethodPaymentMethod.prototype['acss_debit'] = undefined;

/**
 * @member {String} affirm
 */
MethodPaymentMethod.prototype['affirm'] = undefined;

/**
 * @member {String} afterpay_clearpay
 */
MethodPaymentMethod.prototype['afterpay_clearpay'] = undefined;

/**
 * @member {String} alipay
 */
MethodPaymentMethod.prototype['alipay'] = undefined;

/**
 * @member {String} au_becs_debit
 */
MethodPaymentMethod.prototype['au_becs_debit'] = undefined;

/**
 * @member {String} bacs_debit
 */
MethodPaymentMethod.prototype['bacs_debit'] = undefined;

/**
 * @member {String} bancontact
 */
MethodPaymentMethod.prototype['bancontact'] = undefined;

/**
 * @member {String} billing_details
 */
MethodPaymentMethod.prototype['billing_details'] = undefined;

/**
 * @member {String} blik
 */
MethodPaymentMethod.prototype['blik'] = undefined;

/**
 * @member {String} boleto
 */
MethodPaymentMethod.prototype['boleto'] = undefined;

/**
 * @member {String} btc_pay
 */
MethodPaymentMethod.prototype['btc_pay'] = undefined;

/**
 * @member {String} card
 */
MethodPaymentMethod.prototype['card'] = undefined;

/**
 * @member {String} card_present
 */
MethodPaymentMethod.prototype['card_present'] = undefined;

/**
 * @member {String} created_at
 */
MethodPaymentMethod.prototype['created_at'] = undefined;

/**
 * @member {String} customer
 */
MethodPaymentMethod.prototype['customer'] = undefined;

/**
 * @member {String} customer_balance
 */
MethodPaymentMethod.prototype['customer_balance'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
MethodPaymentMethod.prototype['deleted_at'] = undefined;

/**
 * @member {String} eps
 */
MethodPaymentMethod.prototype['eps'] = undefined;

/**
 * @member {String} fpx
 */
MethodPaymentMethod.prototype['fpx'] = undefined;

/**
 * @member {String} giropay
 */
MethodPaymentMethod.prototype['giropay'] = undefined;

/**
 * @member {String} grabpay
 */
MethodPaymentMethod.prototype['grabpay'] = undefined;

/**
 * @member {String} id
 */
MethodPaymentMethod.prototype['id'] = undefined;

/**
 * @member {String} ideal
 */
MethodPaymentMethod.prototype['ideal'] = undefined;

/**
 * @member {String} interac_present
 */
MethodPaymentMethod.prototype['interac_present'] = undefined;

/**
 * @member {String} klarna
 */
MethodPaymentMethod.prototype['klarna'] = undefined;

/**
 * @member {String} konbini
 */
MethodPaymentMethod.prototype['konbini'] = undefined;

/**
 * @member {String} link
 */
MethodPaymentMethod.prototype['link'] = undefined;

/**
 * @member {Boolean} livemode
 */
MethodPaymentMethod.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
MethodPaymentMethod.prototype['metadata'] = undefined;

/**
 * @member {String} object
 */
MethodPaymentMethod.prototype['object'] = undefined;

/**
 * @member {String} oxxo
 */
MethodPaymentMethod.prototype['oxxo'] = undefined;

/**
 * @member {String} p24
 */
MethodPaymentMethod.prototype['p24'] = undefined;

/**
 * @member {String} paynow
 */
MethodPaymentMethod.prototype['paynow'] = undefined;

/**
 * @member {String} pix
 */
MethodPaymentMethod.prototype['pix'] = undefined;

/**
 * @member {String} promptpay
 */
MethodPaymentMethod.prototype['promptpay'] = undefined;

/**
 * @member {String} radar_options
 */
MethodPaymentMethod.prototype['radar_options'] = undefined;

/**
 * @member {String} sepa_debit
 */
MethodPaymentMethod.prototype['sepa_debit'] = undefined;

/**
 * @member {String} sofort
 */
MethodPaymentMethod.prototype['sofort'] = undefined;

/**
 * @member {module:model/MethodType} type
 */
MethodPaymentMethod.prototype['type'] = undefined;

/**
 * @member {String} updated_at
 */
MethodPaymentMethod.prototype['updated_at'] = undefined;

/**
 * @member {String} us_bank_account
 */
MethodPaymentMethod.prototype['us_bank_account'] = undefined;

/**
 * @member {String} wechat_pay
 */
MethodPaymentMethod.prototype['wechat_pay'] = undefined;






export default MethodPaymentMethod;
