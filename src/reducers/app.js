import {
  SET_INITIAL_STYLES,
} from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_INITIAL_STYLES:
      return { ...state, initial_styles_set: action.payload };
    default:
      return state;
  }
}
