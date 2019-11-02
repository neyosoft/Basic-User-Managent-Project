import { ADD_USER } from '../actionTypes';

const initialState = [];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const { user } = action.payload;
            return [...state, user];
        }

        default:
            return state;
    }
};

export default userReducer;
