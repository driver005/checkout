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
import AccountAccount from './AccountAccount';
import BankAccountHolderType from './BankAccountHolderType';
import BankAccountType from './BankAccountType';
import BankStatus from './BankStatus';
import CustomerCustomer from './CustomerCustomer';
import DatabaseDeletedAt from './DatabaseDeletedAt';
import UuidNullUUID from './UuidNullUUID';

/**
 * The BankBankAccount model module.
 * @module model/BankBankAccount
 * @version 2.0
 */
class BankBankAccount {
    /**
     * Constructs a new <code>BankBankAccount</code>.
     * @alias module:model/BankBankAccount
     */
    constructor() { 
        
        BankBankAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BankBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BankBankAccount} obj Optional instance to populate.
     * @return {module:model/BankBankAccount} The populated <code>BankBankAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BankBankAccount();

            if (data.hasOwnProperty('account')) {
                obj['account'] = AccountAccount.constructFromObject(data['account']);
            }
            if (data.hasOwnProperty('account_holder_name')) {
                obj['account_holder_name'] = ApiClient.convertToType(data['account_holder_name'], 'String');
            }
            if (data.hasOwnProperty('account_holder_type')) {
                obj['account_holder_type'] = BankAccountHolderType.constructFromObject(data['account_holder_type']);
            }
            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = UuidNullUUID.constructFromObject(data['account_id']);
            }
            if (data.hasOwnProperty('account_type')) {
                obj['account_type'] = BankAccountType.constructFromObject(data['account_type']);
            }
            if (data.hasOwnProperty('available_payout_methods')) {
                obj['available_payout_methods'] = ApiClient.convertToType(data['available_payout_methods'], ['String']);
            }
            if (data.hasOwnProperty('bank_name')) {
                obj['bank_name'] = ApiClient.convertToType(data['bank_name'], 'String');
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
                obj['customer'] = CustomerCustomer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = UuidNullUUID.constructFromObject(data['customer_id']);
            }
            if (data.hasOwnProperty('default_for_currency')) {
                obj['default_for_currency'] = ApiClient.convertToType(data['default_for_currency'], 'Boolean');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('fingerprint')) {
                obj['fingerprint'] = ApiClient.convertToType(data['fingerprint'], 'String');
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
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('routing_number')) {
                obj['routing_number'] = ApiClient.convertToType(data['routing_number'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BankStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BankBankAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BankBankAccount</code>.
     */
    static validateJSON(data) {
        // validate the optional field `account`
        if (data['account']) { // data not null
          AccountAccount.validateJSON(data['account']);
        }
        // ensure the json data is a string
        if (data['account_holder_name'] && !(typeof data['account_holder_name'] === 'string' || data['account_holder_name'] instanceof String)) {
            throw new Error("Expected the field `account_holder_name` to be a primitive type in the JSON string but got " + data['account_holder_name']);
        }
        // validate the optional field `account_id`
        if (data['account_id']) { // data not null
          UuidNullUUID.validateJSON(data['account_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['available_payout_methods'])) {
            throw new Error("Expected the field `available_payout_methods` to be an array in the JSON data but got " + data['available_payout_methods']);
        }
        // ensure the json data is a string
        if (data['bank_name'] && !(typeof data['bank_name'] === 'string' || data['bank_name'] instanceof String)) {
            throw new Error("Expected the field `bank_name` to be a primitive type in the JSON string but got " + data['bank_name']);
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
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          CustomerCustomer.validateJSON(data['customer']);
        }
        // validate the optional field `customer_id`
        if (data['customer_id']) { // data not null
          UuidNullUUID.validateJSON(data['customer_id']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
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
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['routing_number'] && !(typeof data['routing_number'] === 'string' || data['routing_number'] instanceof String)) {
            throw new Error("Expected the field `routing_number` to be a primitive type in the JSON string but got " + data['routing_number']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {module:model/AccountAccount} account
 */
BankBankAccount.prototype['account'] = undefined;

/**
 * @member {String} account_holder_name
 */
BankBankAccount.prototype['account_holder_name'] = undefined;

/**
 * @member {module:model/BankAccountHolderType} account_holder_type
 */
BankBankAccount.prototype['account_holder_type'] = undefined;

/**
 * @member {module:model/UuidNullUUID} account_id
 */
BankBankAccount.prototype['account_id'] = undefined;

/**
 * @member {module:model/BankAccountType} account_type
 */
BankBankAccount.prototype['account_type'] = undefined;

/**
 * @member {Array.<String>} available_payout_methods
 */
BankBankAccount.prototype['available_payout_methods'] = undefined;

/**
 * @member {String} bank_name
 */
BankBankAccount.prototype['bank_name'] = undefined;

/**
 * @member {String} country
 */
BankBankAccount.prototype['country'] = undefined;

/**
 * @member {String} created_at
 */
BankBankAccount.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
BankBankAccount.prototype['currency'] = undefined;

/**
 * @member {module:model/CustomerCustomer} customer
 */
BankBankAccount.prototype['customer'] = undefined;

/**
 * @member {module:model/UuidNullUUID} customer_id
 */
BankBankAccount.prototype['customer_id'] = undefined;

/**
 * @member {Boolean} default_for_currency
 */
BankBankAccount.prototype['default_for_currency'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
BankBankAccount.prototype['deleted_at'] = undefined;

/**
 * @member {String} fingerprint
 */
BankBankAccount.prototype['fingerprint'] = undefined;

/**
 * @member {String} id
 */
BankBankAccount.prototype['id'] = undefined;

/**
 * @member {String} last4
 */
BankBankAccount.prototype['last4'] = undefined;

/**
 * @member {Boolean} livemode
 */
BankBankAccount.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
BankBankAccount.prototype['metadata'] = undefined;

/**
 * @member {String} object
 */
BankBankAccount.prototype['object'] = undefined;

/**
 * @member {String} routing_number
 */
BankBankAccount.prototype['routing_number'] = undefined;

/**
 * @member {module:model/BankStatus} status
 */
BankBankAccount.prototype['status'] = undefined;

/**
 * @member {String} updated_at
 */
BankBankAccount.prototype['updated_at'] = undefined;






export default BankBankAccount;
