import React, { Component } from 'react'
import { leaveGroup, getUserGroups } from '../api'
import messages from '../messages'

class LeaveGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  leaveGroup = (event) => {
    event.preventDefault()
    const { flash, history, user } = this.props

    leaveGroup(this.props.group.id, this.props.user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
      .then(() => flash(messages.leaveGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.leaveGroupFailure, 'flash-error'))
  }

  getUserGroups = (event) => {
    event.preventDefault()
    const { flash, history, user } = this.props

    getUserGroups(this.props.user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res getUserGroups is ' + JSON.stringify(res))
        return res
      })
      .then(() => flash(messages.leaveGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.leaveGroupFailure, 'flash-error'))
  }

  render () {
    console.log('this.props in joinGroup is ', this.props)
    return (
      <div>
        <form onSubmit = {this.leaveGroup}>
          <button>Leave Group</button>
        </form>
        <form onSubmit = {this.getUserGroups}>
          <button>Leave Group</button>
        </form>
      </div>
    )
  }
}



export default LeaveGroup
