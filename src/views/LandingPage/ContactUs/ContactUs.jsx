import { FormHelperText, TextField } from '@mui/material'
import React, {useRef} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import contact from '../../../assets/Contact us.gif'
import Footer from '../../Template/Footer/Footer'
import Navigation from '../../Template/Navigation/Navigation'
import './ContactUs.css'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const { register, formState: { errors }, handleSubmit, clearErrors } = useForm()
    const form = useRef();
    const handleSubmition = (data) => {
        emailjs.sendForm('service_dx8yzg3', 'template_x8ft2k3', form.current, 'yesI1Hod8Cx22taJ8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
        <>
            <Navigation />
            <Container className='p-3'>
                <Row className='align-items-center'>
                    <Col sm={true} className="d-flex flex-column justify-content-between g-2 p-2">
                        <p className='display-6'>
                            Get in touch
                        </p>
                        <span className='pb-4'>We would love to hear from you</span>
                        <form ref={form} action="" className='d-flex flex-column gap-2' onSubmit={handleSubmit(handleSubmition)}>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="first-name">First name</label>
                                    <TextField id="first-name" label="Juan" variant="outlined" {...register("firstname", { required: true })} error={!!errors.firstname} />
                                    {errors.firstname && <FormHelperText className='text-danger'>
                                        Must input first name
                                    </FormHelperText>}


                                </Col>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="last-name">Last name</label>
                                    <TextField id="last-name" label="Dela Cruz" variant="outlined" {...register("lastname", { required: true })} error={!!errors.lastname} />
                                    {errors.lastname && <FormHelperText className='text-danger'>
                                        Must input last name
                                    </FormHelperText>}


                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="outlined-basic">Email</label>
                                    <TextField id="outlined-basic" label="email@domain.com" variant="outlined" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                                        error={!!errors.email} />
                                    {errors.email && <FormHelperText className='text-danger'>
                                        Invalid Email
                                    </FormHelperText>}
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <span>Mobile Number <span className='text-secondary'>(optional)</span></span>
                                    <TextField id="mobile-number" label="+1(XXX) XXX-XXXX" variant="outlined" {...register("mobileNumber")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="message">Message</label>
                                    <TextField id="message" label="Message" variant="outlined" multiline maxRows={4} {...register("message", { required: true })} error={!!errors.message}
                                    />
                                    {errors.message && <FormHelperText className='text-danger'>
                                        Message is empty
                                    </FormHelperText>}
                                </Col>
                            </Row>

                            <Row>
                                <Col className='d-flex flex-column p-2'>
                                    <button className='btn btn-success' type='submit' >
                                        Send Message
                                    </button>
                                </Col>
                            </Row>

                        </form>
                    </Col>
                    <Col sm={true} className="d-flex flex-column align-items-center d-none d-lg-inline-block">
                        <img src={contact} alt="contact us" className='send-a-mail img-fluid' />
                        <a href="https://storyset.com/business">Business illustrations by Storyset</a>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ContactUs