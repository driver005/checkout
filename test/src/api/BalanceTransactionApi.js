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
import BalanceBalanceTransaction from '../model/BalanceBalanceTransaction';

/**
* BalanceTransaction service.
* @module api/BalanceTransactionApi
* @version 2.0
*/
export default class BalanceTransactionApi {

    /**
    * Constructs a new BalanceTransactionApi. 
    * @alias module:api/BalanceTransactionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1BalanceTransactionsGet operation.
     * @callback module:api/BalanceTransactionApi~v1BalanceTransactionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BalanceBalanceTransaction>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing BalanceTransaction
     * Get all existing BalanceTransaction.
     * @param {module:api/BalanceTransactionApi~v1BalanceTransactionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BalanceBalanceTransaction>}
     */
    v1BalanceTransactionsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [BalanceBalanceTransaction];
      return this.apiClient.callApi(
        '/v1/balance_transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1BalanceTransactionsIdGet operation.
     * @callback module:api/BalanceTransactionApi~v1BalanceTransactionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BalanceBalanceTransaction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get BalanceTransaction by given ID or 404 error.
     * Get BalanceTransaction by given ID or 404 error.
     * @param {String} id BalanceTransaction ID
     * @param {module:api/BalanceTransactionApi~v1BalanceTransactionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BalanceBalanceTransaction}
     */
    v1BalanceTransactionsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1BalanceTransactionsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BalanceBalanceTransaction;
      return this.apiClient.callApi(
        '/v1/balance_transactions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
