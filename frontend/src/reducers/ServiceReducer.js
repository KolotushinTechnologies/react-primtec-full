import {
    ALL_SERVICE_FAIL,
    ALL_SERVICE_REQUEST,
    ALL_SERVICE_SUCCESS,
    CLEAR_ERRORS,
    SERVICE_DETAILS_FAIL,
    SERVICE_DETAILS_REQUEST,
    SERVICE_DETAILS_SUCCESS,
    ADMIN_SERVICE_REQUEST,
    ADMIN_SERVICE_SUCCESS,
    ADMIN_SERVICE_FAIL,
    NEW_SERVICE_REQUEST,
    NEW_SERVICE_SUCCESS,
    NEW_SERVICE_FAIL,
    NEW_SERVICE_RESET,
    DELETE_SERVICE_REQUEST,
    UPDATE_SERVICE_REQUEST,
    DELETE_SERVICE_SUCCESS,
    UPDATE_SERVICE_SUCCESS,
    DELETE_SERVICE_FAIL,
    UPDATE_SERVICE_FAIL,
    DELETE_SERVICE_RESET,
    UPDATE_SERVICE_RESET,
} from "../constans/ServiceConstants";

export const servicesReducer = (state = { services: [] }, action) => {
    switch (action.type) {
        case ALL_SERVICE_REQUEST:
        case ADMIN_SERVICE_REQUEST:
          return {
            loading: true,
            services: [],
          };
        case ALL_SERVICE_SUCCESS:
          return {
            loading: false,
            services: action.payload.services,
            servicesCount: action.payload.servicesCount,
            resultPerPage: action.payload.resultPerPage,
            filteredServicesCount: action.payload.filteredServicesCount,
          };
    
        case ADMIN_SERVICE_SUCCESS:
          return {
            loading: false,
            services: action.payload,
          };
    
        case ALL_SERVICE_FAIL:
        case ADMIN_SERVICE_FAIL:
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

// New Service ----Admin
export const newServiceReducer = (state = { service: {} }, action) => {
    switch (action.type) {
      case NEW_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_SERVICE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          service: action.payload.service,
        };
      case NEW_SERVICE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case NEW_SERVICE_RESET:
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

// Delete Service
export const deleteServiceReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_SERVICE_REQUEST:
      case UPDATE_SERVICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_SERVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_SERVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_SERVICE_FAIL:
      case UPDATE_SERVICE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case DELETE_SERVICE_RESET:
        return {
          ...state,
          isDeleted: false,
        };
      case UPDATE_SERVICE_RESET:
        return {
          ...state,
          isUpdated: false,
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
