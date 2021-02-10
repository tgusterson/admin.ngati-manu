import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Container from 'react-bootstrap/Container'
import { getPendingUsers, getApprovedUsers } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => {
  // const [userData, setUserData] = useState('Loading')
  // const [selectedUser, setSelectedUser] = useState(undefined)
  // const [approvedUsers, setApprovedUsers] = useState([])
  // useEffect(() => {
  //   const fn = async () => {
  //     const pendingUsers = await getPendingUsers()
  //     setUserData(pendingUsers);
  //     console.log(pendingUsers)
  //   }
  //   fn()
  // }, [])
  return (
    <div>
      <Layout>
        <Container>
          <h1 onClick={async () => {
            const pendingUsers = await getPendingUsers()
            console.log(pendingUsers)
          }}>Welcome</h1>
        </Container>
      </Layout>
    </div>
  )
}

export default IndexPage
