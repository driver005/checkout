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
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class GithubComDriver005GatewayInternalSetupIntentCancellationReason.
* @enum {}
* @readonly
*/
export default class GithubComDriver005GatewayInternalSetupIntentCancellationReason {
    
        /**
         * value: "abandoned"
         * @const
         */
        "CancellationReasonAbandoned" = "abandoned";

    
        /**
         * value: "requested_by_customer"
         * @const
         */
        "CancellationReasonRequestedByCustomer" = "requested_by_customer";

    
        /**
         * value: "duplicate"
         * @const
         */
        "CancellationReasonDuplicate" = "duplicate";

    

    /**
    * Returns a <code>GithubComDriver005GatewayInternalSetupIntentCancellationReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/GithubComDriver005GatewayInternalSetupIntentCancellationReason} The enum <code>GithubComDriver005GatewayInternalSetupIntentCancellationReason</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

