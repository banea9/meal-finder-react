import {
  CHANGE_SEARCH_FIELD,
  REQUEST_MEAL_PENDING,
  REQUEST_MEAL_SUCCESS,
  REQUEST_MEAL_FAILED,
  REQUEST_RANDOM_MEAL_FAILED,
  REQUEST_RANDOM_MEAL_PENDING,
  REQUEST_RANDOM_MEAL_SUCCESS,
  REQUEST_VIEW_MEAL_FAILED,
  REQUEST_VIEW_MEAL_PENDING,
  REQUEST_VIEW_MEAL_SUCCESS
} from "./constants";

//reducer and inital state for setSearchField action

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

// reducer and initia; state for requestMeal action

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
      return Object.assign({}, state, {
        isPending: false,
        meals: action.payload
      });
    case REQUEST_MEAL_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.error
      });
    case REQUEST_RANDOM_MEAL_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_RANDOM_MEAL_SUCCESS:
      return Object.assign({}, state, {
        isPending: false,
        meals: action.payload
      });
    case REQUEST_RANDOM_MEAL_FAILED:
      return Object.assign({}, state, {
        isPending: false,
        error: action.error
      });
    default:
      return state;
  }
};

//reducer and inital state for the requestRandomMeal action

// const initalStateRandomMeal = {
//   isPending: false,
//   randomMeal: [],
//   error: ""
// };
// export const requestRandomMeal = (
//   state = initalStateRandomMeal,
//   action = {}
// ) => {
//   switch (action.type) {
//     case REQUEST_RANDOM_MEAL_PENDING:
//       return Object.assign({}, state, { isPending: true });
//     case REQUEST_RANDOM_MEAL_SUCCESS:
//       return Object.assign({}, state, {
//         isPending: false,
//         meals: action.payload
//       });
//     case REQUEST_RANDOM_MEAL_FAILED:
//       return Object.assign({}, state, {
//         isPending: false,
//         error: action.error
//       });
//     default:
//       return state;
//   }
// };
///////////

//reducer and initalstate for the requestViewMeal action
const initalStateViewMeal = {
  meal: {},
  isPending: false
};

export const requestViewMeal = (state = initalStateViewMeal, action = {}) => {
  switch (action.type) {
    case REQUEST_VIEW_MEAL_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_VIEW_MEAL_SUCCESS:
      const ingredientsArr = [];
      for (let i = 1; i <= 20; i++) {
        if (action.payload[`strIngredient${i}`]) {
          ingredientsArr.push(
            `${action.payload[`strIngredient${i}`]} - ${
              action.payload[`strMeasure${i}`]
            } `
          );
        }
      }
      return Object.assign({}, state, {
        meal: {
          name: action.payload.strMeal,
          category: action.payload.strCategory,
          area: action.payload.strArea,
          photoSrc: action.payload.strMealThumb,
          instructions: action.payload.strInstructions,
          ingredients: ingredientsArr,
          video: action.payload.strYoutube
        },
        isPending: false
      });
    case REQUEST_VIEW_MEAL_FAILED:
      return Object.assign({}, state, { meal: {}, isPending: false });
    default:
      return state;
  }
};
