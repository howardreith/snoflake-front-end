import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getGroup } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'


class ViewGroup extends Component {
  constructor () {
    super()
  }

  viewGroup = event => {
    event.preventDefault()
    const { flash, history, user } = this.props

    getGroup(1, user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
      .then(() => flash(messages.getGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.getGroupFailure, 'flash-error'))
  }

  render () {
    const user = this.props.user

    return (
      <React.Fragment>
        <form className = 'get-group-button' onSubmit={this.viewGroup}>
          <button type='submit'>Get Group 1</button>
        </form>
      </React.Fragment>
    )
  }
}

export default ViewGroup
