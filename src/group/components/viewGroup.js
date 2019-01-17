import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getGroup } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'


class ViewGroup extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { flash, history, user } = this.props
    getGroup(this.props.match.params.id, user)
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
    console.log('props is ', this.props)

    return (
      <div>
        Just making sure something renders
      </div>
    )
  }
}

export default ViewGroup
