import { CREATE_CATEGORY, CREATE_SALARY, CREATE_LOCATION, SHOW_LOADER, HIDE_LOADER, HIDE_ALERT, SHOW_ALERT } from "./types";
const apikeyLocation = 'e26cec2d0bb949';

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

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function createLocation() {
  const urlLocation = `https://ipinfo.io/json?token=${apikeyLocation}`;
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch(urlLocation);
    const location = await response.json();
    dispatch({ type: CREATE_LOCATION, payload: location })
    dispatch(hideLoader());
  }
}