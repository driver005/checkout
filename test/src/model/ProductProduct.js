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
import DatabaseDeletedAt from './DatabaseDeletedAt';

/**
 * The ProductProduct model module.
 * @module model/ProductProduct
 * @version 2.0
 */
class ProductProduct {
    /**
     * Constructs a new <code>ProductProduct</code>.
     * @alias module:model/ProductProduct
     */
    constructor() { 
        
        ProductProduct.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductProduct</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductProduct} obj Optional instance to populate.
     * @return {module:model/ProductProduct} The populated <code>ProductProduct</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductProduct();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = DatabaseDeletedAt.constructFromObject(data['deleted_at']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], ['String']);
            }
            if (data.hasOwnProperty('livemode')) {
                obj['livemode'] = ApiClient.convertToType(data['livemode'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('package_dimensions')) {
                obj['package_dimensions'] = ApiClient.convertToType(data['package_dimensions'], 'String');
            }
            if (data.hasOwnProperty('shippable')) {
                obj['shippable'] = ApiClient.convertToType(data['shippable'], 'Boolean');
            }
            if (data.hasOwnProperty('statement_descriptor')) {
                obj['statement_descriptor'] = ApiClient.convertToType(data['statement_descriptor'], 'String');
            }
            if (data.hasOwnProperty('tax_code')) {
                obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'String');
            }
            if (data.hasOwnProperty('unit_label')) {
                obj['unit_label'] = ApiClient.convertToType(data['unit_label'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Number');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductProduct</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductProduct</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // validate the optional field `deleted_at`
        if (data['deleted_at']) { // data not null
          DatabaseDeletedAt.validateJSON(data['deleted_at']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['images'])) {
            throw new Error("Expected the field `images` to be an array in the JSON data but got " + data['images']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['package_dimensions'] && !(typeof data['package_dimensions'] === 'string' || data['package_dimensions'] instanceof String)) {
            throw new Error("Expected the field `package_dimensions` to be a primitive type in the JSON string but got " + data['package_dimensions']);
        }
        // ensure the json data is a string
        if (data['statement_descriptor'] && !(typeof data['statement_descriptor'] === 'string' || data['statement_descriptor'] instanceof String)) {
            throw new Error("Expected the field `statement_descriptor` to be a primitive type in the JSON string but got " + data['statement_descriptor']);
        }
        // ensure the json data is a string
        if (data['tax_code'] && !(typeof data['tax_code'] === 'string' || data['tax_code'] instanceof String)) {
            throw new Error("Expected the field `tax_code` to be a primitive type in the JSON string but got " + data['tax_code']);
        }
        // ensure the json data is a string
        if (data['unit_label'] && !(typeof data['unit_label'] === 'string' || data['unit_label'] instanceof String)) {
            throw new Error("Expected the field `unit_label` to be a primitive type in the JSON string but got " + data['unit_label']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
ProductProduct.prototype['active'] = undefined;

/**
 * @member {String} created_at
 */
ProductProduct.prototype['created_at'] = undefined;

/**
 * @member {module:model/DatabaseDeletedAt} deleted_at
 */
ProductProduct.prototype['deleted_at'] = undefined;

/**
 * @member {String} description
 */
ProductProduct.prototype['description'] = undefined;

/**
 * @member {String} id
 */
ProductProduct.prototype['id'] = undefined;

/**
 * @member {Array.<String>} images
 */
ProductProduct.prototype['images'] = undefined;

/**
 * @member {Boolean} livemode
 */
ProductProduct.prototype['livemode'] = undefined;

/**
 * @member {Object} metadata
 */
ProductProduct.prototype['metadata'] = undefined;

/**
 * @member {String} name
 */
ProductProduct.prototype['name'] = undefined;

/**
 * @member {String} object
 */
ProductProduct.prototype['object'] = undefined;

/**
 * @member {String} package_dimensions
 */
ProductProduct.prototype['package_dimensions'] = undefined;

/**
 * @member {Boolean} shippable
 */
ProductProduct.prototype['shippable'] = undefined;

/**
 * @member {String} statement_descriptor
 */
ProductProduct.prototype['statement_descriptor'] = undefined;

/**
 * @member {String} tax_code
 */
ProductProduct.prototype['tax_code'] = undefined;

/**
 * @member {String} unit_label
 */
ProductProduct.prototype['unit_label'] = undefined;

/**
 * @member {Number} updated
 */
ProductProduct.prototype['updated'] = undefined;

/**
 * @member {String} updated_at
 */
ProductProduct.prototype['updated_at'] = undefined;

/**
 * @member {String} url
 */
ProductProduct.prototype['url'] = undefined;






export default ProductProduct;

