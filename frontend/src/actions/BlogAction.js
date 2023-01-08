import {
    ALL_POST_REQUEST,
    ALL_POST_SUCCESS,
    ALL_POST_FAIL,
    ADMIN_POST_REQUEST,
    ADMIN_POST_SUCCESS,
    ADMIN_POST_FAIL,
    NEW_POST_REQUEST,
    NEW_POST_SUCCESS,
    NEW_POST_RESET,
    NEW_POST_FAIL,
    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constans/BlogConstans";
import axios from "axios";

export const getPosts = (keyword="", currentPage=1) => async (dispatch)=>{
    try {
        dispatch({
            type: ALL_POST_REQUEST
        });
      
        // console.log(city);
  
        let link = `/api/v2/blog/posts?keyword=${keyword}&page=${currentPage}`;
        
        const {data} = await axios.get(link);
  
        dispatch({
            type:ALL_POST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type:ALL_POST_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Products Details
export const getPostDetails = (id) => async (dispatch)=>{
  try {
      dispatch({ type: POST_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v2/blog/post/${id}`);
  
      dispatch({
        type: POST_DETAILS_SUCCESS,
        payload: data.post,
      });
    } catch (error) {
      dispatch({
        type: POST_DETAILS_FAIL,
        payload: error.response.message,
      });
    }
};

export const createPost = (postData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_POST_REQUEST });
    
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const { data } = await axios.post(
          `/api/v2/blog/new-post`,
          postData,
          config
        );
    
        dispatch({
          type: NEW_POST_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: NEW_POST_FAIL,
          payload: error.response.data.message,
        });
      }
};

//   Clearing errors
export const clearErrors= () => async (dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    });
};
