import React, { useState } from "react"
import Layout from "../components/layout"
import PendingUserCard from "../components/PendingUserCard"
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const pendingUsers = await getUsersByIndex("Approved")
    setUsers(pendingUsers)
    setLoading(false)
  }

  return (
    <div>
      <Layout>
        <h1>Approved Applications</h1>
        <h1>EXPORT TO CSV, DISPLAY USERS IN A TABLE (PAGINATE)</h1>
        {/* <p>Use this page to review approved applications from the Ngati Manu website.</p>
        <ol>
          <li>Start by clicking the 'Get approved Users' button.</li>
          <li>From there, all of the 'approved' applications will appear.</li>
          <li>Selecting 'View Application' on an application card will display the full application details.</li>
          <li>Within the application details screen, choose to either 'Approve' or 'Reject' the application (or hit 'Close' if you want to decide later).</li>
        </ol> */}
        <Button
          className="mb-4"
          onClick={handleClick}>
          Get Approved User List
          </Button>
        <div>
          {loading && <p>Loading...</p>}
          <CardColumns>
            {
              (users.length > 0 && !loading)
              &&
              users.map((user, index) =>
                <PendingUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </CardColumns>
          {(users.length === 0 && typeof users === 'object') && <p>No pending users.</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Page