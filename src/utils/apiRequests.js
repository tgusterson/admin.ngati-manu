import axios from 'axios'

export const getUsersByIndex = async (query) => {
  try {
    const data = await axios({
      method: 'post',
      url: '/api/getUsersByIndex',
      data: {
        index: "getPendingUsers",
        query: query,
        key: process.env.FAUNA_SERVER_SECRET
      }
    })
    return data.data
  } catch (e) {
    return e
  }
}

export const updateUserApproval = async (approvalStatus, id) => {
  try {
    const data = await axios({
      method: 'patch',
      url: '/api/updateApproval',
      data: {
        approved: approvalStatus,
        id: id,
        key: process.env.FAUNA_SERVER_SECRET
      }
    })
    return data.data
  } catch (e) {
    return e
  }
}