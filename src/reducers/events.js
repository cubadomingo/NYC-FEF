import _ from 'lodash';
import {
  FETCH_EVENTS,
  FETCH_EVENT,
  FETCH_LAST_EVENT,
  EVENT_SUBMIT_SUCCESS,
  EVENT_DELETE_SUCCESS,
  EVENT_EDIT_SUCCESS,
} from 'actions/types';

const initialState = {
  data: {},
  latestEvent: [],
  newPost: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT:
      return { ...state, data: { [action.payload.id]: action.payload } };
    case FETCH_EVENTS:
      return { data: _.mapKeys(action.payload, 'id') };
    case FETCH_LAST_EVENT:
      return { ...state, latestEvent: action.payload };
    case EVENT_SUBMIT_SUCCESS:
      return { ...state, submitSuccess: true, newId: action.payload };
    case EVENT_DELETE_SUCCESS: {
      return {
        ...state,
        data: _.omit(state.data, action.payload),
        deleteSuccess: true,
      };
    }
    case EVENT_EDIT_SUCCESS:
      return { ...state, editSuccess: true, editId: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = ({ events, authenticate }, ownProps) => ({
  authenticated: authenticate.authenticated,
  events: events.data,
  event: events.data[ownProps.match.params.id],
  latestEvent: events.latestEvent,
  deleteSuccess: events.deleteSuccess,
  submitSuccess: events.submitSuccess,
  initialValues: events.data[ownProps.match.params.id],
  editSuccess: events.editSuccess,
  editId: events.editId,
  newId: events.newId,
});
