import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  app: appReducer
}
);