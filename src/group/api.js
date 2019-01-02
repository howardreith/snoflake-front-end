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
