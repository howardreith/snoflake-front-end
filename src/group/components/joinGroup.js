import React, { Component } from 'react'
import { joinGroup } from '../api'
import messages from '../messages'

class JoinGroup extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  joinGroup = (event) => {
    event.preventDefault()
    const { flash, history, user } = this.props

    joinGroup(this.props.group.id, this.props.user)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
      .then(() => flash(messages.joinGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.joinGroupFailure, 'flash-error'))
  }

  render () {
    console.log('this.props in joinGroup is ', this.props)
    return (
      <div>
        <form onSubmit = {this.joinGroup}>
          <button>Join Group</button>
        </form>
      </div>
    )
  }
}



export default JoinGroup
