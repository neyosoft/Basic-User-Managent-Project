import { RESET_USERS, ADD_USER } from './actionTypes';

export const resetUsers = () => ({
    type: RESET_USERS
});

export const addUser = (user) => ({
    type: ADD_USER,
    payload: { user }
});
