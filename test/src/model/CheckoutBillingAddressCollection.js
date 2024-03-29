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
* Enum class CheckoutBillingAddressCollection.
* @enum {}
* @readonly
*/
export default class CheckoutBillingAddressCollection {
    
        /**
         * value: "auto"
         * @const
         */
        "BillingAddressCollectionAuto" = "auto";

    
        /**
         * value: "required"
         * @const
         */
        "BillingAddressCollectionRequired" = "required";

    

    /**
    * Returns a <code>CheckoutBillingAddressCollection</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CheckoutBillingAddressCollection} The enum <code>CheckoutBillingAddressCollection</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

