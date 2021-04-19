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
    setTimeout(() => {
      console.log("Waiting...")
    }, 500)
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
    return data.status
  } catch (e) {
    return e
  }
}

export const updateUser = async (userObject, id) => {
  try {
    const data = await axios({
      method: 'patch',
      url: '/api/updateUser',
      data: {
        user: { ...userObject },
        id: id,
        key: process.env.FAUNA_SERVER_SECRET
      }
    })
    return data.status
  } catch (e) {
    return e
  }
}

export const deleteUser = async (id) => {
  try {
    const data = await axios({
      method: 'delete',
      url: '/api/deleteUser',
      data: {
        id: id,
        key: process.env.FAUNA_SERVER_SECRET
      }
    })
    return data.data
  } catch (e) {
    return e
  }
}

export const sendMail = async ({ to, subject, html, text }) => {
  try {
    const data = await axios({
      method: 'POST',
      url: '/api/sendEmail',
      data: {
        to,
        subject,
        html,
        text,
        key: process.env.FAUNA_SERVER_SECRET
      }
    })
    return data.status
  } catch (e) {
    return e
  }
}