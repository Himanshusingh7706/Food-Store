// Action creaters are defind
//This Will allow us to use Axios to make HTTP requests
import axios from "axios";
import {
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  ALL_RESTAURANTS_FAIL,
  CLEAR_ERRORS,
  SORT_BY_RATING,
  SORT_BY_REVIEW,
  TOGGLE_VEG_ONLY,
} from "../constants/restaurantConstant";

export const getRestaurants = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_RESTAURANTS_REQUEST });
    let link = "/api/v1/eats/stores";
    const { data } = await axios.get(link);
    const { restaurants, count } = data;
    dispatch({
      type: ALL_RESTAURANTS_SUCCESS,
      payload: { restaurants, count },
    });
  } catch (error) {
    dispatch({
      type: ALL_RESTAURANTS_FAIL,
      payload: error.response.data.massage,
    });
  }
};
export const sortByRating = () => {
  return {
    type: SORT_BY_RATING,
  };
};

export const sortByReview = () => {
  return {
    type: SORT_BY_REVIEW,
  };
};

export const toggleVegOnly = (dispatch) => {
  return {
    type: TOGGLE_VEG_ONLY,
  };
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
