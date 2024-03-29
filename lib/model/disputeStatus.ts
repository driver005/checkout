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

export enum DisputeStatus {
    StatusWarningNeedsResponse = <any> 'warning_needs_response',
    StatusWarningUnderReview = <any> 'warning_under_review',
    StatusWarningClosed = <any> 'warning_closed',
    StatusNeedsResponse = <any> 'needs_response',
    StatusUnderReview = <any> 'under_review',
    StatusChargeRefunded = <any> 'charge_refunded',
    StatusWon = <any> 'won',
    StatusLost = <any> 'lost'
}
