import React, { useState } from "react"
import { CSVLink } from "react-csv"
import Layout from "../components/layout"
import ArchivedUserCard from "../components/ArchivedUserCard"
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setUsers('')
    const pendingUsers = await getUsersByIndex("Archived")
    setUsers(pendingUsers)
    setLoading(false)
  }

  return (
    <div>
      <Layout>
        <h1>Archived Applications</h1>
        <p>Use this page to view all archive Ngati Manu users.</p>
        <ol>
          <li>Start by clicking the 'Get Archived Users' button.</li>
          <li>From there, all of the 'Archived' applications will appear.</li>
          <li>Selecting 'View Application' on an application card will display the full application details.</li>
          <li>Within the application details screen, choose to either 'Restore' or 'Delete' the user (or hit 'Close' if you want to decide later).</li>
        </ol>
        <Button
          className="mb-4"
          onClick={handleClick}>
          Get Archived Users
          </Button>
        <div>
          {loading && <p>Loading...</p>}
          {users !== '' &&
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
                <ArchivedUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </CardColumns>
          {(users.length === 0 && typeof users === 'object') && <p>No archived users.</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Page