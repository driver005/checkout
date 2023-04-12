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

export class LinkPaymentLink {
    'active'?: boolean;
    'afterCompletion'?: string;
    'allowPromotionCodes'?: boolean;
    'applicationFeeAmount'?: number;
    'applicationFeePercent'?: number;
    'automaticTax'?: boolean;
    'billingAddressCollection'?: string;
    'consentCollection'?: string;
    'createdAt'?: string;
    'currency'?: string;
    'customText'?: string;
    'customerCreation'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'id'?: string;
    'lineItems'?: Array<string>;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    'paymentIntentData'?: string;
    'paymentMethodCollection'?: string;
    'paymentMethodTypes'?: Array<string>;
    'phoneNumberCollection'?: boolean;
    'shippingAddressCollection'?: string;
    'shippingOptions'?: Array<string>;
    'submitType'?: string;
    'subscriptionData'?: string;
    'taxIdCollection'?: boolean;
    'updatedAt'?: string;
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "afterCompletion",
            "baseName": "after_completion",
            "type": "string"
        },
        {
            "name": "allowPromotionCodes",
            "baseName": "allow_promotion_codes",
            "type": "boolean"
        },
        {
            "name": "applicationFeeAmount",
            "baseName": "application_fee_amount",
            "type": "number"
        },
        {
            "name": "applicationFeePercent",
            "baseName": "application_fee_percent",
            "type": "number"
        },
        {
            "name": "automaticTax",
            "baseName": "automatic_tax",
            "type": "boolean"
        },
        {
            "name": "billingAddressCollection",
            "baseName": "billing_address_collection",
            "type": "string"
        },
        {
            "name": "consentCollection",
            "baseName": "consent_collection",
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
            "name": "customText",
            "baseName": "custom_text",
            "type": "string"
        },
        {
            "name": "customerCreation",
            "baseName": "customer_creation",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "DatabaseDeletedAt"
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "paymentIntentData",
            "baseName": "payment_intent_data",
            "type": "string"
        },
        {
            "name": "paymentMethodCollection",
            "baseName": "payment_method_collection",
            "type": "string"
        },
        {
            "name": "paymentMethodTypes",
            "baseName": "payment_method_types",
            "type": "Array<string>"
        },
        {
            "name": "phoneNumberCollection",
            "baseName": "phone_number_collection",
            "type": "boolean"
        },
        {
            "name": "shippingAddressCollection",
            "baseName": "shipping_address_collection",
            "type": "string"
        },
        {
            "name": "shippingOptions",
            "baseName": "shipping_options",
            "type": "Array<string>"
        },
        {
            "name": "submitType",
            "baseName": "submit_type",
            "type": "string"
        },
        {
            "name": "subscriptionData",
            "baseName": "subscription_data",
            "type": "string"
        },
        {
            "name": "taxIdCollection",
            "baseName": "tax_id_collection",
            "type": "boolean"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return LinkPaymentLink.attributeTypeMap;
    }
}
