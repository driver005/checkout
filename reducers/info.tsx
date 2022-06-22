import { FETCH, CREATE, UPDATE, DELETE } from '@variabels/types';
import { AnyAction } from 'redux';

export default (info = {}, action: AnyAction) => {
    switch (action.type) {
        case 'SET_INFO':
            return action.payload;
        default:
            return info;
    }
};