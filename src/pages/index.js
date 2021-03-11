import React from "react"
import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css'

function getCurrentDate(separator = '') {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Admin Portal Home</h1>
        <h6>{getCurrentDate('-')}</h6>
        <small><i>(yyyy-mm-dd)</i></small>
        <br /><br />
        <h3>🎉 Live Features:</h3>
        <ul>
          <li>Automatic emails to approved / rejected applicants</li>
          <li>Approved user CSV download</li>
          <li>Application review tool (review, approve or decline new applications from the Ngati Manu site)</li>
          <li>Rejected applications management tool (delete rejected applicants from the database or flag them as 'Pending' if you changed your mind)</li>
        </ul>
        <br />
        <h3>📅 Upcoming Features:</h3>
        <ul>
          <li>Approved user search</li>
          <li>Update user information</li>
        </ul>
      </Layout>
    </div>
  )
}

export default IndexPage
