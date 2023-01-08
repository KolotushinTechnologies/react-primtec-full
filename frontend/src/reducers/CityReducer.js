import {
    CHANGE_CITY
  } from "../constans/CityConstants";
  
  export const cityReducer = (
    state = { cityState: "" },
    action
  ) => {
    console.log(1);
    switch (action.type) {
      case CHANGE_CITY:
        console.log(3);
        return {
            ...state,
            cityState: action.payload
        };
  
      default:
        return state;

    }
};

