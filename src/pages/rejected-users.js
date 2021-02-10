import React, { useState } from "react"
import Layout from "../components/layout"
import RejectedUserCard from "../components/RejectedUserCard"
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

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
        <h1>Rejected Users</h1>
        <p>Use this page to see all of the users in 'Rejected' status. You can send them back to the 'Pending' queue or delete them permanently to save database storage space here.</p>
        <Button
          variant={'warning'}
          className="mb-4"
          onClick={handleClick}>
          Get Rejected Users
          </Button>
        <div>
          {loading && <p>Loading...</p>}
          <CardColumns>
            {
              (users.length > 0 && !loading)
              &&
              users.map((user, index) =>
                <RejectedUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </CardColumns>
          {(users.length === 0 && typeof users === 'object') && <p>No rejected users.</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Page