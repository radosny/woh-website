import moment from 'moment-timezone';

export const INITIAL_STATE = {
    startDate: moment().startOf('year'),
    endDate: moment().endOf('year'),
    currentDate: moment(),
    countries: []
};

export const REDUCER_NAME = 'baseReducer'
