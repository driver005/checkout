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
* Enum class PriceBillingScheme.
* @enum {}
* @readonly
*/
export default class PriceBillingScheme {
    
        /**
         * value: "per_unit"
         * @const
         */
        "BillingSchemePerUnit" = "per_unit";

    
        /**
         * value: "tiered"
         * @const
         */
        "BillingSchemeTiered" = "tiered";

    

    /**
    * Returns a <code>PriceBillingScheme</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/PriceBillingScheme} The enum <code>PriceBillingScheme</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

