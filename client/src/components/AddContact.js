import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  submitContact(event){
    event.preventDefault();

    let contact ={
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      email: this.refs.email.value
    }

    fetch('http://localhost:8080/api/contacts', {
      method: "POST",
      headers: {
        "content-type": "application/json" 
      },
      body: JSON.stringify(contact),
    })
    .then((response) => response.json())

    window.location.reload();
  }

  render() { 
    return ( 
      <div className="row">
      <Form onSubmit={this.submitContact.bind(this)}>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" ref="firstname" placeholder="first name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" ref="lastname" placeholder="last name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" ref="email" placeholder="Enter email" />
        </Form.Group>
        <Button className="btn btn-success btn-sm" type="submit" name="submit"> Submit </Button>
      </Form>
      </div>
     );
  }
}
 
export default AddContact;