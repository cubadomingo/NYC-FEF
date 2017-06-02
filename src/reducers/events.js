import _ from 'lodash';
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_LAST_EVENT,
  EVENT_SUBMIT_SUCCESS,
  EVENT_DELETE_SUCCESS,
} from 'actions/types';

const initialState = {
  events: {},
  latestEvent: [],
  newPost: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT:
      return { ...state, events: { [action.payload.id]: action.payload } };
    case FETCH_EVENTS:
      return { events: _.mapKeys(action.payload, 'id') };
    case FETCH_LAST_EVENT:
      return { ...state, latestEvent: action.payload };
    case EVENT_SUBMIT_SUCCESS:
      return { ...state, submitSuccess: true, newPostId: action.payload.id };
    case EVENT_DELETE_SUCCESS:
      return { ...state, deleteSuccess: true };
    default:
      return state;
  }
}

export const mapStateToProps = (state, ownProps) => ({
  authenticated: state.authenticate.authenticated,
  events: state.events.events,
  event: state.events.events[ownProps.match.params.id],
  latestEvent: state.events.latestEvent,
  deleteSuccess: state.events.deleteSuccess,
  submitSuccess: state.events.submitSuccess,
  newPostId: state.events.newPostId,
});
