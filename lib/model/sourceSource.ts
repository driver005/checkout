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
import { SourceFlow } from './sourceFlow';
import { SourceStatus } from './sourceStatus';
import { SourceType } from './sourceType';
import { SourceUsage } from './sourceUsage';

export class SourceSource {
    'achCreditTransfer'?: string;
    'achDebit'?: string;
    'acssDebit'?: string;
    'alipay'?: string;
    'amount'?: number;
    'auBecsDebit'?: string;
    'bancontact'?: string;
    'card'?: string;
    'cardPresent'?: string;
    'clientSecret'?: string;
    'codeVerification'?: string;
    'createdAt'?: string;
    'currency'?: string;
    'customer'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'eps'?: string;
    'flow'?: SourceFlow;
    'giropay'?: string;
    'id'?: string;
    'ideal'?: string;
    'klarna'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'multibanco'?: string;
    'object'?: string;
    'owner'?: string;
    'p24'?: string;
    'receiver'?: string;
    'redirect'?: string;
    'sepaDebit'?: string;
    'sofort'?: string;
    'sourceOrder'?: string;
    'statementDescriptor'?: string;
    'status'?: SourceStatus;
    'threeDSecure'?: string;
    'type'?: SourceType;
    'updatedAt'?: string;
    'usage'?: SourceUsage;
    'wechat'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "achCreditTransfer",
            "baseName": "ach_credit_transfer",
            "type": "string"
        },
        {
            "name": "achDebit",
            "baseName": "ach_debit",
            "type": "string"
        },
        {
            "name": "acssDebit",
            "baseName": "acss_debit",
            "type": "string"
        },
        {
            "name": "alipay",
            "baseName": "alipay",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "auBecsDebit",
            "baseName": "au_becs_debit",
            "type": "string"
        },
        {
            "name": "bancontact",
            "baseName": "bancontact",
            "type": "string"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "string"
        },
        {
            "name": "cardPresent",
            "baseName": "card_present",
            "type": "string"
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string"
        },
        {
            "name": "codeVerification",
            "baseName": "code_verification",
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
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "DatabaseDeletedAt"
        },
        {
            "name": "eps",
            "baseName": "eps",
            "type": "string"
        },
        {
            "name": "flow",
            "baseName": "flow",
            "type": "SourceFlow"
        },
        {
            "name": "giropay",
            "baseName": "giropay",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "string"
        },
        {
            "name": "klarna",
            "baseName": "klarna",
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
            "name": "multibanco",
            "baseName": "multibanco",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "string"
        },
        {
            "name": "p24",
            "baseName": "p24",
            "type": "string"
        },
        {
            "name": "receiver",
            "baseName": "receiver",
            "type": "string"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "string"
        },
        {
            "name": "sepaDebit",
            "baseName": "sepa_debit",
            "type": "string"
        },
        {
            "name": "sofort",
            "baseName": "sofort",
            "type": "string"
        },
        {
            "name": "sourceOrder",
            "baseName": "source_order",
            "type": "string"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SourceStatus"
        },
        {
            "name": "threeDSecure",
            "baseName": "three_d_secure",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SourceType"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "SourceUsage"
        },
        {
            "name": "wechat",
            "baseName": "wechat",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SourceSource.attributeTypeMap;
    }
}

export namespace SourceSource {
}
