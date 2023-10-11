import React from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { FiMail, FiMessageSquare, FiSend, FiTag, FiUser } from "react-icons/fi";
import "./contact-form.scss"
import * as Yup from "yup";
import { useFormik } from 'formik';
import { isInValid, isValid } from '../../helpers/functions/forms';
const ContactForm = () => {
    const initialValues ={
        email: "",
        message: "",
        name: "",
        subject: ""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        subject: Yup.string().required("Required")
    })
    const onSubmit = (values) => {
        
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
  return (
    <Form className="contact-form" noValidate onSubmit={formik.handleSubmit}>
        <h2>Send me message</h2>
        <Row className="g-3">
            <Col md={6}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FiUser/></InputGroup.Text>
                    <Form.Control
                        placeholder="Your name"
                        aria-label="Your name"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("name")}
                        isValid={isValid(formik, "name")}
                        isInvalid={isInValid(formik, "name")}
                    />
                </InputGroup>
            </Col>
            <Col md={6}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FiMail/></InputGroup.Text>
                    <Form.Control
                        type="email"
                        placeholder="Your email"
                        aria-label="Your email"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("email")}
                        isValid={isValid(formik, "email")}
                        isInvalid={isInValid(formik, "email")}
                    />
                </InputGroup>
            </Col>
            <Col xs={12}>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><FiTag/></InputGroup.Text>
                    <Form.Control
                        placeholder="Subject"
                        aria-label="Subject"
                        aria-describedby="basic-addon1"
                        {...formik.getFieldProps("subject")}
                        isValid={isValid(formik, "subject")}
                        isInvalid={isInValid(formik, "subject")}
                    />
                </InputGroup>
            </Col>
            <Col xs={12}>
                <InputGroup className="mb-3">
                    <InputGroup.Text><FiMessageSquare/></InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" 
                    {...formik.getFieldProps("message")}
                    isValid={isValid(formik, "message")}
                    isInvalid={isInValid(formik, "message")}
                />
                </InputGroup>
            </Col>
        </Row>
        <Button type="submit" variant="primary"><FiSend/> Send</Button>
      
    </Form>
  )
}
export default ContactForm