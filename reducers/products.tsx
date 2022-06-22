import { FETCH, CREATE, UPDATE, DELETE } from '@variabels/types';
import { AnyAction } from 'redux';

export default (products = [], action: AnyAction) => {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return action.payload;
        case 'CREATE_PRODUCT':
            return [...products, action.payload];
        case 'UPDATE_PRODUCT':
            return products.map((post: any) => (post.id === action.payload.id ? action.payload : post));
        case 'DELETE_PRODUCT':
            return products.filter((post: any) => post.id !== action.payload);
        default:
            return products;
    }
};