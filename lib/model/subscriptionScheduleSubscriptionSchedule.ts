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

export class SubscriptionScheduleSubscriptionSchedule {
    /**
    * Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
    */
    'canceledAt'?: number;
    /**
    * Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
    */
    'completedAt'?: number;
    'createdAt'?: string;
    'customer'?: string;
    'defaultSettings'?: string;
    'deletedAt'?: DatabaseDeletedAt;
    /**
    * Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
    */
    'endBehavior'?: string;
    /**
    * The end of this phase of the subscription schedule.
    */
    'endDate'?: number;
    'id'?: string;
    'livemode'?: boolean;
    'metadata'?: object;
    'object'?: string;
    /**
    * Configuration for the subscription schedule\'s phases.
    */
    'phases'?: string;
    /**
    * Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
    */
    'releasedAt'?: string;
    /**
    * ID of the subscription once managed by the subscription schedule (if it is released).
    */
    'releasedSubscription'?: string;
    /**
    * The start of this phase of the subscription schedule.
    */
    'startDate'?: number;
    /**
    * The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).
    */
    'status'?: string;
    'updatedAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "canceledAt",
            "baseName": "canceled_at",
            "type": "number"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "number"
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
            "name": "defaultSettings",
            "baseName": "default_settings",
            "type": "string"
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "DatabaseDeletedAt"
        },
        {
            "name": "endBehavior",
            "baseName": "end_behavior",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "number"
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
            "name": "phases",
            "baseName": "phases",
            "type": "string"
        },
        {
            "name": "releasedAt",
            "baseName": "released_at",
            "type": "string"
        },
        {
            "name": "releasedSubscription",
            "baseName": "released_subscription",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionScheduleSubscriptionSchedule.attributeTypeMap;
    }
}
