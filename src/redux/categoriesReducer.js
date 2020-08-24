import { CREATE_CATEGORY } from "./types";

const initialState = {
  categories: [],
  salary: ""
};
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      // return { ...state, categories: [...state.categories, action.payload] }
      return { ...state, categories: state.categories.concat([action.payload]) }
    default: return state

  }
};