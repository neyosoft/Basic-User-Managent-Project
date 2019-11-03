import { put, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { database } from '../../firebase';
import { setUsersAction } from '../actions';

export function* fetchUsers() {
    const channel = new eventChannel((emiter) => {
        const listener = database.ref('/users/').on('value', (snapshot) => {
            if (snapshot.exists()) {
                const mapUser = [];

                snapshot.forEach(function(childSnapshot) {
                    mapUser.push(childSnapshot.val());
                });

                emiter(mapUser);
            }
        });

        return () => {
            listener.off && listener.off();
        };
    });

    while (true) {
        const users = yield take(channel);
        yield put(setUsersAction(users));
    }
}
