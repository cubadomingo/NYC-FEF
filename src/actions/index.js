import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_LAST_EVENT,
} from 'actions/types';

const ROOT_URL = 'http://localhost:3000/api/v1';

export function fetchEvent(id) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/events/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_EVENT, payload: res.data.event[0] });
    });
  };
}

export function fetchLatestEvent() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/events`)
    .then((res) => {
      const event = res.data.events[res.data.events.length - 1];
      dispatch({ type: FETCH_LAST_EVENT, payload: event });
    });
  };
}

export function fetchEvents() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/events`)
    .then((res) => {
      dispatch({ type: FETCH_EVENTS, payload: res.data.events });
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
