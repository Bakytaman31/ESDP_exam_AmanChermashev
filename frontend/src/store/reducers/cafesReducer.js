import {
    DELETE_CAFE_FAILURE,
    DELETE_CAFE_REQUEST, DELETE_CAFE_SUCCESS,
    GET_CAFE_FAILURE,
    GET_CAFE_REQUEST,
    GET_CAFE_SUCCESS,
    GET_CAFES_FAILURE,
    GET_CAFES_REQUEST,
    GET_CAFES_SUCCESS, POST_CAFE_FAILURE, POST_CAFE_REQUEST, POST_CAFE_SUCCESS
} from "../actions/cafesActions";

const initialState = {
    cafes: [],
    cafe: null,
    getError: null,
    postError: null,
    deleteError: null,
    loading: false
};

const cafesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAFES_REQUEST:
            return {...state, loading: true};
        case GET_CAFES_SUCCESS:
            return {...state, loading: false, cafes: action.cafes};
        case GET_CAFES_FAILURE:
            return {...state, loading: false, getError: action.error};
        case GET_CAFE_REQUEST:
            return {...state, loading: true};
        case GET_CAFE_SUCCESS:
            return {...state, loading: false, cafes: action.cafes};
        case GET_CAFE_FAILURE:
            return {...state, loading: false, getError: action.error};
        case POST_CAFE_REQUEST:
            return {...state, loading: true};
        case POST_CAFE_SUCCESS:
            return {...state, loading: false};
        case POST_CAFE_FAILURE:
            return {...state,loading: false, postError: action.error};
        case DELETE_CAFE_REQUEST:
            return {...state, loading: true};
        case DELETE_CAFE_SUCCESS:
            return {...state, loading: false};
        case DELETE_CAFE_FAILURE:
            return {...state, loading: false, deleteError: action.error};
        default:
            return state;
    }
};

export default cafesReducer;
