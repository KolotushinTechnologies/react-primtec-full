import axios from "axios";
import {
    ALL_SERVICE_REQUEST,
    ALL_SERVICE_SUCCESS,
    ALL_SERVICE_FAIL,
    ADMIN_SERVICE_REQUEST,
    ADMIN_SERVICE_SUCCESS,
    ADMIN_SERVICE_FAIL,
    NEW_SERVICE_REQUEST,
    NEW_SERVICE_SUCCESS,
    NEW_SERVICE_RESET,
    NEW_SERVICE_FAIL,
    UPDATE_SERVICE_REQUEST,
    UPDATE_SERVICE_SUCCESS,
    UPDATE_SERVICE_RESET,
    UPDATE_SERVICE_FAIL,
    DELETE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    DELETE_SERVICE_RESET,
    DELETE_SERVICE_FAIL,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCESS,
    SERVICE_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constans/ServiceConstants";

export const getServices = (keyword="", currentPage=1, category) => async (dispatch)=>{
    try {
        dispatch({
            type: ALL_SERVICE_REQUEST
        });

       let link = `/api/v2/service?keyword=${keyword}&page=${currentPage}`;
        
       if(category){
        link = `/api/v2/service?keyword=${keyword}&page=${currentPage}&category=${category}`;
       }
        const {data} = await axios.get(link);
  
        dispatch({
            type: ALL_SERVICE_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_SERVICE_FAIL,
            payload: error.response.data.message,
        })
    }
};
