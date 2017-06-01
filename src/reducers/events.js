import {
  FETCH_EVENTS,
} from 'actions/types';

const initialState = {
  events: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return { ...state, events: action.payload.data };
    default:
      return state;
  }
}

export const mapStateToProps = state => ({
  events: state.events.events,
  latestEvent: state.events.events[state.events.events.length - 1],
});
