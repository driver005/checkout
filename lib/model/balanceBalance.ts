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

export class BalanceBalance {
    /**
    * Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). The available balance for each currency and payment type can be found in the `source_types` property.
    */
    'available'?: Array<string>;
    /**
    * Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.
    */
    'connectReserved'?: Array<string>;
    'createdAt'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'id'?: string;
    /**
    * Funds that can be paid out using Instant Payouts.
    */
    'instantAvailable'?: Array<string>;
    'issuing'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    /**
    * Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.
    */
    'pending'?: Array<string>;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "Array<string>"
        },
        {
            "name": "connectReserved",
            "baseName": "connect_reserved",
            "type": "Array<string>"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
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
            "name": "instantAvailable",
            "baseName": "instant_available",
            "type": "Array<string>"
        },
        {
            "name": "issuing",
            "baseName": "issuing",
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
            "name": "pending",
            "baseName": "pending",
            "type": "Array<string>"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BalanceBalance.attributeTypeMap;
    }
}
