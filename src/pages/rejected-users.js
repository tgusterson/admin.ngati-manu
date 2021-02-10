import React, { useState } from "react"
import Layout from "../components/layout"
import PendingUserCard from "../components/PendingUserCard"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'
// FOR GETTING REJECTED USERS. WILL NEED TO BE ABLE TO RESTORE TO PENDING AND DELETE PERMANENTLY.
const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const pendingUsers = await getUsersByIndex("Rejected")
    setUsers(pendingUsers)
    setLoading(false)
  }

  return (
    <div>
      <Layout>
        <Container>
          <h1>
            Pending Users
          </h1>
          <Button
            className="mb-4"
            onClick={() => handleClick}>
            Get Pending Users
          </Button>
          <div>
            {loading && <p>Loading...</p>}
            {
              (users.length > 0 && !loading)
              &&
              users.map((user, index) =>
                <PendingUserCard userObject={user.data} key={index} handleClick={handleClick} />
              )
            }
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default Page