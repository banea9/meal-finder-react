import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MEAL_PENDING,
  REQUEST_MEAL_FAILED,
  REQUEST_MEAL_SUCCESS,
  REQUEST_RANDOM_MEAL_FAILED,
  REQUEST_RANDOM_MEAL_PENDING,
  REQUEST_RANDOM_MEAL_SUCCESS
  //   REQUEST_VIEW_MEAL_FAILED,
  //   REQUEST_VIEW_MEAL_PENDING,
  //   REQUEST_VIEW_MEAL_SUCCESS
} from "./constants";

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestMeal = (searchField) => (dispatch) => {
  dispatch({ type: REQUEST_MEAL_PENDING });
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchField}`
  )
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      dispatch({ type: REQUEST_MEAL_SUCCESS, payload: data.meals })
    })
    .catch(err => dispatch({ type: REQUEST_MEAL_FAILED, payload: err }));
};

export const requestRandomMeal = () => dispatch => {
  dispatch({ type: REQUEST_RANDOM_MEAL_PENDING });
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(resp => resp.json())
    .then(data => dispatch({ type: REQUEST_RANDOM_MEAL_SUCCESS, payload: data.meals }))
    .catch(err => dispatch({ type: REQUEST_RANDOM_MEAL_FAILED, payload: err }));
};
