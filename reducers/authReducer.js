import { SET_AUTH_STATUS } from '../actions/authActions'

let initialState = {
  user: {},
  isAuthed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        isAuthed: action.payload
      };
    default:
      return state;
  }
}