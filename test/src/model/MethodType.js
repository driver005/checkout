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
* Enum class MethodType.
* @enum {}
* @readonly
*/
export default class MethodType {
    
        /**
         * value: "acss_debit"
         * @const
         */
        "TypeAcssDebit" = "acss_debit";

    
        /**
         * value: "affirm"
         * @const
         */
        "TypeAffirm" = "affirm";

    
        /**
         * value: "afterpay_clearpay"
         * @const
         */
        "TypeAfterpayClearpay" = "afterpay_clearpay";

    
        /**
         * value: "alipay"
         * @const
         */
        "TypeAlipay" = "alipay";

    
        /**
         * value: "au_becs_debit"
         * @const
         */
        "TypeAuBecsDebit" = "au_becs_debit";

    
        /**
         * value: "bacs_debit"
         * @const
         */
        "TypeBacsDebit" = "bacs_debit";

    
        /**
         * value: "bancontact"
         * @const
         */
        "TypeBancontact" = "bancontact";

    
        /**
         * value: "blik"
         * @const
         */
        "TypeBlik" = "blik";

    
        /**
         * value: "boleto"
         * @const
         */
        "TypeBoleto" = "boleto";

    
        /**
         * value: "btcpay"
         * @const
         */
        "TypeBtcpay" = "btcpay";

    
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
         * value: "customer_balance"
         * @const
         */
        "TypeCustomerBalance" = "customer_balance";

    
        /**
         * value: "eps"
         * @const
         */
        "TypeEps" = "eps";

    
        /**
         * value: "fpx"
         * @const
         */
        "TypeFpx" = "fpx";

    
        /**
         * value: "giropay"
         * @const
         */
        "TypeGiropay" = "giropay";

    
        /**
         * value: "grabpay"
         * @const
         */
        "TypeGrabpay" = "grabpay";

    
        /**
         * value: "ideal"
         * @const
         */
        "TypeIdeal" = "ideal";

    
        /**
         * value: "interac_present"
         * @const
         */
        "TypeInteracPresent" = "interac_present";

    
        /**
         * value: "klarna"
         * @const
         */
        "TypeKlarna" = "klarna";

    
        /**
         * value: "konbini"
         * @const
         */
        "TypeKonbini" = "konbini";

    
        /**
         * value: "link"
         * @const
         */
        "TypeLink" = "link";

    
        /**
         * value: "oxxo"
         * @const
         */
        "TypeOxxo" = "oxxo";

    
        /**
         * value: "p24"
         * @const
         */
        "TypeP24" = "p24";

    
        /**
         * value: "paynow"
         * @const
         */
        "TypePaynow" = "paynow";

    
        /**
         * value: "pix"
         * @const
         */
        "TypePix" = "pix";

    
        /**
         * value: "promptpay"
         * @const
         */
        "TypePromptpay" = "promptpay";

    
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
         * value: "us_bank_account"
         * @const
         */
        "TypeUsBankAccount" = "us_bank_account";

    
        /**
         * value: "wechat_pay"
         * @const
         */
        "TypeWechatPay" = "wechat_pay";

    

    /**
    * Returns a <code>MethodType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/MethodType} The enum <code>MethodType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
