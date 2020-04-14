import { GET_BUSINESSES, SET_ERROR } from '../actions/businessActions'

let initialState = {
  all: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GET_BUSINESSES:
      return {
        all: action.payload,
        error: {}
      };
    default:
      return state;
  }
};