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
    const { flash, history, user } = this.props
    console.log('user is ', user)

    getAllGroups(user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        console.log('res.groups is ', res.groups)
        return res
      })
      .then(() => flash(messages.getGroupsSuccess, 'flash-success'))
      .catch(() => flash(messages.getGroupsFailure, 'flash-error'))
  }

  authenticatedContent = (
    <React.Fragment>
      <form className = 'get-all-groups-forms' onSubmit={this.getAllGroups}>
        <h3>Get All Groups</h3>
        <button type='submit'>Get All Groups</button>
      </form>
    </React.Fragment>
  )

  render () {
    const user = this.props.user
    console.log(user)

    let theContent = null
    if (user) {
      theContent = this.authenticatedContent
    }
    return (
      theContent
    )
  }

}

export default GetAllGroups
