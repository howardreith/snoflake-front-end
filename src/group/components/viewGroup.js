import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, getGroup } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'
import JoinGroup from './joinGroup'
import LeaveGroup from './leaveGroup'


class ViewGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      group: {},
      isLoaded: false,
      isMember: null
    }
  }

  componentDidMount() {
    const { flash, history, user } = this.props
    getGroup(this.props.match.params.id, user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
      .then(
        (res) => {
          this.setState({
            group: res.group,
            isLoaded: true
          })
        })
      .then(() => {
        // console.log('this.state.group.users is ', this.state.group.users)
        if (this.state.group.users.find(person => person.id === this.props.user.id)) {
          console.log(this.state.group.users.find(person => person.id === this.props.user.id))
          this.setState({ isMember: true })
        } else {
          this.setState({ isMember: false })
        }
      })
      .then(() => flash(messages.getGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.getGroupFailure, 'flash-error'))
  }

  renderJoinLeaveButton() {
    if(this.state.isMember) {
      return (
        <LeaveGroup flash={this.props.flash} user={this.props.user} group={this.state.group}/>
      )
    } else {
      return (
        <JoinGroup flash={this.props.flash} user={this.props.user} group={this.state.group}/>
      )
    }
  }

  render () {
    const user = this.props.user
    // console.log('this.state.group is ', this.state.group)
    const group = this.state.group
    const groupMembers = this.state.group.users
    // console.log('members are ', groupMembers)
    console.log('isMember is ', this.state.isMember)
    // const groupMembers = this.state.group.users.map((user) => <li key={user.id}>{user.email}</li>)

    if (this.state.isMember) {

    }
    return (
      <div>
        <h1>{group.name}</h1>
        {this.renderJoinLeaveButton()}
        <h3>{group.description}</h3>
        <h4>Members:</h4>
        <ul>
          {groupMembers && groupMembers.map((member) => <li key={member.id}>{member.email}</li>)}
        </ul>
      </div>
    )
  }
}

export default ViewGroup
