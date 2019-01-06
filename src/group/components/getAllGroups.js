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

  tellMeState = event => {
    event.preventDefault()
    console.log('state is ', this.state)
  }

  // getAllGroups = event => {
  //   event.preventDefault()
  //   const { flash, history, user } = this.props

  componentDidMount () {
    const { flash, history, user } = this.props
    //   if (user) {

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

  authenticatedContent = (
    <React.Fragment>
      <form className = 'get-all-groups-forms' onSubmit={this.getAllGroups}>
        <h3>Get All Groups</h3>
        <button type='submit'>Get All Groups</button>
      </form>
      <form onSubmit={this.tellMeState}>
        <button type='submit'>Tell Me State</button>
      </form>
    </React.Fragment>
  )



  render () {
    const user = this.props.user
    const { isLoaded, groups } = this.state

    // let theContent = null
    // if (user) {
    //   theContent = this.authenticatedContent
    // }
    return (
      // theContent
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
