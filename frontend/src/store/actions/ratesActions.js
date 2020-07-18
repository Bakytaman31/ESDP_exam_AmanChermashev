import axiosApi from "../../axiosApi";

export const GET_RATE_SUCCESS = 'GET_RATE_SUCCESS';

export const GET_USERS_RATE_SUCCESS = 'GET_USERS_RATE_SUCCESS';

export const POST_RAGE_SUCCESS = 'POST_RAGE_SUCCESS';

export const getRateSuccess = rate => ({type:GET_RATE_SUCCESS, rate});
export const getUsersRateSuccess = rate => ({type:GET_USERS_RATE_SUCCESS, rate});
export const postRateSuccess = () => ({type: POST_RAGE_SUCCESS});

export const getRate = id => {
    return async dispatch => {
        const response = await axiosApi.get(`/rates/${id}`);
        dispatch(getRateSuccess(response.data));
    }
};

export const getUsersRate = id => {
    return async dispatch => {
        const response = await axiosApi.get(`/rates/${id}`);
        dispatch(getUsersRateSuccess(response.data));
    }
};

export const postRate = (rate, id) => {
    return async dispatch => {
        await axiosApi.post(`/rates/${id}`, rate);
        dispatch(postRateSuccess());
    }
};

export const deleteRate = id => {
    return async dispatch => {
        await axiosApi.delete(`/rates/${id}`);
    }
};
