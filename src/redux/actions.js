import { CREATE_CATEGORY } from "./types";

export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    payload: category
  }
}