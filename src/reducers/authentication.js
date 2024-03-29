import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from 'actions/types';

const initialState = {
  authenticated: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = state => ({
  authenticated: state.authenticate.authenticated,
  errorMessage: state.authenticate.error,
});
