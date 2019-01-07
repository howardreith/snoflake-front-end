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
