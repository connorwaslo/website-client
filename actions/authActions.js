// Todo: Actions for user specific info (e.g. id, name, etc.)
// Individual actions or one "set user" action?

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

export const setAuthStatus = (status) => {
  return {
    type: SET_AUTH_STATUS,
    payload: status
  }
};