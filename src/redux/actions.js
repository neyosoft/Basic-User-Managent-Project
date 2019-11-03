import { ADD_USER, SET_USERS } from './actionTypes';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: { user }
});

export const setUsersAction = (users) => ({
    type: SET_USERS,
    payload: { users }
});
