import { FETCH, CREATE, UPDATE, DELETE } from '@variabels/types';
import { AnyAction } from 'redux';

export default (shipping = [], action: AnyAction) => {
    switch (action.type) {
        case 'FETCH_SHIPPING':
            return action.payload;
        case 'CREATE_SHIPPING':
            return [...shipping, action.payload];
        case 'UPDATE_SHIPPING':
            return shipping.map((method: any) => (method.label === action.payload.label ? action.payload : method));
        case 'DELETE_SHIPPING':
            return shipping.filter((method: any) => method.label !== action.payload);
        default:
            return shipping;
    }
};