import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_EVENTS,
} from 'actions/types';

const ROOT_URL = 'http://localhost:3000/api/v1';

export function fetchEvents() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/events`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: FETCH_EVENTS, payload: res.data });
    });
  };
}

export function signIn({ username, password }) {
  return function (dispatch) {
    return axios.post(`${ROOT_URL}/authenticate`, { username, password })
    .then((res) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', res.data.token);
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
        payload: err.response.data.message,
      });
    });
  };
}

export function signOut() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
}
