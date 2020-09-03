import { CREATE_CATEGORY, CREATE_SALARY, CREATE_LOCATION } from "./types";

const initialState = {
  categories: [],
  salary: "",
  locations: []
};
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      // return { ...state, categories: [...state.categories, action.payload] }
      return { ...state, categories: state.categories.concat([action.payload]) }
    case CREATE_SALARY:
      return { ...state, salary: state.salary.concat([action.payload]) }
    case CREATE_LOCATION:
      return { ...state, locations: action.payload }
    default: return state

  }
};