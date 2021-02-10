import React, { useState } from "react"
import Layout from "../components/layout"
import PendingUserCard from "../components/PendingUserCard"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { getUsersByIndex } from "../utils/apiRequests"
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = () => {
  const [users, setUsers] = useState('')
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    const pendingUsers = await getUsersByIndex("Pending")
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
            onClick={handleClick}>
            Get Pending Users
          </Button>
          <div>
            {loading && <p>Loading...</p>}
            {
              (users.length > 0 && !loading)
              &&
              users.map((user, index) =>
                <PendingUserCard userObject={user.data} id={user.id} key={index} handleClick={handleClick} />
              )
            }
          </div>
        </Container>
      </Layout>
    </div>
  )
}

export default Page

// "data": {
//   "APPROVED": "Pending",
//   "FIRST_NAME": "Test",
//   "MIDDLE_NAME": "",
//   "LAST_NAME": "Testlast",
//   "EMAIL": "test@test.test",
//   "GENDER": "Other",
//   "DOB": "1991-02-08",
//   "STREET_ADDRESS": "Test",
//   "SUBURB": "Test",
//   "TOWN": "Test",
//   "COUNTRY": "Aotearoa / New Zealand",
//   "LANDLINE": "124345",
//   "HAS_TAMIRIKI": "No",
//   "NUMBER_OF_TAMIRIKI": "",
//   "HAS_SIBLINGS": "No",
//   "NUMBER_OF_SIBLINGS": "",
//   "TUPUNA": [
//       "Ihipera Tiaho"
//   ],
//   "IS_WHANGAI": "No",
//   "MOTHER_NAME": "",
//   "MOTHER_WHAKAPAPA": "",
//   "FATHER_NAME": "",
//   "MATERNAL_GRANDMOTHER_NAME": "",
//   "PATERNAL_GRANDMOTHER_NAME": "",
//   "MATERNAL_GRANDFATHER_NAME": "",
//   "PATERNAL_GRANDFATHER_NAME": "",
//   "DECLARATION_STATEMENTS": [
//       "The information I have given is true and complete to the best of my knowledge",
//       "I have read and understood the declaration indicated above",
//       "I also undertake to update my relevant information as and when my circumstances change"
//   ],
//   "DATE_OF_FORM_SUBMISSION": "2021-02-08T01:12:59.054Z"
// }