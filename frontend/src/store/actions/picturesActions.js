import axiosApi from "../../axiosApi";

export const GET_PICTURES_SUCCESS = 'GET_PICTURES_SUCCESS';

export const POST_PICTURES_SUCCESS = 'POST_PICTURES_SUCCESS';

export const getPicturesSuccess = pictures => ({type: GET_PICTURES_SUCCESS, pictures});

export const postPicturesSuccess = () => ({type: POST_PICTURES_SUCCESS});

export const getPictures = id => {
    return async dispatch => {
        const response = await axiosApi.get(`/pictures/${id}`);
        dispatch(getPicturesSuccess(response.data));
    }
};

export const postPicture = (picture, id) => {
    return async dispatch => {
        await axiosApi.post(`/pictures/${id}`, picture);
        dispatch(postPicturesSuccess());
        dispatch(getPictures(id));
    }
};