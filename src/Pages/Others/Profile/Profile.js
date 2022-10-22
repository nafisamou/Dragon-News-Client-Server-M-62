import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
  };

  const handleNameChanged = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Form onClick={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue={user?.email}
            readOnly
          />
        </Form.Group>
        <Form.Group
          onChange={handleNameChanged}
          className="mb-3"
          controlId="formBasicName"
        >
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Photo"
            defaultValue={user?.photoURL}
            ref={photoURLRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
