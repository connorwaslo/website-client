import { GET_BUSINESSES, SET_ERROR } from './actionTypes'

let initialState = {
  loaded: false,
  all: [],
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        loaded: true,
        error: action.payload
      }
    case GET_BUSINESSES:
      return {
        loaded: true,
        all: action.payload,
        error: {}
      };
    default:
      return state;
  }
};