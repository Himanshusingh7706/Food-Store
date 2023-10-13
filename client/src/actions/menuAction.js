import axios from 'axios';
import{
    GET_MENU_REQUEST,
    GET_MENU_SUCCESS,
    GET_MENU_FAIL,
}from "../constants/menuConstant.js";

export const getMenus = (id) => async(dispatch, error) => {
    try{
        dispatch({
            type: GET_MENU_REQUEST
        });
        const response = await axios.get(`/api/v1/eats/stores/${id}/menus`);
        console.log(response);
        dispatch({
            type: GET_MENU_SUCCESS,
            payload: response.data.data[0].menu,
        });  
    }catch{
        dispatch ({
            type: GET_MENU_FAIL,
            payload: error.message,
        });
    }
};