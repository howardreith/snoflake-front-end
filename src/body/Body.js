import React from 'react'
import { Link } from 'react-router-dom'

import './Body.scss'

const authenticatedBody = (
  <React.Fragment>
    <h2>Authenticated Body</h2>
  </React.Fragment>
)

const unauthenticatedBody = (
  <React.Fragment>
    <h2>Unauthenticated Body</h2>
  </React.Fragment>
)

const Body = ({ user }) => (
  <div className="body">
    <h1>Something in the body</h1>
    { user ? authenticatedBody : unauthenticatedBody }
  </div>
)

export default Body
