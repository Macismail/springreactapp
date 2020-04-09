import React from 'react';
import { Card } from 'react-bootstrap';

const SingleContact = ({item}) => (
  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{item.firstname} {item.lastname}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    </Card.Text>
    <p>{item.email}</p>
  </Card.Body>
</Card>
)

export default SingleContact;