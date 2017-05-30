import {combineReducers} from 'redux'
import {fromJS} from 'immutable';
import {INITIAL_STATE} from '../constants';
import {ACTIONS} from './actions';

function baseReducer(state = fromJS(INITIAL_STATE), action) {
    switch (action.type) {
        case ACTIONS.SET_COUNTRIES:
            state = state.set('countries', action.data)
            return state;
        default:
            return state
    }
}

export default combineReducers({
    baseReducer
});
