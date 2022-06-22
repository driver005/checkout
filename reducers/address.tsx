import { FETCH, CREATE, UPDATE, DELETE } from '@variabels/types';
import { AnyAction } from 'redux';

export default (products = [], action: AnyAction) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...products, action.payload];
        case UPDATE:
            return products.map((post: any) => (post.id === action.payload.id ? action.payload : post));
        case DELETE:
            return products.filter((post: any) => post.id !== action.payload);
        default:
            return products;
    }
};