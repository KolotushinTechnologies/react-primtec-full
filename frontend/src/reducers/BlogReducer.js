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
  
  export const postsReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
      case ALL_POST_REQUEST:
      case ADMIN_POST_REQUEST:
        return {
          loading: true,
          posts: [],
        };
      case ALL_POST_SUCCESS:
        return {
          loading: false,
          posts: action.payload.posts,
          postsCount: action.payload.postsCount,
          resultPerPage: action.payload.resultPerPage,
          filteredPostsCount: action.payload.filteredPostsCount,
        };
  
      case ADMIN_POST_SUCCESS:
        return {
          loading: false,
          products: action.payload,
        };
  
      case ALL_POST_FAIL:
      case ADMIN_POST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export const postDetailsReducer = (state = { post: {} }, action) => {
    switch (action.type) {
      case POST_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case POST_DETAILS_SUCCESS:
        return {
          loading: false,
          post: action.payload,
        };
      case POST_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
  // New Product ----Admin
  export const newPostReducer = (state = { post: {} }, action) => {
    switch (action.type) {
      case NEW_POST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_POST_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          post: action.payload.post,
        };
      case NEW_POST_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_POST_RESET:
        return {
          ...state,
          success: false,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };
  
// Delete Product
//   export const deleteProductReducer = (state = {}, action) => {
//     switch (action.type) {
//       case DELETE_PRODUCT_REQUEST:
//       case UPDATE_PRODUCT_REQUEST:
//         return {
//           ...state,
//           loading: true,
//         };
//       case DELETE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isDeleted: action.payload,
//         };
  
//       case UPDATE_PRODUCT_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           isUpdated: action.payload,
//         };
//       case DELETE_PRODUCT_FAIL:
//       case UPDATE_PRODUCT_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload,
//         };
//       case DELETE_PRODUCT_RESET:
//         return {
//           ...state,
//           isDeleted: false,
//         };
//       case UPDATE_PRODUCT_RESET:
//         return {
//           ...state,
//           isUpdated: false,
//         };
//       case CLEAR_ERRORS:
//         return {
//           ...state,
//           error: null,
//         };
//       default:
//         return state;
//     }
//   };
