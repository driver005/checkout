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
import CustomerCustomer from '../model/CustomerCustomer';

/**
* Customer service.
* @module api/CustomerApi
* @version 2.0
*/
export default class CustomerApi {

    /**
    * Constructs a new CustomerApi. 
    * @alias module:api/CustomerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1CustomersGet operation.
     * @callback module:api/CustomerApi~v1CustomersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerCustomer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing Customers
     * Get all existing Customers.
     * @param {module:api/CustomerApi~v1CustomersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerCustomer>}
     */
    v1CustomersGet(callback) {
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
      let returnType = [CustomerCustomer];
      return this.apiClient.callApi(
        '/v1/customers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdDelete operation.
     * @callback module:api/CustomerApi~v1CustomersIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete Customer by given ID
     * Delete Customer by given ID.
     * @param {String} id Customer ID
     * @param {module:api/CustomerApi~v1CustomersIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    v1CustomersIdDelete(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdDelete");
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
        '/v1/customers/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdGet operation.
     * @callback module:api/CustomerApi~v1CustomersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Customer by given ID or 404 error.
     * Get Customer by given ID or 404 error.
     * @param {String} id Customer ID
     * @param {module:api/CustomerApi~v1CustomersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerCustomer}
     */
    v1CustomersIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdGet");
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
      let returnType = CustomerCustomer;
      return this.apiClient.callApi(
        '/v1/customers/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdPost operation.
     * @callback module:api/CustomerApi~v1CustomersIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update Customer
     * Update Customer.
     * @param {String} id Customer ID
     * @param {module:api/CustomerApi~v1CustomersIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerCustomer}
     */
    v1CustomersIdPost(id, callback) {
      let postBody = id;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdPost");
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
      let returnType = CustomerCustomer;
      return this.apiClient.callApi(
        '/v1/customers/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdTaxIdsGet operation.
     * @callback module:api/CustomerApi~v1CustomersIdTaxIdsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CustomerCustomer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get all existing Customers
     * Get all existing Customers.
     * @param {module:api/CustomerApi~v1CustomersIdTaxIdsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CustomerCustomer>}
     */
    v1CustomersIdTaxIdsGet(callback) {
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
      let returnType = [CustomerCustomer];
      return this.apiClient.callApi(
        '/v1/customers/{id}/tax_ids', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdTaxIdsPost operation.
     * @callback module:api/CustomerApi~v1CustomersIdTaxIdsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new Customer
     * Create a new Customer.
     * @param {module:api/CustomerApi~v1CustomersIdTaxIdsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerCustomer}
     */
    v1CustomersIdTaxIdsPost(callback) {
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
      let returnType = CustomerCustomer;
      return this.apiClient.callApi(
        '/v1/customers/{id}/tax_ids', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdTaxIdsTaxIdDelete operation.
     * @callback module:api/CustomerApi~v1CustomersIdTaxIdsTaxIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * delete Customer by given ID
     * Delete Customer by given ID.
     * @param {String} taxId Tax ID
     * @param {String} id Customer ID
     * @param {module:api/CustomerApi~v1CustomersIdTaxIdsTaxIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    v1CustomersIdTaxIdsTaxIdDelete(taxId, id, callback) {
      let postBody = id;
      // verify the required parameter 'taxId' is set
      if (taxId === undefined || taxId === null) {
        throw new Error("Missing the required parameter 'taxId' when calling v1CustomersIdTaxIdsTaxIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdTaxIdsTaxIdDelete");
      }

      let pathParams = {
        'tax_id': taxId
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
        '/v1/customers/{id}/tax_ids/{tax_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersIdTaxIdsTaxIdGet operation.
     * @callback module:api/CustomerApi~v1CustomersIdTaxIdsTaxIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get Customer by given ID or 404 error.
     * Get Customer by given ID or 404 error.
     * @param {String} id Customer ID
     * @param {String} taxId Tax ID
     * @param {module:api/CustomerApi~v1CustomersIdTaxIdsTaxIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerCustomer}
     */
    v1CustomersIdTaxIdsTaxIdGet(id, taxId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v1CustomersIdTaxIdsTaxIdGet");
      }
      // verify the required parameter 'taxId' is set
      if (taxId === undefined || taxId === null) {
        throw new Error("Missing the required parameter 'taxId' when calling v1CustomersIdTaxIdsTaxIdGet");
      }

      let pathParams = {
        'id': id,
        'tax_id': taxId
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
      let returnType = CustomerCustomer;
      return this.apiClient.callApi(
        '/v1/customers/{id}/tax_ids/{tax_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1CustomersPost operation.
     * @callback module:api/CustomerApi~v1CustomersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * create a new Customer
     * Create a new Customer.
     * @param {module:api/CustomerApi~v1CustomersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerCustomer}
     */
    v1CustomersPost(callback) {
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
      let returnType = CustomerCustomer;
      return this.apiClient.callApi(
        '/v1/customers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}