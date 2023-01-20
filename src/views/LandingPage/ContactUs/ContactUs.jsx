import { TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import send from '../../../assets/send.jpg'
import Footer from '../../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <>
            <Navigation />
            <Container className='p-3'>
                <Row className='gap-3 align-items-center'>
                    <Col sm>
                        <p className='display-6 p-2'>
                            Get in touch
                        </p>
                        <form action="" className='d-flex flex-column gap-2'>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="first-name">First name</label>
                                    <TextField id="first-name" label="Juan" variant="outlined" />
                                </Col>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="last-name">Last name</label>
                                    <TextField id="last-name" label="Dela Cruz" variant="outlined" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="outlined-basic">Email</label>
                                    <TextField id="outlined-basic" label="email@domain.com" variant="outlined"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="outlined-basic">Mobile Number</label>
                                    <TextField id="outlined-basic" label="+1(XXX) XXX-XXXX" variant="outlined" />
                                </Col>
                            </Row>
                            <Row>
                                <Col className='d-flex flex-column'>
                                    <label htmlFor="message">Message</label>
                                    <TextField id="message" label="Message" variant="outlined" multiline maxRows={4} />
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
                    <Col className='d-flex flex-column' sm>
                        <Image src={send} className="send-a-mail" />
                        <span>
                            Photo by <a href="https://unsplash.com/es/@markuswinkler?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Markus Winkler</a> on <a href="https://unsplash.com/photos/Lp4jsVg8gpY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                        </span>

                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default ContactUs