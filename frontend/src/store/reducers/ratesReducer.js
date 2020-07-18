import {GET_RATE_SUCCESS, GET_USERS_RATE_SUCCESS} from "../actions/ratesActions";

const initialState = {
    rate: null,
    usersRate: null
};

const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RATE_SUCCESS:
            return {...state, rate: action.rate};
        case GET_USERS_RATE_SUCCESS:
            return {...state, usersRate: action.rate};
        default:
            return state;
    }
};

export default ratesReducer;