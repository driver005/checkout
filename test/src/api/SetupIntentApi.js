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
import IntentSetupIntent from '../model/IntentSetupIntent';

/**
* SetupIntent service.
* @module api/SetupIntentApi
* @version 2.0
*/
export default class SetupIntentApi {

    /**
    * Constructs a new SetupIntentApi. 
    * @alias module:api/SetupIntentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1SetupIntentsGet operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IntentSetupIntent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing SetupIntents
     * Get all existing SetupIntents.
     * @param {module:api/SetupIntentApi~v1SetupIntentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IntentSetupIntent>}
     */
    v1SetupIntentsGet(callback) {
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
      let returnType = [IntentSetupIntent];
      return this.apiClient.callApi(
        '/v1/setup_intents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsIdCancelePost operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsIdCancelePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntentSetupIntent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * cancel SetupIntent
     * Cancel SetupIntent.
     * @param {String} id SetupIntent ID
     * @param {module:api/SetupIntentApi~v1SetupIntentsIdCancelePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntentSetupIntent}
     */
    v1SetupIntentsIdCancelePost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1SetupIntentsIdCancelePost");
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
      let returnType = IntentSetupIntent;
      return this.apiClient.callApi(
        '/v1/setup_intents/{id}/cancele', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsIdConfirmPost operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsIdConfirmPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntentSetupIntent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * confirm SetupIntent
     * Confirm SetupIntent.
     * @param {String} id SetupIntent ID
     * @param {module:api/SetupIntentApi~v1SetupIntentsIdConfirmPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntentSetupIntent}
     */
    v1SetupIntentsIdConfirmPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1SetupIntentsIdConfirmPost");
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
      let returnType = IntentSetupIntent;
      return this.apiClient.callApi(
        '/v1/setup_intents/{id}/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsIdDelete operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete SetupIntent by given ID
     * Delete SetupIntent by given ID.
     * @param {String} id SetupIntent ID
     * @param {module:api/SetupIntentApi~v1SetupIntentsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    v1SetupIntentsIdDelete(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1SetupIntentsIdDelete");
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
        '/v1/setup_intents/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsIdGet operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntentSetupIntent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get SetupIntent by given ID or 404 error.
     * Get SetupIntent by given ID or 404 error.
     * @param {String} id SetupIntent ID
     * @param {module:api/SetupIntentApi~v1SetupIntentsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntentSetupIntent}
     */
    v1SetupIntentsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1SetupIntentsIdGet");
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
      let returnType = IntentSetupIntent;
      return this.apiClient.callApi(
        '/v1/setup_intents/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsIdPost operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntentSetupIntent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update SetupIntent
     * Update SetupIntent.
     * @param {String} id SetupIntent ID
     * @param {module:api/SetupIntentApi~v1SetupIntentsIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntentSetupIntent}
     */
    v1SetupIntentsIdPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1SetupIntentsIdPost");
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
      let returnType = IntentSetupIntent;
      return this.apiClient.callApi(
        '/v1/setup_intents/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SetupIntentsPost operation.
     * @callback module:api/SetupIntentApi~v1SetupIntentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntentSetupIntent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new SetupIntent
     * Create a new SetupIntent.
     * @param {module:api/SetupIntentApi~v1SetupIntentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntentSetupIntent}
     */
    v1SetupIntentsPost(callback) {
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
      let returnType = IntentSetupIntent;
      return this.apiClient.callApi(
        '/v1/setup_intents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
