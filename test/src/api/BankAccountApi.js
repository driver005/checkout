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


import ApiClient from "../ApiClient";
import BankBankAccount from '../model/BankBankAccount';

/**
* BankAccount service.
* @module api/BankAccountApi
* @version 2.0
*/
export default class BankAccountApi {

    /**
    * Constructs a new BankAccountApi. 
    * @alias module:api/BankAccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1CustomersIdSourcesIdVerifyPost operation.
     * @callback module:api/BankAccountApi~v1CustomersIdSourcesIdVerifyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankBankAccount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * verify BankAccount
     * Verify BankAccount.
     * @param {String} id BankAccount ID
     * @param {module:api/BankAccountApi~v1CustomersIdSourcesIdVerifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankBankAccount}
     */
    v1CustomersIdSourcesIdVerifyPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdSourcesIdVerifyPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BankBankAccount;
      return this.apiClient.callApi(
        '/v1/customers/{id}/sources/{id}/verify', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
