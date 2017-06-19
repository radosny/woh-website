import {fork, take, takeLatest, call, put} from 'redux-saga/effects';

import {ACTIONS, setCountries, setVacations} from '../store/actions';
import {getCountries, getVacations} from '../utils/api';

export function* fetchCountries() {
    const countries = yield call(getCountries);
    yield put(setCountries(countries));
}

export function* fetchVacations({data}) {
    const vacationDates = yield call(getVacations, data);
    yield put(setVacations(vacationDates));
}

export function* watchAppInit() {
    yield take(ACTIONS.INITIALIZE);
    yield call(fetchCountries);
};

export function* watchCountrySelect() {
    yield takeLatest(ACTIONS.SET_ACTIVE_COUNTRY, fetchVacations);
};

export default function*() {
    yield [
        fork(watchAppInit),
        fork(watchCountrySelect)
    ];
}
