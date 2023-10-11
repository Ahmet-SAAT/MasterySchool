import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Map from './map'
import ContactForm from './contact-form'

const Contact = () => {
  return (
    <div>
<Container className="contact">
  <Card>
    <Card.Body>
      <Row>
        <Col md={8}>

        </Col>
        <Col md={4}>
          
        </Col>
      </Row>
    </Card.Body>
  </Card>
</Container>
<ContactForm/>
<Map/>
    </div>
  )
}

export default Contact