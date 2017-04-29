import {
  SHOW_EVENTS,
  SHOW_INITIATIVES,
  SHOW_FUNDRAISERS,
  SHOW_SCHOLARSHIPS,
  FETCH_EVENTS,
  FETCH_INITIATIVES,
  FETCH_FUNDRAISERS,
  FETCH_SCHOLARSHIPS,
  SET_INITIAL_STYLES,
} from './types';

export function toggleEvents(show) {
  return {
    type: SHOW_EVENTS,
    payload: show,
  };
}

export function toggleInitiatives(show) {
  return {
    type: SHOW_INITIATIVES,
    payload: show,
  };
}

export function toggleFundraisers(show) {
  return {
    type: SHOW_FUNDRAISERS,
    payload: show,
  };
}

export function toggleScholarships(show) {
  return {
    type: SHOW_SCHOLARSHIPS,
    payload: show,
  };
}

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
