import axios from 'axios';
import {
  FETCH_EVENTS,
  FETCH_INITIATIVES,
  FETCH_FUNDRAISERS,
  FETCH_SCHOLARSHIPS,
  SET_INITIAL_STYLES,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from 'actions/types';

export function fetchEvents() {
  return {
    type: FETCH_EVENTS,
    payload: [],
  };
}

export function fetchInitiatives() {
  return {
    type: FETCH_INITIATIVES,
    payload: [],
  };
}

export function fetchFundraisers() {
  return {
    type: FETCH_FUNDRAISERS,
    payload: [],
  };
}

export function fetchScholarships() {
  return {
    type: FETCH_SCHOLARSHIPS,
    payload: [],
  };
}

export function setInitialStyles() {
  const html = document.documentElement.style;
  html.minHeight = '100%';
  html.position = 'relative';
  html.paddingTop = '80px';
  html.paddingBottom = '302px';

  return {
    type: SET_INITIAL_STYLES,
    payload: true,
  };
}

const ROOT_URL = 'http://localhost:3000/api/v1';

export function checkToken() {
  return function (dispatch) {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch({ type: AUTH_USER });
    }
  };
}

export function signIn({ username, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/authenticate`, { username, password })
    .then((res) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', res.data.token);
    })
    .catch(err => (
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.message,
      })
    ));
  };
}

export function signOut() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
