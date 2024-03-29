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
import { FilePurpose } from './filePurpose';

export class FileFile {
    'createdAt'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    /**
    * The time at which the file expires and is no longer available in epoch seconds.
    */
    'expiresAt'?: number;
    /**
    * A filename for the file, suitable for saving to a filesystem.
    */
    'filename'?: string;
    'id'?: string;
    'links'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    /**
    * The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
    */
    'purpose'?: FilePurpose;
    /**
    * The size in bytes of the file object.
    */
    'size'?: number;
    /**
    * A user friendly title for the document.
    */
    'title'?: string;
    /**
    * The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
    */
    'type'?: string;
    'updatedAt'?: string;
    /**
    * The URL from which the file can be downloaded using your live secret API key.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "number"
        },
        {
            "name": "filename",
            "baseName": "filename",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
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
            "name": "purpose",
            "baseName": "purpose",
            "type": "FilePurpose"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
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
        return FileFile.attributeTypeMap;
    }
}

