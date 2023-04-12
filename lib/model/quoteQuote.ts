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
import { DatabaseDeletedAt } from './databaseDeletedAt';

export class QuoteQuote {
    /**
    * Total before any discounts or taxes are applied.
    */
    'amountSubtotal'?: number;
    /**
    * Total after discounts and taxes are applied.
    */
    'amountTotal'?: number;
    'automaticTax'?: boolean;
    /**
    * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions and mark the subscription as `active`. Defaults to `charge_automatically`.
    */
    'collectionMethod'?: string;
    'computed'?: string;
    'createdAt'?: string;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency'?: string;
    'customer'?: string;
    'defaultTaxRates'?: Array<string>;
    'deletedAt'?: DatabaseDeletedAt;
    /**
    * A description that will be displayed on the quote PDF.
    */
    'description'?: string;
    'discounts'?: Array<string>;
    /**
    * The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch.
    */
    'expiresAt'?: number;
    /**
    * A footer that will be displayed on the quote PDF.
    */
    'footer'?: string;
    /**
    * A header that will be displayed on the quote PDF.
    */
    'header'?: string;
    'id'?: string;
    'invoice'?: string;
    /**
    * Unique identifier for the object.
    */
    'invoiceSettings'?: string;
    'lineItems'?: Array<string>;
    'livemode'?: boolean;
    'metadata'?: object;
    /**
    * A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize).
    */
    'number'?: string;
    'object'?: string;
    /**
    * The status of the quote.
    */
    'status'?: string;
    'statusTransitions'?: string;
    'subscription'?: string;
    'subscriptionData'?: string;
    'subscriptionSchedule'?: string;
    'totalDetails'?: string;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountSubtotal",
            "baseName": "amount_subtotal",
            "type": "number"
        },
        {
            "name": "amountTotal",
            "baseName": "amount_total",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "boolean"
        },
        {
            "name": "collectionMethod",
            "baseName": "collection_method",
            "type": "string"
        },
        {
            "name": "computed",
            "baseName": "computed",
            "type": "string"
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
            "name": "customer",
            "baseName": "customer",
            "type": "string"
        },
        {
            "name": "defaultTaxRates",
            "baseName": "default_tax_rates",
            "type": "Array<string>"
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
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<string>"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "footer",
            "baseName": "footer",
            "type": "string"
        },
        {
            "name": "header",
            "baseName": "header",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string"
        },
        {
            "name": "invoiceSettings",
            "baseName": "invoice_settings",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "line_items",
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
            "name": "status",
            "baseName": "status",
            "type": "string"
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
            "name": "subscriptionData",
            "baseName": "subscription_data",
            "type": "string"
        },
        {
            "name": "subscriptionSchedule",
            "baseName": "subscription_schedule",
            "type": "string"
        },
        {
            "name": "totalDetails",
            "baseName": "total_details",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return QuoteQuote.attributeTypeMap;
    }
}
