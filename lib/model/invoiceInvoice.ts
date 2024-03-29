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
 */

import { RequestFile } from './models';
import { CustomerTaxExempt } from './customerTaxExempt';
import { DatabaseDeletedAt } from './databaseDeletedAt';
import { InvoiceBillingReason } from './invoiceBillingReason';
import { InvoiceCollectionMethod } from './invoiceCollectionMethod';
import { InvoiceStatus } from './invoiceStatus';

export class InvoiceInvoice {
    'accountCountry'?: string;
    'accountName'?: string;
    'accountTaxIds'?: string;
    'amountDue'?: number;
    'amountPaid'?: number;
    'amountRemaining'?: number;
    'attemptCount'?: number;
    'attempted'?: boolean;
    'autoAdvance'?: boolean;
    'automaticTax'?: string;
    'billingReason'?: InvoiceBillingReason;
    'charge'?: string;
    'collectionMethod'?: InvoiceCollectionMethod;
    'createdAt'?: string;
    'currency'?: string;
    'customFields'?: Array<string>;
    'customer'?: string;
    'customerAddress'?: string;
    'customerEmail'?: string;
    'customerName'?: string;
    'customerPhone'?: string;
    'customerShipping'?: string;
    'customerTaxExempt'?: CustomerTaxExempt;
    'customerTaxIds'?: Array<string>;
    'defaultPaymentMethod'?: string;
    'defaultTaxRates'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'description'?: string;
    'discountable'?: boolean;
    'discounts'?: Array<string>;
    'dueDate'?: string;
    'endingBalance'?: number;
    'footer'?: string;
    'fromInvoice'?: string;
    'hostedInvoiceUrl'?: string;
    'id'?: string;
    'invoicePdf'?: string;
    'lastFinalizationError'?: string;
    'latestRevision'?: string;
    'lines'?: Array<string>;
    'livemode'?: boolean;
    'metadata'?: object;
    'nextPaymentAttempt'?: number;
    'number'?: string;
    'object'?: string;
    'paid'?: boolean;
    'paidOutOfBand'?: boolean;
    'paymentIntent'?: string;
    'paymentSettings'?: string;
    'periodEnd'?: string;
    'periodStart'?: string;
    'postPaymentCreditNotesAmount'?: number;
    'prePaymentCreditNotesAmount'?: number;
    'price'?: string;
    'quantity'?: number;
    'receiptNumber'?: string;
    'renderingOptions'?: string;
    'startingBalance'?: number;
    'statementDescriptor'?: string;
    'status'?: InvoiceStatus;
    'statusTransitions'?: string;
    'subscription'?: string;
    'subscriptionProrationDate'?: number;
    'subtotal'?: number;
    'subtotalExcludingTax'?: number;
    'tax'?: number;
    'thresholdReason'?: string;
    'total'?: number;
    'totalExcludingTax'?: number;
    'totalTaxAmounts'?: Array<string>;
    'updatedAt'?: string;
    'webhooksDeliveredAt'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCountry",
            "baseName": "account_country",
            "type": "string"
        },
        {
            "name": "accountName",
            "baseName": "account_name",
            "type": "string"
        },
        {
            "name": "accountTaxIds",
            "baseName": "account_tax_ids",
            "type": "string"
        },
        {
            "name": "amountDue",
            "baseName": "amount_due",
            "type": "number"
        },
        {
            "name": "amountPaid",
            "baseName": "amount_paid",
            "type": "number"
        },
        {
            "name": "amountRemaining",
            "baseName": "amount_remaining",
            "type": "number"
        },
        {
            "name": "attemptCount",
            "baseName": "attempt_count",
            "type": "number"
        },
        {
            "name": "attempted",
            "baseName": "attempted",
            "type": "boolean"
        },
        {
            "name": "autoAdvance",
            "baseName": "auto_advance",
            "type": "boolean"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "string"
        },
        {
            "name": "billingReason",
            "baseName": "billing_reason",
            "type": "InvoiceBillingReason"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "string"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "InvoiceCollectionMethod"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "customFields",
            "baseName": "custom_fields",
            "type": "Array<string>"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "customerAddress",
            "baseName": "customer_address",
            "type": "string"
        },
        {
            "name": "customerEmail",
            "baseName": "customer_email",
            "type": "string"
        },
        {
            "name": "customerName",
            "baseName": "customer_name",
            "type": "string"
        },
        {
            "name": "customerPhone",
            "baseName": "customer_phone",
            "type": "string"
        },
        {
            "name": "customerShipping",
            "baseName": "customer_shipping",
            "type": "string"
        },
        {
            "name": "customerTaxExempt",
            "baseName": "customer_tax_exempt",
            "type": "CustomerTaxExempt"
        },
        {
            "name": "customerTaxIds",
            "baseName": "customer_tax_ids",
            "type": "Array<string>"
        },
        {
            "name": "defaultPaymentMethod",
            "baseName": "default_payment_method",
            "type": "string"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "DatabaseDeletedAt"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "discountable",
            "baseName": "discountable",
            "type": "boolean"
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<string>"
        },
        {
            "name": "dueDate",
            "baseName": "due_date",
            "type": "string"
        },
        {
            "name": "endingBalance",
            "baseName": "ending_balance",
            "type": "number"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "fromInvoice",
            "baseName": "from_invoice",
            "type": "string"
        },
        {
            "name": "hostedInvoiceUrl",
            "baseName": "hosted_invoice_url",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoicePdf",
            "baseName": "invoice_pdf",
            "type": "string"
        },
        {
            "name": "lastFinalizationError",
            "baseName": "last_finalization_error",
            "type": "string"
        },
        {
            "name": "latestRevision",
            "baseName": "latest_revision",
            "type": "string"
        },
        {
            "name": "lines",
            "baseName": "lines",
            "type": "Array<string>"
        },
        {
            "name": "livemode",
            "baseName": "livemode",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "object"
        },
        {
            "name": "nextPaymentAttempt",
            "baseName": "next_payment_attempt",
            "type": "number"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "paid",
            "baseName": "paid",
            "type": "boolean"
        },
        {
            "name": "paidOutOfBand",
            "baseName": "paid_out_of_band",
            "type": "boolean"
        },
        {
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "string"
        },
        {
            "name": "paymentSettings",
            "baseName": "payment_settings",
            "type": "string"
        },
        {
            "name": "periodEnd",
            "baseName": "period_end",
            "type": "string"
        },
        {
            "name": "periodStart",
            "baseName": "period_start",
            "type": "string"
        },
        {
            "name": "postPaymentCreditNotesAmount",
            "baseName": "post_payment_credit_notes_amount",
            "type": "number"
        },
        {
            "name": "prePaymentCreditNotesAmount",
            "baseName": "pre_payment_credit_notes_amount",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "renderingOptions",
            "baseName": "rendering_options",
            "type": "string"
        },
        {
            "name": "startingBalance",
            "baseName": "starting_balance",
            "type": "number"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatus"
        },
        {
            "name": "statusTransitions",
            "baseName": "status_transitions",
            "type": "string"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "subscriptionProrationDate",
            "baseName": "subscription_proration_date",
            "type": "number"
        },
        {
            "name": "subtotal",
            "baseName": "subtotal",
            "type": "number"
        },
        {
            "name": "subtotalExcludingTax",
            "baseName": "subtotal_excluding_tax",
            "type": "number"
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number"
        },
        {
            "name": "thresholdReason",
            "baseName": "threshold_reason",
            "type": "string"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "totalExcludingTax",
            "baseName": "total_excluding_tax",
            "type": "number"
        },
        {
            "name": "totalTaxAmounts",
            "baseName": "total_tax_amounts",
            "type": "Array<string>"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "webhooksDeliveredAt",
            "baseName": "webhooks_delivered_at",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceInvoice.attributeTypeMap;
    }
}

export namespace InvoiceInvoice {
}
