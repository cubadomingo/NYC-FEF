import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_SCHOLARSHIP,
  FETCH_SCHOLARSHIPS,
  FETCH_LAST_EVENT,
  FETCH_LAST_SCHOLARSHIP,
  EVENT_SUBMIT_SUCCESS,
  SCHOLARSHIP_SUBMIT_SUCCESS,
  EVENT_DELETE_SUCCESS,
  EVENT_EDIT_SUCCESS,
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

export function fetchScholarship(id) {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/scholarships/${id}`)
    .then((res) => {
      dispatch({ type: FETCH_SCHOLARSHIP, payload: res.data.scholarship[0] });
    });
  };
}

export function deleteEvent(id) {
  return function (dispatch) {
    axios.delete(`${ROOT_URL}/events/${id}`, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
    .then(() => {
      dispatch({ type: EVENT_DELETE_SUCCESS, payload: id });
    });
  };
}

export function editEvent(data) {
  return function (dispatch) {
    const id = data.id;
    delete data.id;
    delete data.created_at;
    delete data.updated_at;

    axios.put(`${ROOT_URL}/events/${id}`, data, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: EVENT_EDIT_SUCCESS, payload: res.data.event[0].id });
    });
  };
}


export function submitNewEvent(data) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/events`, data, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({ type: EVENT_SUBMIT_SUCCESS, payload: res.data.event[0].id });
    });
  };
}

export function submitNewScholarship(data) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/scholarships`, data, {
      headers: { 'x-access-token': localStorage.getItem('token') },
    })
    .then((res) => {
      dispatch({
        type: SCHOLARSHIP_SUBMIT_SUCCESS,
        payload: res.data.scholarship[0].id,
      });
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

export function fetchLatestScholarship() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/scholarships`)
    .then((res) => {
      const scholarship = res.data.scholarships[
        res.data.scholarships.length - 1
      ];
      dispatch({ type: FETCH_LAST_SCHOLARSHIP, payload: scholarship });
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

export function fetchScholarships() {
  return function (dispatch) {
    axios.get(`${ROOT_URL}/scholarships`)
    .then((res) => {
      dispatch({ type: FETCH_SCHOLARSHIPS, payload: res.data.scholarships });
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
