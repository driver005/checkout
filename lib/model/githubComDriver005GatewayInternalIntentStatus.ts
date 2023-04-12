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

export enum GithubComDriver005GatewayInternalIntentStatus {
    StatusRequiresPaymentMethod = <any> 'requires_payment_method',
    StatusRequiresConfirmation = <any> 'requires_confirmation',
    StatusRequiresAction = <any> 'requires_action',
    StatusProcessing = <any> 'processing',
    StatusRequiresCapture = <any> 'requires_capture',
    StatusCanceled = <any> 'canceled',
    StatusSucceeded = <any> 'succeeded'
}
