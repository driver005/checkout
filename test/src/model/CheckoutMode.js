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
* Enum class CheckoutMode.
* @enum {}
* @readonly
*/
export default class CheckoutMode {
    
        /**
         * value: "payment"
         * @const
         */
        "ModePayment" = "payment";

    
        /**
         * value: "setup"
         * @const
         */
        "ModeSetup" = "setup";

    
        /**
         * value: "subscription"
         * @const
         */
        "ModeSubscription" = "subscription";

    

    /**
    * Returns a <code>CheckoutMode</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CheckoutMode} The enum <code>CheckoutMode</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

