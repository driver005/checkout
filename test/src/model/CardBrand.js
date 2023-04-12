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
* Enum class CardBrand.
* @enum {}
* @readonly
*/
export default class CardBrand {
    
        /**
         * value: "American Express"
         * @const
         */
        "BrandAmericanExpress" = "American Express";

    
        /**
         * value: "Diners Club"
         * @const
         */
        "BrandDinersClub" = "Diners Club";

    
        /**
         * value: "Discover"
         * @const
         */
        "BrandDiscover" = "Discover";

    
        /**
         * value: "JCB"
         * @const
         */
        "BrandJCB" = "JCB";

    
        /**
         * value: "MasterCard"
         * @const
         */
        "BrandMasterCard" = "MasterCard";

    
        /**
         * value: "UnionPay"
         * @const
         */
        "BrandUnionPay" = "UnionPay";

    
        /**
         * value: "Visa"
         * @const
         */
        "BrandVisa" = "Visa";

    
        /**
         * value: "Unknown"
         * @const
         */
        "BrandUnknown" = "Unknown";

    

    /**
    * Returns a <code>CardBrand</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CardBrand} The enum <code>CardBrand</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
