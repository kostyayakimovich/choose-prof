import { CREATE_CATEGORY, CREATE_SALARY } from "./types";

export function createCategory(category) {
  return {
    type: CREATE_CATEGORY,
    payload: category
  }
}
export function createSalary(salary) {
  return {
    type: CREATE_SALARY,
    payload: salary
  }
}