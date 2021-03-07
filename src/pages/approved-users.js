import React, { useState, useEffect } from "react"
import { CSVLink } from "react-csv"
import Layout from "../components/layout"
import ApprovedUserCard from "../components/ApprovedUserCard"
import CardColumns from 'react-bootstrap/CardColumns'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUsersInitial = async () => {
      setLoading(true)
      const approvedUsers = await getUsersByIndex("Approved")
      setUsers(approvedUsers)
      setLoading(false)
    }

    getUsersInitial()
  }, [])

  return (
    <div>
      <Layout>
        <h1>Approved User Download</h1>
        <p>Use this page to download and view approved users.</p>
        <div>
          {loading && <p>Loading...</p>}
          {users !== '' &&
            <CSVLink
              className="btn btn-primary mt-3 mb-3"
              filename={"approved_users.csv"}
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
                <ApprovedUserCard userObject={user.data} id={user.id} key={index} />
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