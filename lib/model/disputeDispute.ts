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
import { DisputeReason } from './disputeReason';
import { DisputeStatus } from './disputeStatus';

export class DisputeDispute {
    /**
    * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
    */
    'amount'?: number;
    /**
    * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
    */
    'balanceTransactions'?: Array<string>;
    'charge'?: string;
    'createdAt'?: string;
    /**
    * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    */
    'currency'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'evidence'?: string;
    'evidenceDetails'?: string;
    'id'?: string;
    /**
    * If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
    */
    'isChargeRefundable'?: boolean;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    'paymentIntent'?: string;
    /**
    * Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories).
    */
    'reason'?: DisputeReason;
    /**
    * Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.
    */
    'status'?: DisputeStatus;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "balanceTransactions",
            "baseName": "balance_transactions",
            "type": "Array<string>"
        },
        {
            "name": "charge",
            "baseName": "charge",
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
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "DatabaseDeletedAt"
        },
        {
            "name": "evidence",
            "baseName": "evidence",
            "type": "string"
        },
        {
            "name": "evidenceDetails",
            "baseName": "evidence_details",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isChargeRefundable",
            "baseName": "is_charge_refundable",
            "type": "boolean"
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
            "name": "paymentIntent",
            "baseName": "payment_intent",
            "type": "string"
        },
        {
            "name": "reason",
            "baseName": "reason",
            "type": "DisputeReason"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DisputeStatus"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DisputeDispute.attributeTypeMap;
    }
}

