import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MEAL_PENDING,
  REQUEST_MEAL_SUCCESS,
  REQUEST_MEAL_FAILED,
  REQUEST_RANDOM_MEAL_FAILED,
  REQUEST_RANDOM_MEAL_PENDING,
  REQUEST_RANDOM_MEAL_SUCCESS
  //   REQUEST_VIEW_MEAL_FAILED,
  //   REQUEST_VIEW_MEAL_PENDING,
  //   REQUEST_VIEW_MEAL_SUCCESS
} from "./constants";

const initalStateSearch = {
  searchField: ""
};

export const searchMeals = (state = initalStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initalStateRequestMeal = {
  isPending: false,
  meals: [],
  error: ""
};

export const requestMeal = (state = initalStateRequestMeal, action = {}) => {
  switch (action.type) {
    case REQUEST_MEAL_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_MEAL_SUCCESS:
      return Object.assign({}, state, { isPending: false, meals: action.payload });
    case REQUEST_MEAL_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.error
      });
    default:
      return state;
  }
};

// const initialStateRandomMeal = {
//   isPending: false,
//   meals: [],
//   error: ""
// };

export const requestRandomMeal = (state = initalStateRequestMeal, action = {}) => {
  switch (action.type) {
    case REQUEST_RANDOM_MEAL_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_RANDOM_MEAL_SUCCESS:
      return Object.assign({}, state, { isPending: false, meals: action.payload});
    case REQUEST_RANDOM_MEAL_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.error
      });
    default:
      return state;
  }
};