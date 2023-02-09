import { FormHelperText, TextField } from '@mui/material'
import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
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
            <Container className='p-3'>
                <Row className='align-items-start'>
                    <Col sm={true} className="d-flex flex-column p-2">
                        <span className='py-2 fs-4'>How can we assist you?</span>
                        <form ref={form} className='d-flex flex-column gap-2' onSubmit={handleSubmit(handleSubmition)}>
                            <Row className='d-flex flex-column g-2'>
                                <Col className='d-flex flex-column'>
                                    <TextField id="first-name" label="First Name" variant="outlined" {...register("firstname", { required: true })} error={!!errors.firstname} />
                                    {errors.firstname && <FormHelperText className='text-danger'>
                                        Must input first name
                                    </FormHelperText>}
                                </Col>
                                <Col className='d-flex flex-column'>
                                    <TextField id="last-name" label="Last Name" variant="outlined" {...register("lastname", { required: true })} error={!!errors.lastname} />
                                    {errors.lastname && <FormHelperText className='text-danger'>
                                        Must input last name
                                    </FormHelperText>}
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <TextField id="outlined-basic" label="email@domain.com" variant="outlined" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}
                                        error={!!errors.email} />
                                    {errors.email && <FormHelperText className='text-danger'>
                                        Invalid Email
                                    </FormHelperText>}
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <span>Mobile Number <span className='text-secondary'>(optional)</span></span>
                                    <TextField id="mobile-number" label="(+63)9XX-XXXX-XXX" variant="outlined" {...register("mobileNumber")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <TextField id="message" label="Leave your message here" variant="outlined" multiline maxRows={4} {...register("message", { required: true })} error={!!errors.message}
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
                </Row>
            </Container>
        </>
    )
}

export default ContactUs