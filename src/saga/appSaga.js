import { call, put, takeEvery } from 'redux-saga/effects';
import {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAILURE,
} from '../constants';
import getData from '../api';

export function* apiSideEffect() {
	try {
		const data = yield call(getData);
		yield put({ type: FETCHING_DATA_SUCCESS, data: data });
	} catch (e) {
		yield put({ type: FETCHING_DATA_FAILURE, data: e.message });
	}
}

export function* watchApp() {
	yield takeEvery(FETCHING_DATA, apiSideEffect);
}