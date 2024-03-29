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
import CustomerTaxExempt from './CustomerTaxExempt';
import DatabaseDeletedAt from './DatabaseDeletedAt';
import InvoiceBillingReason from './InvoiceBillingReason';
import InvoiceCollectionMethod from './InvoiceCollectionMethod';
import InvoiceStatus from './InvoiceStatus';

/**
 * The InvoiceInvoice model module.
 * @module model/InvoiceInvoice
 * @version 2.0
 */
class InvoiceInvoice {
    /**
     * Constructs a new <code>InvoiceInvoice</code>.
     * @alias module:model/InvoiceInvoice
     */
    constructor() { 
        
        InvoiceInvoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InvoiceInvoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InvoiceInvoice} obj Optional instance to populate.
     * @return {module:model/InvoiceInvoice} The populated <code>InvoiceInvoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InvoiceInvoice();

            if (data.hasOwnProperty('account_country')) {
                obj['account_country'] = ApiClient.convertToType(data['account_country'], 'String');
            }
            if (data.hasOwnProperty('account_name')) {
                obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
            }
            if (data.hasOwnProperty('account_tax_ids')) {
                obj['account_tax_ids'] = ApiClient.convertToType(data['account_tax_ids'], 'String');
            }
            if (data.hasOwnProperty('amount_due')) {
                obj['amount_due'] = ApiClient.convertToType(data['amount_due'], 'Number');
            }
            if (data.hasOwnProperty('amount_paid')) {
                obj['amount_paid'] = ApiClient.convertToType(data['amount_paid'], 'Number');
            }
            if (data.hasOwnProperty('amount_remaining')) {
                obj['amount_remaining'] = ApiClient.convertToType(data['amount_remaining'], 'Number');
            }
            if (data.hasOwnProperty('attempt_count')) {
                obj['attempt_count'] = ApiClient.convertToType(data['attempt_count'], 'Number');
            }
            if (data.hasOwnProperty('attempted')) {
                obj['attempted'] = ApiClient.convertToType(data['attempted'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_advance')) {
                obj['auto_advance'] = ApiClient.convertToType(data['auto_advance'], 'Boolean');
            }
            if (data.hasOwnProperty('automatic_tax')) {
                obj['automatic_tax'] = ApiClient.convertToType(data['automatic_tax'], 'String');
            }
            if (data.hasOwnProperty('billing_reason')) {
                obj['billing_reason'] = InvoiceBillingReason.constructFromObject(data['billing_reason']);
            }
            if (data.hasOwnProperty('charge')) {
                obj['charge'] = ApiClient.convertToType(data['charge'], 'String');
            }
            if (data.hasOwnProperty('collection_method')) {
                obj['collection_method'] = InvoiceCollectionMethod.constructFromObject(data['collection_method']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], ['String']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
            if (data.hasOwnProperty('customer_address')) {
                obj['customer_address'] = ApiClient.convertToType(data['customer_address'], 'String');
            }
            if (data.hasOwnProperty('customer_email')) {
                obj['customer_email'] = ApiClient.convertToType(data['customer_email'], 'String');
            }
            if (data.hasOwnProperty('customer_name')) {
                obj['customer_name'] = ApiClient.convertToType(data['customer_name'], 'String');
            }
            if (data.hasOwnProperty('customer_phone')) {
                obj['customer_phone'] = ApiClient.convertToType(data['customer_phone'], 'String');
            }
            if (data.hasOwnProperty('customer_shipping')) {
                obj['customer_shipping'] = ApiClient.convertToType(data['customer_shipping'], 'String');
            }
            if (data.hasOwnProperty('customer_tax_exempt')) {
                obj['customer_tax_exempt'] = CustomerTaxExempt.constructFromObject(data['customer_tax_exempt']);
            }
            if (data.hasOwnProperty('customer_tax_ids')) {
                obj['customer_tax_ids'] = ApiClient.convertToType(data['customer_tax_ids'], ['String']);
            }
            if (data.hasOwnProperty('default_payment_method')) {
                obj['default_payment_method'] = ApiClient.convertToType(data['default_payment_method'], 'String');
            }
            if (data.hasOwnProperty('default_tax_rates')) {
                obj['default_tax_rates'] = ApiClient.convertToType(data['default_tax_rates'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discountable')) {
                obj['discountable'] = ApiClient.convertToType(data['discountable'], 'Boolean');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], ['String']);
            }
            if (data.hasOwnProperty('due_date')) {
                obj['due_date'] = ApiClient.convertToType(data['due_date'], 'String');
            }
            if (data.hasOwnProperty('ending_balance')) {
                obj['ending_balance'] = ApiClient.convertToType(data['ending_balance'], 'Number');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('from_invoice')) {
                obj['from_invoice'] = ApiClient.convertToType(data['from_invoice'], 'String');
            }
            if (data.hasOwnProperty('hosted_invoice_url')) {
                obj['hosted_invoice_url'] = ApiClient.convertToType(data['hosted_invoice_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice_pdf')) {
                obj['invoice_pdf'] = ApiClient.convertToType(data['invoice_pdf'], 'String');
            }
            if (data.hasOwnProperty('last_finalization_error')) {
                obj['last_finalization_error'] = ApiClient.convertToType(data['last_finalization_error'], 'String');
            }
            if (data.hasOwnProperty('latest_revision')) {
                obj['latest_revision'] = ApiClient.convertToType(data['latest_revision'], 'String');
            }
            if (data.hasOwnProperty('lines')) {
                obj['lines'] = ApiClient.convertToType(data['lines'], ['String']);
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('next_payment_attempt')) {
                obj['next_payment_attempt'] = ApiClient.convertToType(data['next_payment_attempt'], 'Number');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('paid')) {
                obj['paid'] = ApiClient.convertToType(data['paid'], 'Boolean');
            }
            if (data.hasOwnProperty('paid_out_of_band')) {
                obj['paid_out_of_band'] = ApiClient.convertToType(data['paid_out_of_band'], 'Boolean');
            }
            if (data.hasOwnProperty('payment_intent')) {
                obj['payment_intent'] = ApiClient.convertToType(data['payment_intent'], 'String');
            }
            if (data.hasOwnProperty('payment_settings')) {
                obj['payment_settings'] = ApiClient.convertToType(data['payment_settings'], 'String');
            }
            if (data.hasOwnProperty('period_end')) {
                obj['period_end'] = ApiClient.convertToType(data['period_end'], 'String');
            }
            if (data.hasOwnProperty('period_start')) {
                obj['period_start'] = ApiClient.convertToType(data['period_start'], 'String');
            }
            if (data.hasOwnProperty('post_payment_credit_notes_amount')) {
                obj['post_payment_credit_notes_amount'] = ApiClient.convertToType(data['post_payment_credit_notes_amount'], 'Number');
            }
            if (data.hasOwnProperty('pre_payment_credit_notes_amount')) {
                obj['pre_payment_credit_notes_amount'] = ApiClient.convertToType(data['pre_payment_credit_notes_amount'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('receipt_number')) {
                obj['receipt_number'] = ApiClient.convertToType(data['receipt_number'], 'String');
            }
            if (data.hasOwnProperty('rendering_options')) {
                obj['rendering_options'] = ApiClient.convertToType(data['rendering_options'], 'String');
            }
            if (data.hasOwnProperty('starting_balance')) {
                obj['starting_balance'] = ApiClient.convertToType(data['starting_balance'], 'Number');
            }
            if (data.hasOwnProperty('statement_descriptor')) {
                obj['statement_descriptor'] = ApiClient.convertToType(data['statement_descriptor'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvoiceStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('status_transitions')) {
                obj['status_transitions'] = ApiClient.convertToType(data['status_transitions'], 'String');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'String');
            }
            if (data.hasOwnProperty('subscription_proration_date')) {
                obj['subscription_proration_date'] = ApiClient.convertToType(data['subscription_proration_date'], 'Number');
            }
            if (data.hasOwnProperty('subtotal')) {
                obj['subtotal'] = ApiClient.convertToType(data['subtotal'], 'Number');
            }
            if (data.hasOwnProperty('subtotal_excluding_tax')) {
                obj['subtotal_excluding_tax'] = ApiClient.convertToType(data['subtotal_excluding_tax'], 'Number');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ApiClient.convertToType(data['tax'], 'Number');
            }
            if (data.hasOwnProperty('threshold_reason')) {
                obj['threshold_reason'] = ApiClient.convertToType(data['threshold_reason'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('total_excluding_tax')) {
                obj['total_excluding_tax'] = ApiClient.convertToType(data['total_excluding_tax'], 'Number');
            }
            if (data.hasOwnProperty('total_tax_amounts')) {
                obj['total_tax_amounts'] = ApiClient.convertToType(data['total_tax_amounts'], ['String']);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('webhooks_delivered_at')) {
                obj['webhooks_delivered_at'] = ApiClient.convertToType(data['webhooks_delivered_at'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InvoiceInvoice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InvoiceInvoice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account_country'] && !(typeof data['account_country'] === 'string' || data['account_country'] instanceof String)) {
            throw new Error("Expected the field `account_country` to be a primitive type in the JSON string but got " + data['account_country']);
        }
        // ensure the json data is a string
        if (data['account_name'] && !(typeof data['account_name'] === 'string' || data['account_name'] instanceof String)) {
            throw new Error("Expected the field `account_name` to be a primitive type in the JSON string but got " + data['account_name']);
        }
        // ensure the json data is a string
        if (data['account_tax_ids'] && !(typeof data['account_tax_ids'] === 'string' || data['account_tax_ids'] instanceof String)) {
            throw new Error("Expected the field `account_tax_ids` to be a primitive type in the JSON string but got " + data['account_tax_ids']);
        }
        // ensure the json data is a string
        if (data['automatic_tax'] && !(typeof data['automatic_tax'] === 'string' || data['automatic_tax'] instanceof String)) {
            throw new Error("Expected the field `automatic_tax` to be a primitive type in the JSON string but got " + data['automatic_tax']);
        }
        // ensure the json data is a string
        if (data['charge'] && !(typeof data['charge'] === 'string' || data['charge'] instanceof String)) {
            throw new Error("Expected the field `charge` to be a primitive type in the JSON string but got " + data['charge']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['custom_fields'])) {
            throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
        }
        // ensure the json data is a string
        if (data['customer'] && !(typeof data['customer'] === 'string' || data['customer'] instanceof String)) {
            throw new Error("Expected the field `customer` to be a primitive type in the JSON string but got " + data['customer']);
        }
        // ensure the json data is a string
        if (data['customer_address'] && !(typeof data['customer_address'] === 'string' || data['customer_address'] instanceof String)) {
            throw new Error("Expected the field `customer_address` to be a primitive type in the JSON string but got " + data['customer_address']);
        }
        // ensure the json data is a string
        if (data['customer_email'] && !(typeof data['customer_email'] === 'string' || data['customer_email'] instanceof String)) {
            throw new Error("Expected the field `customer_email` to be a primitive type in the JSON string but got " + data['customer_email']);
        }
        // ensure the json data is a string
        if (data['customer_name'] && !(typeof data['customer_name'] === 'string' || data['customer_name'] instanceof String)) {
            throw new Error("Expected the field `customer_name` to be a primitive type in the JSON string but got " + data['customer_name']);
        }
        // ensure the json data is a string
        if (data['customer_phone'] && !(typeof data['customer_phone'] === 'string' || data['customer_phone'] instanceof String)) {
            throw new Error("Expected the field `customer_phone` to be a primitive type in the JSON string but got " + data['customer_phone']);
        }
        // ensure the json data is a string
        if (data['customer_shipping'] && !(typeof data['customer_shipping'] === 'string' || data['customer_shipping'] instanceof String)) {
            throw new Error("Expected the field `customer_shipping` to be a primitive type in the JSON string but got " + data['customer_shipping']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['customer_tax_ids'])) {
            throw new Error("Expected the field `customer_tax_ids` to be an array in the JSON data but got " + data['customer_tax_ids']);
        }
        // ensure the json data is a string
        if (data['default_payment_method'] && !(typeof data['default_payment_method'] === 'string' || data['default_payment_method'] instanceof String)) {
            throw new Error("Expected the field `default_payment_method` to be a primitive type in the JSON string but got " + data['default_payment_method']);
        }
        // ensure the json data is a string
        if (data['default_tax_rates'] && !(typeof data['default_tax_rates'] === 'string' || data['default_tax_rates'] instanceof String)) {
            throw new Error("Expected the field `default_tax_rates` to be a primitive type in the JSON string but got " + data['default_tax_rates']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['discounts'])) {
            throw new Error("Expected the field `discounts` to be an array in the JSON data but got " + data['discounts']);
        }
        // ensure the json data is a string
        if (data['due_date'] && !(typeof data['due_date'] === 'string' || data['due_date'] instanceof String)) {
            throw new Error("Expected the field `due_date` to be a primitive type in the JSON string but got " + data['due_date']);
        }
        // ensure the json data is a string
        if (data['footer'] && !(typeof data['footer'] === 'string' || data['footer'] instanceof String)) {
            throw new Error("Expected the field `footer` to be a primitive type in the JSON string but got " + data['footer']);
        }
        // ensure the json data is a string
        if (data['from_invoice'] && !(typeof data['from_invoice'] === 'string' || data['from_invoice'] instanceof String)) {
            throw new Error("Expected the field `from_invoice` to be a primitive type in the JSON string but got " + data['from_invoice']);
        }
        // ensure the json data is a string
        if (data['hosted_invoice_url'] && !(typeof data['hosted_invoice_url'] === 'string' || data['hosted_invoice_url'] instanceof String)) {
            throw new Error("Expected the field `hosted_invoice_url` to be a primitive type in the JSON string but got " + data['hosted_invoice_url']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['invoice_pdf'] && !(typeof data['invoice_pdf'] === 'string' || data['invoice_pdf'] instanceof String)) {
            throw new Error("Expected the field `invoice_pdf` to be a primitive type in the JSON string but got " + data['invoice_pdf']);
        }
        // ensure the json data is a string
        if (data['last_finalization_error'] && !(typeof data['last_finalization_error'] === 'string' || data['last_finalization_error'] instanceof String)) {
            throw new Error("Expected the field `last_finalization_error` to be a primitive type in the JSON string but got " + data['last_finalization_error']);
        }
        // ensure the json data is a string
        if (data['latest_revision'] && !(typeof data['latest_revision'] === 'string' || data['latest_revision'] instanceof String)) {
            throw new Error("Expected the field `latest_revision` to be a primitive type in the JSON string but got " + data['latest_revision']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['lines'])) {
            throw new Error("Expected the field `lines` to be an array in the JSON data but got " + data['lines']);
        }
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
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
        if (data['payment_settings'] && !(typeof data['payment_settings'] === 'string' || data['payment_settings'] instanceof String)) {
            throw new Error("Expected the field `payment_settings` to be a primitive type in the JSON string but got " + data['payment_settings']);
        }
        // ensure the json data is a string
        if (data['period_end'] && !(typeof data['period_end'] === 'string' || data['period_end'] instanceof String)) {
            throw new Error("Expected the field `period_end` to be a primitive type in the JSON string but got " + data['period_end']);
        }
        // ensure the json data is a string
        if (data['period_start'] && !(typeof data['period_start'] === 'string' || data['period_start'] instanceof String)) {
            throw new Error("Expected the field `period_start` to be a primitive type in the JSON string but got " + data['period_start']);
        }
        // ensure the json data is a string
        if (data['price'] && !(typeof data['price'] === 'string' || data['price'] instanceof String)) {
            throw new Error("Expected the field `price` to be a primitive type in the JSON string but got " + data['price']);
        }
        // ensure the json data is a string
        if (data['receipt_number'] && !(typeof data['receipt_number'] === 'string' || data['receipt_number'] instanceof String)) {
            throw new Error("Expected the field `receipt_number` to be a primitive type in the JSON string but got " + data['receipt_number']);
        }
        // ensure the json data is a string
        if (data['rendering_options'] && !(typeof data['rendering_options'] === 'string' || data['rendering_options'] instanceof String)) {
            throw new Error("Expected the field `rendering_options` to be a primitive type in the JSON string but got " + data['rendering_options']);
        }
        // ensure the json data is a string
        if (data['statement_descriptor'] && !(typeof data['statement_descriptor'] === 'string' || data['statement_descriptor'] instanceof String)) {
            throw new Error("Expected the field `statement_descriptor` to be a primitive type in the JSON string but got " + data['statement_descriptor']);
        }
        // ensure the json data is a string
        if (data['status_transitions'] && !(typeof data['status_transitions'] === 'string' || data['status_transitions'] instanceof String)) {
            throw new Error("Expected the field `status_transitions` to be a primitive type in the JSON string but got " + data['status_transitions']);
        }
        // ensure the json data is a string
        if (data['subscription'] && !(typeof data['subscription'] === 'string' || data['subscription'] instanceof String)) {
            throw new Error("Expected the field `subscription` to be a primitive type in the JSON string but got " + data['subscription']);
        }
        // ensure the json data is a string
        if (data['threshold_reason'] && !(typeof data['threshold_reason'] === 'string' || data['threshold_reason'] instanceof String)) {
            throw new Error("Expected the field `threshold_reason` to be a primitive type in the JSON string but got " + data['threshold_reason']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['total_tax_amounts'])) {
            throw new Error("Expected the field `total_tax_amounts` to be an array in the JSON data but got " + data['total_tax_amounts']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }

        return true;
    }


}



/**
 * @member {String} account_country
 */
InvoiceInvoice.prototype['account_country'] = undefined;

/**
 * @member {String} account_name
 */
InvoiceInvoice.prototype['account_name'] = undefined;

/**
 * @member {String} account_tax_ids
 */
InvoiceInvoice.prototype['account_tax_ids'] = undefined;

/**
 * @member {Number} amount_due
 */
InvoiceInvoice.prototype['amount_due'] = undefined;

/**
 * @member {Number} amount_paid
 */
InvoiceInvoice.prototype['amount_paid'] = undefined;

/**
 * @member {Number} amount_remaining
 */
InvoiceInvoice.prototype['amount_remaining'] = undefined;

/**
 * @member {Number} attempt_count
 */
InvoiceInvoice.prototype['attempt_count'] = undefined;

/**
 * @member {Boolean} attempted
 */
InvoiceInvoice.prototype['attempted'] = undefined;

/**
 * @member {Boolean} auto_advance
 */
InvoiceInvoice.prototype['auto_advance'] = undefined;

/**
 * @member {String} automatic_tax
 */
InvoiceInvoice.prototype['automatic_tax'] = undefined;

/**
 * @member {module:model/InvoiceBillingReason} billing_reason
 */
InvoiceInvoice.prototype['billing_reason'] = undefined;

/**
 * @member {String} charge
 */
InvoiceInvoice.prototype['charge'] = undefined;

/**
 * @member {module:model/InvoiceCollectionMethod} collection_method
 */
InvoiceInvoice.prototype['collection_method'] = undefined;

/**
 * @member {String} created_at
 */
InvoiceInvoice.prototype['created_at'] = undefined;

/**
 * @member {String} currency
 */
InvoiceInvoice.prototype['currency'] = undefined;

/**
 * @member {Array.<String>} custom_fields
 */
InvoiceInvoice.prototype['custom_fields'] = undefined;

/**
 * @member {String} customer
 */
InvoiceInvoice.prototype['customer'] = undefined;

/**
 * @member {String} customer_address
 */
InvoiceInvoice.prototype['customer_address'] = undefined;

/**
 * @member {String} customer_email
 */
InvoiceInvoice.prototype['customer_email'] = undefined;

/**
 * @member {String} customer_name
 */
InvoiceInvoice.prototype['customer_name'] = undefined;

/**
 * @member {String} customer_phone
 */
InvoiceInvoice.prototype['customer_phone'] = undefined;

/**
 * @member {String} customer_shipping
 */
InvoiceInvoice.prototype['customer_shipping'] = undefined;

/**
 * @member {module:model/CustomerTaxExempt} customer_tax_exempt
 */
InvoiceInvoice.prototype['customer_tax_exempt'] = undefined;

/**
 * @member {Array.<String>} customer_tax_ids
 */
InvoiceInvoice.prototype['customer_tax_ids'] = undefined;

/**
 * @member {String} default_payment_method
 */
InvoiceInvoice.prototype['default_payment_method'] = undefined;

/**
 * @member {String} default_tax_rates
 */
InvoiceInvoice.prototype['default_tax_rates'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
InvoiceInvoice.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
InvoiceInvoice.prototype['description'] = undefined;

/**
 * @member {Boolean} discountable
 */
InvoiceInvoice.prototype['discountable'] = undefined;

/**
 * @member {Array.<String>} discounts
 */
InvoiceInvoice.prototype['discounts'] = undefined;

/**
 * @member {String} due_date
 */
InvoiceInvoice.prototype['due_date'] = undefined;

/**
 * @member {Number} ending_balance
 */
InvoiceInvoice.prototype['ending_balance'] = undefined;

/**
 * @member {String} footer
 */
InvoiceInvoice.prototype['footer'] = undefined;

/**
 * @member {String} from_invoice
 */
InvoiceInvoice.prototype['from_invoice'] = undefined;

/**
 * @member {String} hosted_invoice_url
 */
InvoiceInvoice.prototype['hosted_invoice_url'] = undefined;

/**
 * @member {String} id
 */
InvoiceInvoice.prototype['id'] = undefined;

/**
 * @member {String} invoice_pdf
 */
InvoiceInvoice.prototype['invoice_pdf'] = undefined;

/**
 * @member {String} last_finalization_error
 */
InvoiceInvoice.prototype['last_finalization_error'] = undefined;

/**
 * @member {String} latest_revision
 */
InvoiceInvoice.prototype['latest_revision'] = undefined;

/**
 * @member {Array.<String>} lines
 */
InvoiceInvoice.prototype['lines'] = undefined;

/**
 * @member {Boolean} livemode
 */
InvoiceInvoice.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
InvoiceInvoice.prototype['metadata'] = undefined;

/**
 * @member {Number} next_payment_attempt
 */
InvoiceInvoice.prototype['next_payment_attempt'] = undefined;

/**
 * @member {String} number
 */
InvoiceInvoice.prototype['number'] = undefined;

/**
 * @member {String} object
 */
InvoiceInvoice.prototype['object'] = undefined;

/**
 * @member {Boolean} paid
 */
InvoiceInvoice.prototype['paid'] = undefined;

/**
 * @member {Boolean} paid_out_of_band
 */
InvoiceInvoice.prototype['paid_out_of_band'] = undefined;

/**
 * @member {String} payment_intent
 */
InvoiceInvoice.prototype['payment_intent'] = undefined;

/**
 * @member {String} payment_settings
 */
InvoiceInvoice.prototype['payment_settings'] = undefined;

/**
 * @member {String} period_end
 */
InvoiceInvoice.prototype['period_end'] = undefined;

/**
 * @member {String} period_start
 */
InvoiceInvoice.prototype['period_start'] = undefined;

/**
 * @member {Number} post_payment_credit_notes_amount
 */
InvoiceInvoice.prototype['post_payment_credit_notes_amount'] = undefined;

/**
 * @member {Number} pre_payment_credit_notes_amount
 */
InvoiceInvoice.prototype['pre_payment_credit_notes_amount'] = undefined;

/**
 * @member {String} price
 */
InvoiceInvoice.prototype['price'] = undefined;

/**
 * @member {Number} quantity
 */
InvoiceInvoice.prototype['quantity'] = undefined;

/**
 * @member {String} receipt_number
 */
InvoiceInvoice.prototype['receipt_number'] = undefined;

/**
 * @member {String} rendering_options
 */
InvoiceInvoice.prototype['rendering_options'] = undefined;

/**
 * @member {Number} starting_balance
 */
InvoiceInvoice.prototype['starting_balance'] = undefined;

/**
 * @member {String} statement_descriptor
 */
InvoiceInvoice.prototype['statement_descriptor'] = undefined;

/**
 * @member {module:model/InvoiceStatus} status
 */
InvoiceInvoice.prototype['status'] = undefined;

/**
 * @member {String} status_transitions
 */
InvoiceInvoice.prototype['status_transitions'] = undefined;

/**
 * @member {String} subscription
 */
InvoiceInvoice.prototype['subscription'] = undefined;

/**
 * @member {Number} subscription_proration_date
 */
InvoiceInvoice.prototype['subscription_proration_date'] = undefined;

/**
 * @member {Number} subtotal
 */
InvoiceInvoice.prototype['subtotal'] = undefined;

/**
 * @member {Number} subtotal_excluding_tax
 */
InvoiceInvoice.prototype['subtotal_excluding_tax'] = undefined;

/**
 * @member {Number} tax
 */
InvoiceInvoice.prototype['tax'] = undefined;

/**
 * @member {String} threshold_reason
 */
InvoiceInvoice.prototype['threshold_reason'] = undefined;

/**
 * @member {Number} total
 */
InvoiceInvoice.prototype['total'] = undefined;

/**
 * @member {Number} total_excluding_tax
 */
InvoiceInvoice.prototype['total_excluding_tax'] = undefined;

/**
 * @member {Array.<String>} total_tax_amounts
 */
InvoiceInvoice.prototype['total_tax_amounts'] = undefined;

/**
 * @member {String} updated_at
 */
InvoiceInvoice.prototype['updated_at'] = undefined;

/**
 * @member {Number} webhooks_delivered_at
 */
InvoiceInvoice.prototype['webhooks_delivered_at'] = undefined;






export default InvoiceInvoice;

