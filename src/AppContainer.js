import React, { useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getAllBusinesses } from './store/businesses/actions'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from "semantic-ui-react";

import Home from './views/Home'

function AppContainer() {
  const { loaded, businesses, error } = useSelector(state => ({
    loaded: state.businesses.loaded,
    businesses: state.businesses.all,
    error: state.businesses.error
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBusinesses());
  }, [dispatch]);

  if (!loaded) {
    return <h1>Loading</h1>
  }

  if (Object.keys(error).length !== 0) {
    return <h1>{error.message}</h1>
  }

  console.log(businesses);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default AppContainer