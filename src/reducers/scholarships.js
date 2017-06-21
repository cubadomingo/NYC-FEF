import _ from 'lodash';
import {
  FETCH_SCHOLARSHIPS,
  FETCH_LAST_SCHOLARSHIP,
  FETCH_SCHOLARSHIP,
  SCHOLARSHIP_SUBMIT_SUCCESS,
} from 'actions/types';

const initialState = {
  data: {},
  latestScholarship: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SCHOLARSHIP:
      return { ...state, data: { [action.payload.id]: action.payload } };
    case FETCH_SCHOLARSHIPS:
      return { data: _.mapKeys(action.payload, 'id') };
    case FETCH_LAST_SCHOLARSHIP:
      return { latestScholarship: action.payload };
    case SCHOLARSHIP_SUBMIT_SUCCESS:
      return { submitSuccess: true, newId: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = ({ scholarships, authenticate }) => ({
  authenticated: authenticate.authenticated,
  scholarship: scholarships.scholarship,
  scholarships: scholarships.data,
  latestScholarship: scholarships.latestScholarship,
  newId: scholarships.newId,
  submitSuccess: scholarships.submitSuccess,
});
