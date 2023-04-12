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
* Enum class PayoutSourceType.
* @enum {}
* @readonly
*/
export default class PayoutSourceType {
    
        /**
         * value: "card"
         * @const
         */
        "SourceTypeCard" = "card";

    
        /**
         * value: "fpx"
         * @const
         */
        "SourceTypeFpx" = "fpx";

    
        /**
         * value: "bank_account"
         * @const
         */
        "SourceTypeBankAccount" = "bank_account";

    

    /**
    * Returns a <code>PayoutSourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PayoutSourceType} The enum <code>PayoutSourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

