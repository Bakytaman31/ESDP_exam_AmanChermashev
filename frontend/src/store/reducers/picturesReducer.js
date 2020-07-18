import {GET_PICTURES_SUCCESS} from "../actions/picturesActions";

const initialState = {
    pictures: []
};

const picturesReducer = (state = initialState, action) => {
    if (action.type === GET_PICTURES_SUCCESS) {
        return {...state, pictures: action.pictures};
    } else {
        return state;
    }
};

export default picturesReducer;