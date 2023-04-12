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
* Enum class DisputeReason.
* @enum {}
* @readonly
*/
export default class DisputeReason {
    
        /**
         * value: "bank_cannot_process"
         * @const
         */
        "ReasonBankCannotProcess" = "bank_cannot_process";

    
        /**
         * value: "check_returned"
         * @const
         */
        "ReasonCheckReturned" = "check_returned";

    
        /**
         * value: "credit_not_processed"
         * @const
         */
        "ReasonCreditNotProcessed" = "credit_not_processed";

    
        /**
         * value: "customer_initiated"
         * @const
         */
        "ReasonCustomerInitiated" = "customer_initiated";

    
        /**
         * value: "debit_not_authorized"
         * @const
         */
        "ReasonDebitNotAuthorized" = "debit_not_authorized";

    
        /**
         * value: "duplicate"
         * @const
         */
        "ReasonDuplicate" = "duplicate";

    
        /**
         * value: "fraudulent"
         * @const
         */
        "ReasonFraudulent" = "fraudulent";

    
        /**
         * value: "general"
         * @const
         */
        "ReasonGeneral" = "general";

    
        /**
         * value: "incorrect_account_details"
         * @const
         */
        "ReasonIncorrectAccountDetails" = "incorrect_account_details";

    
        /**
         * value: "insufficient_funds"
         * @const
         */
        "ReasonInsufficientFunds" = "insufficient_funds";

    
        /**
         * value: "product_not_received"
         * @const
         */
        "ReasonProductNotReceived" = "product_not_received";

    
        /**
         * value: "product_unacceptable"
         * @const
         */
        "ReasonProductUnacceptable" = "product_unacceptable";

    
        /**
         * value: "subscription_canceled"
         * @const
         */
        "ReasonSubscriptionCanceled" = "subscription_canceled";

    
        /**
         * value: "unrecognized"
         * @const
         */
        "ReasonUnrecognized" = "unrecognized";

    

    /**
    * Returns a <code>DisputeReason</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DisputeReason} The enum <code>DisputeReason</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
