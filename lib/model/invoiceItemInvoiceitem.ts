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

export class InvoiceItemInvoiceitem {
    /**
    * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
    */
    'amount'?: number;
    'createdAt'?: string;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency'?: string;
    'customer'?: string;
    /**
    * Time at which the object was created. Measured in seconds since the Unix epoch.
    */
    'date'?: number;
    'deletedAt'?: DatabaseDeletedAt;
    /**
    * An arbitrary string attached to the object. Often useful for displaying to users.
    */
    'description'?: string;
    /**
    * If true, discounts will apply to this invoice item. Always false for prorations.
    */
    'discountable'?: boolean;
    /**
    * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
    */
    'discounts'?: Array<string>;
    'id'?: string;
    'invoice'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    /**
    * Unique identifier for the object.
    */
    'periodEnd'?: number;
    'periodStart'?: number;
    'price'?: string;
    /**
    * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
    */
    'proration'?: boolean;
    /**
    * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
    */
    'quantity'?: number;
    'subscription'?: string;
    'subscriptionItem'?: string;
    /**
    * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
    */
    'taxRates'?: string;
    /**
    * Unit amount (in the `currency` specified) of the invoice item.
    */
    'unitAmount'?: number;
    /**
    * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
    */
    'unitAmountDecimal'?: number;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
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
            "name": "date",
            "baseName": "date",
            "type": "number"
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
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "periodEnd",
            "baseName": "period_end",
            "type": "number"
        },
        {
            "name": "periodStart",
            "baseName": "period_start",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string"
        },
        {
            "name": "proration",
            "baseName": "proration",
            "type": "boolean"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string"
        },
        {
            "name": "subscriptionItem",
            "baseName": "subscription_item",
            "type": "string"
        },
        {
            "name": "taxRates",
            "baseName": "tax_rates",
            "type": "string"
        },
        {
            "name": "unitAmount",
            "baseName": "unit_amount",
            "type": "number"
        },
        {
            "name": "unitAmountDecimal",
            "baseName": "unit_amount_decimal",
            "type": "number"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceItemInvoiceitem.attributeTypeMap;
    }
}

