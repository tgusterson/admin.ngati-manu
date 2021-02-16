import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { updateUserApproval } from "../utils/apiRequests"

const PendingUserCard = ({ id, userObject, handleClick }) => {
  const {
    FIRST_NAME,
    MIDDLE_NAME,
    LAST_NAME,
    EMAIL,
    GENDER,
    DOB,
    STREET_ADDRESS,
    SUBURB,
    TOWN,
    COUNTRY,
    LANDLINE,
    MOBILE,
    HAS_TAMIRIKI,
    NUMBER_OF_TAMIRIKI,
    HAS_SIBLINGS,
    NUMBER_OF_SIBLINGS,
    TUPUNA,
    TUPUNA_UNSURE_EXPLANATION,
    IS_WHANGAI,
    MOTHER_NAME,
    MOTHER_WHAKAPAPA,
    FATHER_NAME,
    FATHER_WHAKAPAPA,
    MATERNAL_GRANDMOTHER_NAME,
    PATERNAL_GRANDMOTHER_NAME,
    MATERNAL_GRANDFATHER_NAME,
    PATERNAL_GRANDFATHER_NAME,
    DATE_OF_FORM_SUBMISSION
  } = userObject

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUserApproval = async (approval) => {
    try {
      await updateUserApproval(approval, id)
      handleClick()
      handleClose()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Card bg={'light'} text={'dark'} >
        <Card.Body>
          <Card.Title>{FIRST_NAME} {LAST_NAME}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item><b>Email:</b> {EMAIL}</ListGroup.Item>
            <ListGroup.Item><b>ID:</b> {id}</ListGroup.Item>
            <ListGroup.Item><p><b>Application Date:</b> {DATE_OF_FORM_SUBMISSION.substring(0, 10)}</p></ListGroup.Item>
          </ListGroup>
          <Button variant="info" className="mr-1" block onClick={handleShow}>View Application</Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} style={{ width: '100%' }}>
        <Modal.Header closeButton>
          <Modal.Title>{FIRST_NAME} {LAST_NAME}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>First Name:</b> {FIRST_NAME}</p>
          {MIDDLE_NAME && <p><b>Middle Name:</b> {MIDDLE_NAME}</p>}
          <p><b>Last Name:</b> {LAST_NAME}</p>
          <p><b>Database ID:</b> {id}</p>
          {DATE_OF_FORM_SUBMISSION && <p><b>Form Submission Date (yyyy-mm-dd):</b> {DATE_OF_FORM_SUBMISSION.substring(0, 10)}</p>}
          <p><b>Email:</b> {EMAIL}</p>
          <p><b>Gender:</b> {GENDER}</p>
          <p><b>Date of Birth (yyyy-mm-dd):</b> {DOB}</p>
          <p><b>St Address:</b> {STREET_ADDRESS}</p>
          <p><b>Town:</b> {TOWN}</p>
          <p><b>Suburb:</b> {SUBURB}</p>
          <p><b>Country:</b> {COUNTRY}</p>
          <p><b>Phone #:</b> {LANDLINE}</p>
          {MOBILE && <p><b>Mobile #:</b> {MOBILE}</p>}
          <p><b>Has Children:</b> {HAS_TAMIRIKI}</p>
          {NUMBER_OF_TAMIRIKI && <p><b># of Children:</b> {NUMBER_OF_TAMIRIKI}</p>}
          <p><b>Has Siblings:</b> {HAS_SIBLINGS}</p>
          {NUMBER_OF_SIBLINGS && <p><b># of Siblings:</b> {NUMBER_OF_SIBLINGS}</p>}
          <p><b>Tupuna:</b> {TUPUNA.map((tupuna, index) => <li key={index}>{tupuna}</li>)}</p>
          {TUPUNA_UNSURE_EXPLANATION && <p><b>Tupuna Free Text:</b> {TUPUNA_UNSURE_EXPLANATION}</p>}
          <p><b>Is Whangai?:</b> {IS_WHANGAI}</p>
          {MOTHER_NAME && <p><b>Mother's Name:</b> {MOTHER_NAME}</p>}
          {MOTHER_WHAKAPAPA && <p><b>Mother's Tupuna:</b> {MOTHER_WHAKAPAPA}</p>}
          {FATHER_NAME && <p><b>Father's Name:</b> {FATHER_NAME}</p>}
          {FATHER_WHAKAPAPA && <p><b>Father's Tupuna:</b> {FATHER_WHAKAPAPA}</p>}
          {MATERNAL_GRANDMOTHER_NAME && <p><b>Maternal Grandmother:</b> {MATERNAL_GRANDMOTHER_NAME}</p>}
          {MATERNAL_GRANDFATHER_NAME && <p><b>Maternal Grandfather:</b> {MATERNAL_GRANDFATHER_NAME}</p>}
          {PATERNAL_GRANDMOTHER_NAME && <p><b>Paternal Grandmother:</b> {PATERNAL_GRANDMOTHER_NAME}</p>}
          {PATERNAL_GRANDFATHER_NAME && <p><b>Paternal Grandfather:</b> {PATERNAL_GRANDFATHER_NAME}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button className="mx-3" variant="success" onClick={() => handleUserApproval("Approved")}>
            Accept Application
          </Button>
          <Button className="mx-3" variant="danger" onClick={() => handleUserApproval("Rejected")}>
            Reject Application
          </Button>
          <Button className="mx-3" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default PendingUserCard