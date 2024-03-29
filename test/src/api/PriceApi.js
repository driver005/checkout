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
import PricePrice from '../model/PricePrice';

/**
* Price service.
* @module api/PriceApi
* @version 2.0
*/
export default class PriceApi {

    /**
    * Constructs a new PriceApi. 
    * @alias module:api/PriceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1PricesGet operation.
     * @callback module:api/PriceApi~v1PricesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PricePrice>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing Prices
     * Get all existing Prices.
     * @param {module:api/PriceApi~v1PricesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PricePrice>}
     */
    v1PricesGet(callback) {
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
      let returnType = [PricePrice];
      return this.apiClient.callApi(
        '/v1/prices', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PricesIdDelete operation.
     * @callback module:api/PriceApi~v1PricesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete Price by given ID
     * Delete Price by given ID.
     * @param {String} id Price ID
     * @param {module:api/PriceApi~v1PricesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    v1PricesIdDelete(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PricesIdDelete");
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
        '/v1/prices/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PricesIdGet operation.
     * @callback module:api/PriceApi~v1PricesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PricePrice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Price by given ID or 404 error.
     * Get Price by given ID or 404 error.
     * @param {String} id Price ID
     * @param {module:api/PriceApi~v1PricesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PricePrice}
     */
    v1PricesIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PricesIdGet");
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
      let returnType = PricePrice;
      return this.apiClient.callApi(
        '/v1/prices/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PricesIdPost operation.
     * @callback module:api/PriceApi~v1PricesIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PricePrice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update Price
     * Update Price.
     * @param {String} id Price ID
     * @param {module:api/PriceApi~v1PricesIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PricePrice}
     */
    v1PricesIdPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1PricesIdPost");
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
      let returnType = PricePrice;
      return this.apiClient.callApi(
        '/v1/prices/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PricesPost operation.
     * @callback module:api/PriceApi~v1PricesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PricePrice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new Price
     * Create a new Price.
     * @param {module:api/PriceApi~v1PricesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PricePrice}
     */
    v1PricesPost(callback) {
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
      let returnType = PricePrice;
      return this.apiClient.callApi(
        '/v1/prices', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
