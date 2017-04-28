import {
  SHOW_EVENTS,
  SHOW_INITIATIVES,
  SHOW_FUNDRAISERS,
  SHOW_SCHOLARSHIPS,
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
