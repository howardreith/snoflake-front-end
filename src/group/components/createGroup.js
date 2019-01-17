import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { handleErrors, createGroupInAPI } from '../api'
import messages from '../messages'
import apiUrl from '../../apiConfig'

class CreateGroup extends Component {
  constructor (props) {
    super(props)
  }

  createGroup = event => {
    event.preventDefault()
    const { flash, history, user } = this.props

    createGroupInAPI(user, this.state)
      .then(res => res.json())
      .then(function (res) {
        console.log('res is ' + JSON.stringify(res))
        return res
      })
      .then(() => flash(messages.createGroupSuccess, 'flash-success'))
      .catch(() => flash(messages.createGroupFailure, 'flash-error'))
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  authenticatedContent = (
    <React.Fragment>
      <form className = 'create-group-forms' onSubmit={this.createGroup}>
        <h3>Create New Group</h3>
        <input
          required
          type="text"
          name="name"
          placeholder="Group Name"
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Group Description"
          onChange={this.handleChange}
        />
        <button type='submit'>Create</button>
      </form>
    </React.Fragment>
  )

  render () {
    const user = this.props.user

    let createGroupContent = null
    if (user) {
      createGroupContent = this.authenticatedContent
    }
    return (
      createGroupContent
    )
  }

}

export default CreateGroup
