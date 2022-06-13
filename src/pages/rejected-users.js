import React, { useState } from "react"
import { CSVLink } from "react-csv"
import Layout from "../components/layout"
import RejectedUserCard from "../components/RejectedUserCard"
import CardColumns from "react-bootstrap/CardColumns"
import Button from "react-bootstrap/Button"
import { getUsersByIndex } from "../utils/apiRequests"
import "bootstrap/dist/css/bootstrap.min.css"

const Page = () => {
  const [users, setUsers] = useState("")
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    setUsers("")
    const pendingUsers = await getUsersByIndex("Rejected")
    setUsers(pendingUsers)
    console.log(pendingUsers)
    setLoading(false)
  }

  return (
    <div>
      <Layout>
        <h1>Rejected Applications</h1>
        <p>
          Use this page to see all of the users in 'Rejected' status. You can
          send them back to the 'Pending' queue or delete them permanently to
          save database storage space here.
        </p>
        <ol>
          <li>Start by clicking the 'Get Rejected Users' button.</li>
          <li>From there, all of the 'Rejected' applications will appear.</li>
          <li>
            Selecting 'View Application' on an application card will display the
            full application details.
          </li>
          <li>
            Within the application details screen, choose to either 'Send to
            Pending' (i.e. flag the application to return to the 'Pending
            Applications' queue) or 'Permanently Delete' the application (to
            save database storage).
          </li>
        </ol>
        <Button variant={"warning"} className="mb-4" onClick={handleClick}>
          Get Rejected Users
        </Button>
        <div>
          {loading && <p>Loading...</p>}
          {users !== "" &&
            users.length > 0 &&
            !loading(
              <CSVLink
                className="btn btn-primary mt-3 mb-3"
                filename={"pending_users.csv"}
                data={users.map(user => {
                  return { id: JSON.stringify(user.id), ...user.data }
                })}
              >
                Download File (.csv)
              </CSVLink>
            )}
          <CardColumns>
            {users.length > 0 &&
              !loading &&
              users.map((user, index) => (
                <RejectedUserCard
                  userObject={user.data}
                  id={user.id}
                  key={index}
                  handleClick={handleClick}
                />
              ))}
          </CardColumns>
          {users.length === 0 && typeof users === "object" && (
            <p>No rejected users.</p>
          )}
        </div>
      </Layout>
    </div>
  )
}

export default Page
