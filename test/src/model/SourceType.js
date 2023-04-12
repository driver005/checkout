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
* Enum class SourceType.
* @enum {}
* @readonly
*/
export default class SourceType {
    
        /**
         * value: "ach_reusable_transfer"
         * @const
         */
        "TypeAchreusableTransfer" = "ach_reusable_transfer";

    
        /**
         * value: "ach_debit"
         * @const
         */
        "TypeAchDebit" = "ach_debit";

    
        /**
         * value: "alipay"
         * @const
         */
        "TypeAlipay" = "alipay";

    
        /**
         * value: "bancontact"
         * @const
         */
        "TypeBancontact" = "bancontact";

    
        /**
         * value: "card"
         * @const
         */
        "TypeCard" = "card";

    
        /**
         * value: "card_present"
         * @const
         */
        "TypeCardPresent" = "card_present";

    
        /**
         * value: "eps"
         * @const
         */
        "TypeEps" = "eps";

    
        /**
         * value: "giropay"
         * @const
         */
        "TypeGiropay" = "giropay";

    
        /**
         * value: "ideal"
         * @const
         */
        "TypeIdeal" = "ideal";

    
        /**
         * value: "multibanco"
         * @const
         */
        "TypeMultibanco" = "multibanco";

    
        /**
         * value: "klarna"
         * @const
         */
        "TypeKlarna" = "klarna";

    
        /**
         * value: "p24"
         * @const
         */
        "TypeP24" = "p24";

    
        /**
         * value: "sepa_debit"
         * @const
         */
        "TypeSepaDebit" = "sepa_debit";

    
        /**
         * value: "sofort"
         * @const
         */
        "TypeSofort" = "sofort";

    
        /**
         * value: "three_d_secure"
         * @const
         */
        "TypeThreeDSecure" = "three_d_secure";

    
        /**
         * value: "wechat"
         * @const
         */
        "TypeWechat" = "wechat";

    

    /**
    * Returns a <code>SourceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/SourceType} The enum <code>SourceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

