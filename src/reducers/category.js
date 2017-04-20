import {
  TOGGLE_CATEGORY,
} from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
