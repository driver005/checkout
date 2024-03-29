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
import PayoutPayout from '../model/PayoutPayout';

/**
* Payout service.
* @module api/PayoutApi
* @version 2.0
*/
export default class PayoutApi {

    /**
    * Constructs a new PayoutApi. 
    * @alias module:api/PayoutApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1PayoutsGet operation.
     * @callback module:api/PayoutApi~v1PayoutsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PayoutPayout>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing Payouts
     * Get all existing Payouts.
     * @param {module:api/PayoutApi~v1PayoutsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PayoutPayout>}
     */
    v1PayoutsGet(callback) {
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
      let returnType = [PayoutPayout];
      return this.apiClient.callApi(
        '/v1/payouts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsIdCancelePost operation.
     * @callback module:api/PayoutApi~v1PayoutsIdCancelePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutPayout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancel Payout
     * Cancel Payout.
     * @param {String} id Payout ID
     * @param {module:api/PayoutApi~v1PayoutsIdCancelePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutPayout}
     */
    v1PayoutsIdCancelePost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PayoutsIdCancelePost");
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
      let returnType = PayoutPayout;
      return this.apiClient.callApi(
        '/v1/payouts/{id}/cancele', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsIdDelete operation.
     * @callback module:api/PayoutApi~v1PayoutsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete Payout by given ID
     * Delete Payout by given ID.
     * @param {String} id Payout ID
     * @param {module:api/PayoutApi~v1PayoutsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    v1PayoutsIdDelete(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PayoutsIdDelete");
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
      let returnType = 'String';
      return this.apiClient.callApi(
        '/v1/payouts/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsIdGet operation.
     * @callback module:api/PayoutApi~v1PayoutsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutPayout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Payout by given ID or 404 error.
     * Get Payout by given ID or 404 error.
     * @param {String} id Payout ID
     * @param {module:api/PayoutApi~v1PayoutsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutPayout}
     */
    v1PayoutsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PayoutsIdGet");
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
      let returnType = PayoutPayout;
      return this.apiClient.callApi(
        '/v1/payouts/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsIdPost operation.
     * @callback module:api/PayoutApi~v1PayoutsIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutPayout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update Payout
     * Update Payout.
     * @param {String} id Payout ID
     * @param {module:api/PayoutApi~v1PayoutsIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutPayout}
     */
    v1PayoutsIdPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PayoutsIdPost");
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
      let returnType = PayoutPayout;
      return this.apiClient.callApi(
        '/v1/payouts/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsIdReversePost operation.
     * @callback module:api/PayoutApi~v1PayoutsIdReversePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutPayout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * reverse Payout
     * Reverse Payout.
     * @param {String} id Payout ID
     * @param {module:api/PayoutApi~v1PayoutsIdReversePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutPayout}
     */
    v1PayoutsIdReversePost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PayoutsIdReversePost");
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
      let returnType = PayoutPayout;
      return this.apiClient.callApi(
        '/v1/payouts/{id}/reverse', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PayoutsPost operation.
     * @callback module:api/PayoutApi~v1PayoutsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PayoutPayout} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new Payout
     * Create a new Payout.
     * @param {module:api/PayoutApi~v1PayoutsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PayoutPayout}
     */
    v1PayoutsPost(callback) {
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
      let returnType = PayoutPayout;
      return this.apiClient.callApi(
        '/v1/payouts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
