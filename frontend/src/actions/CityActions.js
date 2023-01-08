// Import Engine
import { CHANGE_CITY } from "../constans/CityConstants";

// Change City
export const changeCity = (city) => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_CITY,
    payload: city
  });

  localStorage.setItem("city", JSON.stringify(getState().city.cityState).replace(/['"]+/g, ''));
};
