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

export class UuidNullUUID {
    'uuid'?: string;
    /**
    * Valid is true if UUID is not NULL
    */
    'valid'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string"
        },
        {
            "name": "valid",
            "baseName": "valid",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UuidNullUUID.attributeTypeMap;
    }
}

