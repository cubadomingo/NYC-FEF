import {
  SIGN_IN,
  SIGN_OUT,
} from 'actions/types';

const initialState = {
  authenticated: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return { authenticated: action.payload };
    case SIGN_OUT:
      return { authenticated: action.payload };
    default:
      return state;
  }
}

export const mapStateToProps = (state, composedComponent = null) => (
  composedComponent === null ? (
    { authenticated: state.authenticate.authenticated }
  ) : ({
    authenticated: state.authenticate.authenticated,
    composedComponent,
  })
);
