import React, { useState, useEffect } from 'react'
import { Card, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addUser, editUser } from "../JS/actions/actionUser"
import { Link } from "react-router-dom"

const AddUser = () => {

  const [Person, setPerson] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId)
  const isEdit = useSelector(state => state.isEdit)


  useEffect(() => {
    if (isEdit) {
      setPerson(userId)
    }
    else {
      setPerson({
        name: "",
        email: "",
        phone: ""
      })
    }
  }, [userId, isEdit])


  const handelChange = (e) => {
    setPerson({ ...Person, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {isEdit ? "Edit User" : "Add New User"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >name :</Form.Label>
                <Form.Control type="text" value={Person.name} onChange={handelChange} name="name" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >email :</Form.Label>
                <Form.Control type="email" value={Person.email} onChange={handelChange} name="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ textAlign: "left" }}>
                <Form.Label >phone :</Form.Label>
                <Form.Control type="text" name="phone" value={Person.phone} onChange={handelChange} placeholder="Enter your phone" />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Users-list">
            <Button variant="outline-primary edit-button" onClick={() =>{
              isEdit
                ?dispatch(editUser(Person._id, Person))
                :dispatch(addUser(Person))}}>
                 {isEdit ? "Edit" : "Add"}
            </Button>
          </Link>
          <Button variant="outline-danger edit-button">Cancel</Button>
        </div>
      </Card>
    </div>

  )
}

export default AddUser
