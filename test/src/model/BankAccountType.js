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
* Enum class BankAccountType.
* @enum {}
* @readonly
*/
export default class BankAccountType {
    
        /**
         * value: "checking"
         * @const
         */
        "AccountTypeChecking" = "checking";

    
        /**
         * value: "savings"
         * @const
         */
        "AccountTypeSavings" = "savings";

    
        /**
         * value: "futsu"
         * @const
         */
        "AccountTypeFutsu" = "futsu";

    
        /**
         * value: "toza"
         * @const
         */
        "AccountTypeToza" = "toza";

    

    /**
    * Returns a <code>BankAccountType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BankAccountType} The enum <code>BankAccountType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

