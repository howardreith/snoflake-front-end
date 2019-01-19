const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const getAllGroups = (user) => {
  return fetch(apiUrl + '/groups', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const createGroupInAPI = (user, data) => {
  return fetch(apiUrl + '/groups', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      group: {
        name: data.name,
        description: data.description,
        creator_id: user.id
      }
    })
  })
}

export const getGroup = (group_id, user) => {
  return fetch(apiUrl + '/groups/' + group_id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const getUserGroups = (user) => {
  return fetch(apiUrl + '/user_groups_memberships', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    }
  })
}

export const joinGroup = (group_id, user) => {
  return fetch(apiUrl + '/user_groups_memberships', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
    body: JSON.stringify({
      user_groups_membership: {
        group_id: group_id
      }
    })
  })
}

export const leaveGroup = (membership_id) => {
  return fetch(apiUrl + '/user_groups_memberships/' + membership_id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}
