import { GET_BUSINESSES, SET_ERROR } from './actionTypes'

export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message
  }
}

export const getAllBusinesses = () => {
  return (dispatch) => {
    fetch('https://warm-cliffs-11938.herokuapp.com/api/businesses')
      .then(res => res.json())
      .then(businesses => {
          dispatch({
            type: GET_BUSINESSES,
            payload: businesses
          })
        }
      )
      .catch(err => {
        dispatch({
          type: SET_ERROR,
          payload: err.message // Error parsing response as json
        })
      })
  }
}