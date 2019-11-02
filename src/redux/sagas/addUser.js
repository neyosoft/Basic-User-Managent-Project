import { take } from 'redux-saga/effects';
import { ADD_USER } from '../actionTypes';
import axios from 'axios';

export function* addUser() {
    const { payload } = yield take(ADD_USER);
    const { data } = yield axios.post('https://us-central1-function-testing-01.cloudfunctions.net/users', payload.user);

    console.log('saved data', data);
}
