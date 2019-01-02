import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getAllGroups } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class GetAllGroups extends Component {
  constructor () {
    super()
  }

  getAllGroups = event => {
    event.preventDefault()
    console.log('getAllGroups has been called in getAllGroups.js')
    const user = this.props
    console.log('user is ', user)

    getAllGroups(user)
      .then(res => res.ok ? res : new Error())
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
  }

  render () {
    return (
      <form className = 'get-all-groups-forms' onSubmit={this.getAllGroups}>
        <h3>Get All Groups</h3>
        <button type='submit'>Get All Groups</button>
      </form>
      // <form className='auth-form' onSubmit={this.signIn}>
      //   <h3>Sign In</h3>
      //   <label htmlFor="email">Email</label>
      //   <input
      //     required
      //     type="email"
      //     name="email"
      //     value={email}
      //     placeholder="Email"
      //     onChange={this.handleChange}
      //   />
      //   <label htmlFor="password">Password</label>
      //   <input
      //     required
      //     name="password"
      //     value={password}
      //     type="password"
      //     placeholder="Password"
      //     onChange={this.handleChange}
      //   />
      //   <button type="submit">Sign In</button>
      // </form>
    )
  }

}

export default GetAllGroups
