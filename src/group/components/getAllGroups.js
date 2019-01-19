import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { handleErrors, getAllGroups, getUserGroups } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import Group from './Group'

class GetAllGroups extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groups: [],
      userGroups: [],
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

    getUserGroups(user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res getUserGroups is ', res)
        return res
      })
      .then(
        (res) => {
          this.setState({
            userGroups: res.user_groups_memberships,
          })
        })
      .then(() => flash(messages.getGroupsSuccess, 'flash-success'))
      .catch(() => flash(messages.getGroupsFailure, 'flash-error'))
  }

  renderCreateButton () {
    return (
      <div>
        <Link to="/create-group">
            Create New Group
        </Link>
      </div>
    )
  }

  renderGroupsList () {
    const user = this.props.user
    console.log('this.state.groups is ', this.state.groups)
    this.state.groups.map(group => {
      return (
        <div className="item" key={group.id}>
          <div className="content">
            <Link to={`/groups/${group.id}`} className='header'>{group.name}</Link>
            <div className="description">{group.description}</div>
          </div>
        </div>
      )
    })
  }



  render () {
    const user = this.props.user
    const { isLoaded, groups } = this.state

    return (
      <div>
        {this.renderCreateButton()}
        <ul>
          {groups.map(group => (
            <li key={group.id} className='list-group-item'><Link to={`/groups/${group.id}`}>
              {group.name}</Link><br/>{group.description}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default GetAllGroups
