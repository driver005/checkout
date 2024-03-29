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

export class CashCashBalance {
    /**
    * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
    */
    'available'?: object;
    'createdAt'?: string;
    /**
    * The ID of the customer whose cash balance this object represents.
    */
    'customer'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'id'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    /**
    * The configuration for how funds that land in the customer cash balance are reconciled.
    */
    'settingReconciliationMode'?: string;
    /**
    * A flag to indicate if reconciliation mode returned is the user\'s default or is specific to this customer cash balance
    */
    'settingUsingMerchantDefault'?: boolean;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "object"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "customer",
            "baseName": "customer",
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
            "name": "settingReconciliationMode",
            "baseName": "setting_reconciliation_mode",
            "type": "string"
        },
        {
            "name": "settingUsingMerchantDefault",
            "baseName": "setting_using_merchant_default",
            "type": "boolean"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CashCashBalance.attributeTypeMap;
    }
}

