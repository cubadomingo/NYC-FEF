import _ from 'lodash';
import {
  FETCH_SCHOLARSHIPS,
  FETCH_LAST_SCHOLARSHIP,
  FETCH_SCHOLARSHIP,
  SCHOLARSHIP_SUBMIT_SUCCESS,
  SCHOLARSHIP_EDIT_SUCCESS,
  SCHOLARSHIP_DELETE_SUCCESS,
} from 'actions/types';

const initialState = {
  data: {},
  latestScholarship: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHOLARSHIP:
      return { ...state, data: { [action.payload.id]: action.payload } };
    case FETCH_SCHOLARSHIPS:
      return { data: _.mapKeys(action.payload, 'id') };
    case FETCH_LAST_SCHOLARSHIP:
      return { ...state, latestScholarship: action.payload };
    case SCHOLARSHIP_SUBMIT_SUCCESS:
      return { ...state, submitSuccess: true, newId: action.payload };
    case SCHOLARSHIP_EDIT_SUCCESS:
      return { ...state, editSuccess: true, editId: action.payload };
    case SCHOLARSHIP_DELETE_SUCCESS: {
      return {
        ...state,
        data: _.omit(state.data, action.payload),
        deleteSuccess: true,
      };
    }
    default:
      return state;
  }
}

export const mapStateToProps = ({ scholarships, authenticate }, ownProps) => ({
  authenticated: authenticate.authenticated,
  scholarship: scholarships.data[ownProps.match.params.id],
  scholarships: scholarships.data,
  latestScholarship: scholarships.latestScholarship,
  newId: scholarships.newId,
  editId: scholarships.editId,
  editSuccess: scholarships.editSuccess,
  deleteSuccess: scholarships.deleteSuccess,
  initialValues: scholarships.data[ownProps.match.params.id],
  submitSuccess: scholarships.submitSuccess,
});
