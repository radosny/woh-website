import {compose} from 'redux';
import {REDUCER_NAME} from '../constants';

export const getState = state => state[REDUCER_NAME];

export const getStartDate = compose(
    state => state.get('startDate'),
    getState
);
export const getEndDate = compose(
    state => state.get('endDate'),
    getState
);
export const getCurrentDate = compose(
    state => state.get('currentDate'),
    getState
);
export const getCountries = compose(
    countries => countries.map(country => ({
        value: country.id,
        children: country.text
    })),
    state => state.get('countries'),
    getState
);
