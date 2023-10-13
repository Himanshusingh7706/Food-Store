//Action creators are defined

//this will allow you to use Axios to make HHTP requests
import axios from "axios";

import {
    ALL_RESTARANTS_REQUEST,
    ALL_RESTARANTS_SUCCESS,
    ALL_RESTARANTS_FAIL,
    CLEAR_ERRORS,
    SORT_BY_RATINGS,
    SORT_BY_REVIWS,
    TOGGLE_VEG_ONLY,
}from "../constants/restaurantConstant";

export const getRestaurants =() => async(dispatch) =>{
    try{
        dispatch({type:ALL_RESTARANTS_REQUEST});
        let link ="/api/v1/eats/stores";
        const {data} = await axios.get(link);
        const {restaurants, count} = data;
        dispatch({
            type: ALL_RESTARANTS_SUCCESS,
            payload: {restaurants, count},
        });

    }catch(error){
        dispatch({
            type: ALL_RESTARANTS_FAIL,
            payload: error.response.data.message,
        });
    }

};

export const sortByRatings = () => {
    return{
        type: SORT_BY_RATINGS,
    }
}

export const sortByReviews = () => {
    return{
        type: SORT_BY_REVIWS,
    }
}

export const toggleVegOnly = () => (dispatch) => {
    dispatch({type: TOGGLE_VEG_ONLY});
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};

