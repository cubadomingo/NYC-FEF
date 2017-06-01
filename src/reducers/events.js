import _ from 'lodash';
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_LAST_EVENT,
} from 'actions/types';

const initialState = {
  events: {},
  latestEvent: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT:
      return { ...state, events: { [action.payload.id]: action.payload } };
    case FETCH_EVENTS:
      return { events: _.mapKeys(action.payload, 'id') };
    case FETCH_LAST_EVENT:
      return { ...state, latestEvent: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = (state, ownProps) => ({
  authenticated: state.authenticate.authenticated,
  events: state.events.events,
  event: state.events.events[ownProps.match.params.id],
  latestEvent: state.events.latestEvent,
});
