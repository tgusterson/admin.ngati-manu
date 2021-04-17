import React, { useState, useEffect } from "react"
import { CSVLink } from "react-csv"
import Layout from "../components/layout"
import ApprovedUserCard from "../components/ApprovedUserCard"
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   const getUsersInitial = async () => {
  //     setLoading(true)
  //     const approvedUsers = await getUsersByIndex("Approved")
  //     setUsers(approvedUsers)
  //     setLoading(false)
  //   }

  //   getUsersInitial()
  // }, [])

  const handleClick = async () => {
    try {
      setUsers([])
      setLoading(true)
      const approvedUsers = await getUsersByIndex("Approved")
      setLoading(false)
      setUsers(approvedUsers)
    } catch (e) {
      alert('Something went wrong, please try again')
      setLoading(false)
    }
  }

  return (
    <div>
      <Layout>
        <h1>Approved User Download</h1>
        <p>Use this page to download and view approved users.</p>
        <Button
          className="mb-4"
          onClick={handleClick}>
          Get Approved Users
          </Button>
        <div>
          {loading && <p>Loading...</p>}
          {users.length !== 0 &&
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
              ((users.length !== 0 && users.length > 0) && !loading)
              &&
              users.map((user, index) =>
                <ApprovedUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </CardColumns>
          {(users.length === 0 && typeof users === 'object' && !loading) && <p>No approved users.</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Page