import { SET_USERS } from '../actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return action.payload.users;
        }

        default:
            return state;
    }
};

export default userReducer;
