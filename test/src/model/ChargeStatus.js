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
* Enum class ChargeStatus.
* @enum {}
* @readonly
*/
export default class ChargeStatus {
    
        /**
         * value: "succeeded"
         * @const
         */
        "StatusSucceeded" = "succeeded";

    
        /**
         * value: "pending"
         * @const
         */
        "StatusPending" = "pending";

    
        /**
         * value: "failed"
         * @const
         */
        "StatusFailed" = "failed";

    

    /**
    * Returns a <code>ChargeStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ChargeStatus} The enum <code>ChargeStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

