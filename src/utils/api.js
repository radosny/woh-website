import {call} from 'redux-saga/effects';

import config from '../config';

export function* parseResponse(response) {
    return yield response.json();
}

export function* prepareResponse(response) {
    if (response.status === 200) {
        return yield parseResponse(response);
    } else {
        var error = new Error(response.statusText);
        throw error;
    }
}

export function* get(url) {
    let response;

    try {
        response = yield call(fetch, url);
    } catch(e) {
        throw e;
    }
    return yield prepareResponse(response);
}

export function* getCountries() {
    return yield get(`${config.API_BASE_URL}\countries`);
}
