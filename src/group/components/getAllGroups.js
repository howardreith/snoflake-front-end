import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getAllGroups } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import Group from './Group'

class GetAllGroups extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groups: [],
      isLoaded: false
    }
  }

  componentDidMount () {
    const { flash, history, user } = this.props

    getAllGroups(user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res.groups is ', res.groups)
        return res
      })
      .then(
        (res) => {
          this.setState({
            groups: res.groups,
            isLoaded: true
          })
        })
      .then(() => flash(messages.getGroupsSuccess, 'flash-success'))
      .catch(() => flash(messages.getGroupsFailure, 'flash-error'))
  }



  render () {
    const user = this.props.user
    const { isLoaded, groups } = this.state

    return (
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            {group.name}
          </li>
        ))}
      </ul>
    )
  }
}

export default GetAllGroups
