import {
  SHOW_EVENTS,
  SHOW_INITIATIVES,
  SHOW_FUNDRAISERS,
  SHOW_SCHOLARSHIPS,
} from '../actions/types';

const initialState = {
  initiatives: {
    data: [],
    show: false,
  },
  events: {
    data: [],
    show: false,
  },
  scholarships: {
    data: [],
    show: false,
  },
  fundraisers: {
    data: [],
    show: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_INITIATIVES:
      return {
        ...state,
        initiatives: {
          ...state.initiatives,
          show: action.payload,
        },
      };
    case SHOW_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
          show: action.payload,
        },
      };
    case SHOW_FUNDRAISERS:
      return {
        ...state,
        fundraisers: {
          ...state.events,
          show: action.payload,
        },
      };
    case SHOW_SCHOLARSHIPS:
      return {
        ...state,
        scholarships: {
          ...state.scholarships,
          show: action.payload,
        },
      };
    default:
      return state;
  }
}

export const mapStateToProps = state => (
  {
    scholarships: state.activity.scholarships,
    initiatives: state.activity.initiatives,
    events: state.activity.events,
    fundraisers: state.activity.fundraisers,
  }
);
