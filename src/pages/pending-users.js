import React, { useState } from "react"
import { CSVLink } from "react-csv"
import Layout from "../components/layout"
import PendingUserCard from "../components/PendingUserCard"
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setUsers([])
    setLoading(true)
    const pendingUsers = await getUsersByIndex("Pending")
    setUsers(pendingUsers)
    setLoading(false)
  }

  return (
    <div>
      <Layout>
        <h1>Pending Applications</h1>
        <p>Use this page to review pending applications from the Ngati Manu website.</p>
        <ol>
          <li>Start by clicking the 'Get Pending Users' button.</li>
          <li>From there, all of the 'Pending' applications will appear.</li>
          <li>Selecting 'View Application' on an application card will display the full application details.</li>
          <li>Within the application details screen, choose to either 'Approve' or 'Reject' the application (or hit 'Close' if you want to decide later).</li>
        </ol>
        <Button
          className="mb-4"
          onClick={handleClick}>
          Get Pending Users
          </Button>
        <div>
          {loading && <p>Loading...</p>}
          {users.length !== 0 &&
            <CSVLink
              className="btn btn-primary mt-3 mb-3"
              filename={"pending_users.csv"}
              data={users.map((user) => {
                return { id: JSON.stringify(user.id), ...user.data }
              })}>
              Download File (.csv)
            </CSVLink>}
          <CardColumns>
            {
              (users.length > 0 && !loading)
              &&
              users.map((user, index) =>
                <PendingUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </CardColumns>
          {(users.length === 0 && typeof users === 'object' && !loading) && <p>No pending users.</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Page