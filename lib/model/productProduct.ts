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

export class ProductProduct {
    'active'?: boolean;
    'createdAt'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    'description'?: string;
    'id'?: string;
    'images'?: Array<string>;
    'livemode'?: boolean;
    'metadata'?: object;
    'name'?: string;
    'object'?: string;
    'packageDimensions'?: string;
    'shippable'?: boolean;
    'statementDescriptor'?: string;
    'taxCode'?: string;
    'unitLabel'?: string;
    'updated'?: number;
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "images",
            "baseName": "images",
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string"
        },
        {
            "name": "packageDimensions",
            "baseName": "package_dimensions",
            "type": "string"
        },
        {
            "name": "shippable",
            "baseName": "shippable",
            "type": "boolean"
        },
        {
            "name": "statementDescriptor",
            "baseName": "statement_descriptor",
            "type": "string"
        },
        {
            "name": "taxCode",
            "baseName": "tax_code",
            "type": "string"
        },
        {
            "name": "unitLabel",
            "baseName": "unit_label",
            "type": "string"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "number"
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
        return ProductProduct.attributeTypeMap;
    }
}

