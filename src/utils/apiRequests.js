import axios from 'axios'

export const getPendingUsers = async () => {
  try {
    const data = await axios({
      method: 'post',
      url: '/api/getUsersByIndex',
      data: {
        index: "getPendingUsers",
        query: "Pending"
      }
    })
    return data.data
  } catch (e) {
    return e
  }
}

export const getApprovedUsers = async () => {
  try {
    const data = await axios({
      method: 'post',
      url: '/api/getAllUsers',
      data: {
        index: "getPendingUsers",
        query: true
      }
    })
    return data.data
  } catch (e) {
    return e
  }
}