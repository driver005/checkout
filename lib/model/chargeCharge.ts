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
import { ChargeStatus } from './chargeStatus';
import { DatabaseDeletedAt } from './databaseDeletedAt';

export class ChargeCharge {
    'amount'?: number;
    'amountCaptured'?: number;
    'amountRefunded'?: number;
    'balanceTransaction'?: string;
    'billingDetails'?: string;
    'calculatedStatementDescriptor'?: string;
    'captured'?: boolean;
    'createdAt'?: string;
    'currency'?: string;
    'customer'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'description'?: string;
    'disputed'?: boolean;
    'failureBalanceTransaction'?: string;
    'failureCode'?: string;
    'failureMessage'?: string;
    'fraudDetails'?: string;
    'id'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    'outcome'?: string;
    'paid'?: boolean;
    'paymentMethod'?: string;
    'paymentMethodDetails'?: string;
    'radarOptions'?: string;
    'receiptEmail'?: string;
    'receiptNumber'?: string;
    'receiptUrl'?: string;
    'refunded'?: boolean;
    'review'?: string;
    'shipping'?: string;
    'statementDescriptor'?: string;
    'statementDescriptorSuffix'?: string;
    'status'?: ChargeStatus;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "amountCaptured",
            "baseName": "amount_captured",
            "type": "number"
        },
        {
            "name": "amountRefunded",
            "baseName": "amount_refunded",
            "type": "number"
        },
        {
            "name": "balanceTransaction",
            "baseName": "balance_transaction",
            "type": "string"
        },
        {
            "name": "billingDetails",
            "baseName": "billing_details",
            "type": "string"
        },
        {
            "name": "calculatedStatementDescriptor",
            "baseName": "calculated_statement_descriptor",
            "type": "string"
        },
        {
            "name": "captured",
            "baseName": "captured",
            "type": "boolean"
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
            "name": "disputed",
            "baseName": "disputed",
            "type": "boolean"
        },
        {
            "name": "failureBalanceTransaction",
            "baseName": "failure_balance_transaction",
            "type": "string"
        },
        {
            "name": "failureCode",
            "baseName": "failure_code",
            "type": "string"
        },
        {
            "name": "failureMessage",
            "baseName": "failure_message",
            "type": "string"
        },
        {
            "name": "fraudDetails",
            "baseName": "fraud_details",
            "type": "string"
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
            "name": "outcome",
            "baseName": "outcome",
            "type": "string"
        },
        {
            "name": "paid",
            "baseName": "paid",
            "type": "boolean"
        },
        {
            "name": "paymentMethod",
            "baseName": "payment_method",
            "type": "string"
        },
        {
            "name": "paymentMethodDetails",
            "baseName": "payment_method_details",
            "type": "string"
        },
        {
            "name": "radarOptions",
            "baseName": "radar_options",
            "type": "string"
        },
        {
            "name": "receiptEmail",
            "baseName": "receipt_email",
            "type": "string"
        },
        {
            "name": "receiptNumber",
            "baseName": "receipt_number",
            "type": "string"
        },
        {
            "name": "receiptUrl",
            "baseName": "receipt_url",
            "type": "string"
        },
        {
            "name": "refunded",
            "baseName": "refunded",
            "type": "boolean"
        },
        {
            "name": "review",
            "baseName": "review",
            "type": "string"
        },
        {
            "name": "shipping",
            "baseName": "shipping",
            "type": "string"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "statementDescriptorSuffix",
            "baseName": "statement_descriptor_suffix",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ChargeStatus"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ChargeCharge.attributeTypeMap;
    }
}

export namespace ChargeCharge {
}
