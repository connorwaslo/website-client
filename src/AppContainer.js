import React, { useEffect } from 'react'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getAllBusinesses } from './store/businesses/actions'
import { useDispatch, useSelector } from 'react-redux'

function AppContainer() {
  const { loaded, businesses, error } = useSelector(state => ({
    loaded: state.businesses.loaded,
    businesses: state.businesses.all,
    error: state.businesses.error
  }))
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
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              {/*<About />*/}
            </Route>
            <Route path="/users">
              {/*<Users />*/}
            </Route>
            <Route path="/">
              {/*<Home />*/}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default AppContainer