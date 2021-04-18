import React, { useState } from "react"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { updateUserApproval, updateUser } from "../utils/apiRequests"

const ApprovedUserCard = ({ id, userObject, handleClick }) => {
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
  const [editedUser, setEditedUser] = useState(userObject);
  const [show, setShow] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUserApproval = async (approval) => {
    try {
      setSubmitting(true)
      const updatedUser = await updateUserApproval(approval, id)
      if (updatedUser === 200) {
        alert('Archival successful')
      } else {
        alert('Something went wrong, please try again')
      }
      handleClick()
      handleClose()
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUserUpdate = async (user) => {
    try {
      setSubmitting(true)
      const updatedUserContent = await updateUser(user, id)
      if (updatedUserContent === 200) {
        alert('Update successful')
        console.log(updatedUserContent)
      } else {
        console.log(updatedUserContent)
        alert('Something went wrong, please try again')
      }
      handleClick()
      handleClose()
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e, field) => {
    const updatedUser = { ...editedUser }
    updatedUser[field] = e.target.value
    setEditedUser({ ...updatedUser })
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
          <Button variant="info" className="mr-1" block onClick={handleShow}>View User</Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} style={{ width: '100%' }}>
        <Modal.Header closeButton>
          <Modal.Title>{FIRST_NAME} {LAST_NAME}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label style={{ marginRight: '5px' }}><b>First Name:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.FIRST_NAME || ''} onChange={(e) => handleChange(e, "FIRST_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Middle Name:</b></label>
            <input type="text" style={{ width: '75%' }} value={editedUser.MIDDLE_NAME || ''} onChange={(e) => handleChange(e, "MIDDLE_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Last Name:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.LAST_NAME || ''} onChange={(e) => handleChange(e, "LAST_NAME")} />
          </div>
          <p><b>Database ID:</b> {id}</p>
          {DATE_OF_FORM_SUBMISSION && <p><b>Form Submission Date (yyyy-mm-dd):</b> {DATE_OF_FORM_SUBMISSION.substring(0, 10)}</p>}
          <div>
            <label style={{ marginRight: '5px' }}><b>Email:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.EMAIL || ''} onChange={(e) => handleChange(e, "EMAIL")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Gender:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.GENDER || ''} onChange={(e) => handleChange(e, "GENDER")} />
          </div>
          <p><b>Date of Birth (yyyy-mm-dd):</b> {DOB}</p>
          <div>
            <label style={{ marginRight: '5px' }}><b>St Address:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.STREET_ADDRESS || ''} onChange={(e) => handleChange(e, "STREET_ADDRESS")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Town:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.TOWN || ''} onChange={(e) => handleChange(e, "TOWN")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Suburb:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.SUBURB || ''} onChange={(e) => handleChange(e, "SUBURB")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Country:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.COUNTRY || ''} onChange={(e) => handleChange(e, "COUNTRY")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Phone #:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.LANDLINE || ''} onChange={(e) => handleChange(e, "LANDLINE")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Mobile #:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.MOBILE || ''} onChange={(e) => handleChange(e, "MOBILE")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Has Children:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.HAS_TAMIRIKI || ''} onChange={(e) => handleChange(e, "HAS_TAMIRIKI")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b># of Children:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.NUMBER_OF_TAMIRIKI || ''} onChange={(e) => handleChange(e, "NUMBER_OF_TAMIRIKI")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Has Siblings:</b></label>
            <input style={{ width: '75%' }} type="text" value={editedUser.HAS_SIBLINGS || ''} onChange={(e) => handleChange(e, "HAS_SIBLINGS")} />
          </div>
          {NUMBER_OF_SIBLINGS &&
            <div>
              <label style={{ marginRight: '5px' }}><b># of Siblings:</b></label>
              <input style={{ width: '75%' }} type="text" value={editedUser.NUMBER_OF_SIBLINGS || ''} onChange={(e) => handleChange(e, "NUMBER_OF_SIBLINGS")} />
            </div>
          }
          <p><b>Tupuna:</b> {TUPUNA.map((tupuna, index) => <li key={index}>{tupuna}</li>)}</p>
          {TUPUNA_UNSURE_EXPLANATION && <p><b>Tupuna Free Text:</b> {TUPUNA_UNSURE_EXPLANATION || ''}</p>}
          <div>
            <label style={{ marginRight: '5px' }}><b>Is Whangai?:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.IS_WHANGAI || ''} onChange={(e) => handleChange(e, "IS_WHANGAI")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Mother's Name:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.MOTHER_NAME || ''} onChange={(e) => handleChange(e, "MOTHER_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Mother's Tupuna:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.MOTHER_WHAKAPAPA || ''} onChange={(e) => handleChange(e, "MOTHER_WHAKAPAPA")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Father's Name:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.FATHER_NAME || ''} onChange={(e) => handleChange(e, "FATHER_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Father's Tupuna:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.FATHER_WHAKAPAPA || ''} onChange={(e) => handleChange(e, "FATHER_WHAKAPAPA")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Maternal Grandmother:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.MATERNAL_GRANDMOTHER_NAME || ''} onChange={(e) => handleChange(e, "MATERNAL_GRANDMOTHER_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Maternal Grandfather:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.MATERNAL_GRANDFATHER_NAME || ''} onChange={(e) => handleChange(e, "MATERNAL_GRANDFATHER_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Paternal Grandmother:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.PATERNAL_GRANDMOTHER_NAME || ''} onChange={(e) => handleChange(e, "PATERNAL_GRANDMOTHER_NAME")} />
          </div>
          <div>
            <label style={{ marginRight: '5px' }}><b>Paternal Grandfather:</b></label>
            <input style={{ width: '60%' }} type="text" value={editedUser.PATERNAL_GRANDFATHER_NAME || ''} onChange={(e) => handleChange(e, "PATERNAL_GRANDFATHER_NAME")} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          {submitting &&
            <Button className="mx-3" variant="warning" disabled>Submitting, please wait...</Button>
          }
          {!submitting &&
            <Button className="mx-3" variant="success" onClick={() => handleUserUpdate(editedUser)}>
              Save Changes
          </Button>
          }
          {!submitting &&
            <Button className="mx-3" variant="warning" onClick={() => handleUserApproval("Archived")}>
              Archive User
          </Button>
          }
          {!submitting &&
            <Button className="mx-3" variant="secondary" onClick={handleClose}>
              Close
          </Button>
          }
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ApprovedUserCard