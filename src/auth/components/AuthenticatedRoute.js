import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const AuthenticatedRoute = ({
  component: Component,
  user,
  render,
  ...rest
}) => {
  if (user && render) {
    return <Route {...rest} render={render} />
  } else {
    return <Route {...rest} render={props =>
      user ? <Component {...props} /> : <Redirect to='/' />
    } />
  }
}

export default AuthenticatedRoute
