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
import GithubComDriver005GatewayPaymentCardCard from '../model/GithubComDriver005GatewayPaymentCardCard';

/**
* Card service.
* @module api/CardApi
* @version 2.0
*/
export default class CardApi {

    /**
    * Constructs a new CardApi. 
    * @alias module:api/CardApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1CustomersIdSourcesGet operation.
     * @callback module:api/CardApi~v1CustomersIdSourcesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GithubComDriver005GatewayPaymentCardCard>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing Cards
     * Get all existing Cards.
     * @param {module:api/CardApi~v1CustomersIdSourcesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GithubComDriver005GatewayPaymentCardCard>}
     */
    v1CustomersIdSourcesGet(callback) {
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
      let returnType = [GithubComDriver005GatewayPaymentCardCard];
      return this.apiClient.callApi(
        '/v1/customers/{id}/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdSourcesIdGet operation.
     * @callback module:api/CardApi~v1CustomersIdSourcesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GithubComDriver005GatewayPaymentCardCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Card by given ID or 404 error.
     * Get Card by given ID or 404 error.
     * @param {String} id Card ID
     * @param {module:api/CardApi~v1CustomersIdSourcesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GithubComDriver005GatewayPaymentCardCard}
     */
    v1CustomersIdSourcesIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdSourcesIdGet");
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
      let returnType = GithubComDriver005GatewayPaymentCardCard;
      return this.apiClient.callApi(
        '/v1/customers/{id}/sources/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdSourcesIdPost operation.
     * @callback module:api/CardApi~v1CustomersIdSourcesIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GithubComDriver005GatewayPaymentCardCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update Card
     * Update Card.
     * @param {String} id Card ID
     * @param {module:api/CardApi~v1CustomersIdSourcesIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GithubComDriver005GatewayPaymentCardCard}
     */
    v1CustomersIdSourcesIdPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdSourcesIdPost");
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
      let returnType = GithubComDriver005GatewayPaymentCardCard;
      return this.apiClient.callApi(
        '/v1/customers/{id}/sources/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
