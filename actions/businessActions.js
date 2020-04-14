export const SET_ERROR = 'SET_ERROR';

export const GET_BUSINESSES = 'GET_BUSINESSES';

export const setError = (message) => {
  return {
    type: SET_ERROR,
    payload: message
  }
}

export const getAllBusinesses = () => {
  return (dispatch) => {
    fetch('http://localhost:8000/api/businesses') // Todo: /api/not-sure-what
      .then(
        res => res.json(),
        err => {
          dispatch(setError(err.message)); // Error w/ api call
        })
      .then(businesses => {
          dispatch({
            type: GET_BUSINESSES,
            payload: businesses
          })
        },
        err => {
          dispatch({
            type: SET_ERROR,
            payload: err.message // Error parsing response as json
          })
        }
      )
  }
}