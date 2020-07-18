import axiosApi from "../../axiosApi";
import {push} from "connected-react-router";
import {toast} from "react-toastify";

export const GET_CAFES_REQUEST = 'GET_CAFES_REQUEST';
export const GET_CAFES_SUCCESS = 'GET_CAFES_SUCCESS';
export const GET_CAFES_FAILURE = 'GET_CAFES_FAILURE';

export const GET_CAFE_REQUEST = 'GET_CAFE_REQUEST';
export const GET_CAFE_SUCCESS = 'GET_CAFE_SUCCESS';
export const GET_CAFE_FAILURE = 'GET_CAFE_FAILURE';

export const POST_CAFE_REQUEST ='POST_CAFE_REQUEST';
export const POST_CAFE_SUCCESS ='POST_CAFE_SUCCESS';
export const POST_CAFE_FAILURE ='POST_CAFE_FAILURE';

export const DELETE_CAFE_REQUEST ='DELETE_CAFE_REQUEST';
export const DELETE_CAFE_SUCCESS ='DELETE_CAFE_SUCCESS';
export const DELETE_CAFE_FAILURE ='DELETE_CAFE_FAILURE';

export const getCafesRequest = () => ({type: GET_CAFES_REQUEST});
export const getCafesSuccess = cafes => ({type: GET_CAFES_SUCCESS, cafes});
export const getCafesFailure = error => ({type: GET_CAFES_FAILURE, error});

export const getCafeRequest = () => ({type: GET_CAFE_REQUEST});
export const getCafeSuccess = cafe => ({type: GET_CAFE_SUCCESS, cafe});
export const getCafeFailure = error => ({type: GET_CAFE_FAILURE, error});

export const postCafeRequest = () => ({type: POST_CAFE_REQUEST});
export const postCafeSuccess = () => ({type: POST_CAFE_SUCCESS, });
export const postCafeFailure = error => ({type: POST_CAFE_FAILURE, error});

export const deleteCafeRequest = () => ({type: DELETE_CAFE_REQUEST});
export const deleteCafeSuccess = () => ({type: DELETE_CAFE_SUCCESS});
export const deleteCafeFailure = error => ({type: DELETE_CAFE_FAILURE, error});

export const getCafes = () => {
    return async dispatch => {
        try {
            dispatch(getCafesRequest());
            const response = await axiosApi.get('/cafes');
            dispatch(getCafesSuccess(response.data));
        } catch (e) {
            dispatch(getCafesFailure(e.response.data.message));
        }
    }
};

export const getCafe = id => {
    return async dispatch => {
        try {
            dispatch(getCafeRequest());
            const response = await axiosApi.get(`/cafes/${id}`);
            dispatch(getCafeSuccess(response.data));
        } catch (e) {
            dispatch(getCafeFailure(e.response.data.message));
        }
    }
};

export const postCafe = cafe => {
    return async dispatch => {
        try {
            dispatch(postCafeRequest());
            await axiosApi.post('/cafes', cafe);
            dispatch(push("/"));
            toast.success("Cafe was created successfully");
            dispatch(postCafeSuccess());
        } catch (e) {
            dispatch(postCafeFailure(e.response.data.message));
        }
    }
};

export const deleteCafe = id => {
    return async dispatch => {
        try {
            dispatch(deleteCafeRequest());
            await axiosApi.delete(`/cafes/${id}`);
            dispatch(deleteCafeSuccess());
        } catch (e) {
            dispatch(deleteCafeFailure(e.response.data.message));
        }
    }
};