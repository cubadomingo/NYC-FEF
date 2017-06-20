import { FETCH_LAST_SCHOLARSHIP } from 'actions/types';

const initialState = {
  latestScholarship: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_LAST_SCHOLARSHIP:
      return { latestScholarship: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = ({ scholarships }) => ({
  latestScholarship: scholarships.latestScholarship,
});
