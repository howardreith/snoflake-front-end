const apiUrl = 'http://localhost:4741'

export const handleErrors = res => {
  if (res.ok) {
    return res
  } else  {
    throw new Error('Recieved status in 400 or 500 range.')
  }
}

export const getAllGroups = (user) => {
  console.log('user in api getAllGRoups is ', user)
  console.log('getAllGroups in api was called')
  return fetch(apiUrl + '/groups', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Token token=${user.token}`
    },
  })
}

export const createGroupInAPI = (user, data) => {
  console.log('user in api is ', user)
  console.log('data in api is ', data)
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
