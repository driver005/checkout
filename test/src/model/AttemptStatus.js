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
* Enum class AttemptStatus.
* @enum {}
* @readonly
*/
export default class AttemptStatus {
    
        /**
         * value: "requires_confirmation"
         * @const
         */
        "StatusRequiresConfirmation" = "requires_confirmation";

    
        /**
         * value: "requires_action"
         * @const
         */
        "StatusRequiresAction" = "requires_action";

    
        /**
         * value: "processing"
         * @const
         */
        "StatusProcessing" = "processing";

    
        /**
         * value: "succeeded"
         * @const
         */
        "StatusSucceeded" = "succeeded";

    
        /**
         * value: "failed"
         * @const
         */
        "StatusFailed" = "failed";

    
        /**
         * value: "abandoned"
         * @const
         */
        "StatusAbandoned" = "abandoned";

    

    /**
    * Returns a <code>AttemptStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AttemptStatus} The enum <code>AttemptStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

