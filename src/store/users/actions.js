import { SET_AUTH_STATUS } from './actionTypes'

export const setAuthStatus = (status) => {
  return {
    type: SET_AUTH_STATUS,
    payload: status
  }
};