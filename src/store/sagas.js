import {fork, take, call, put} from 'redux-saga/effects';

import {ACTIONS, setCountries} from '../store/actions';
import {getCountries} from '../utils/api';

export function* fetchCountries() {
    const countries = yield call(getCountries);
    yield put(setCountries(countries));
}

export function* watchAppInit() {
    yield take(ACTIONS.INITIALIZE);
    yield call(fetchCountries);
};

export default function*() {
    yield [
        fork(watchAppInit),
    ];
}
