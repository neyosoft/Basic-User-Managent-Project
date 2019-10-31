import { RESET_USERS, ADD_USER } from '../actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESET_USERS: {
            return initialState;
        }

        case ADD_USER: {
            const { user } = action.payload;
            return [...state, user];
        }

        default:
            return state;
    }
};

export default userReducer;
