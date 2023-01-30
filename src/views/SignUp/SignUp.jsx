import React, { useRef } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/signup.png';
import Navigation from '../Template/Navigation/Navigation';
import './SignUp.css';
const SignUp = () => {
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors }, clearErrors, watch } = useForm()
    const password = useRef({});
    password.current = watch("password", "");
    const handleSubmition = (data) => {
        if (Object.keys(data).length > 0) {
            console.info(data)
            // navigate('/dashboard', { replace: true }, [navigate])
        }
    }
    const handleClick = () => {
        navigate('/login', { replace: true }, [navigate])
    }
    return (
        <>
            <Navigation />
            <div className="container-fluid">
                <Container>
                    <Row className='align-items-center mt-5'>
                        <Col className='d-none d-lg-inline-block'>
                            <Image src={signUpImg} className='sign-up' />
                        </Col>
                        <Col>
                            <main className="sign-up m-auto col-8">
                                <form action="" onSubmit={handleSubmit(handleSubmition)} className="d-flex flex-column gap-2">
                                    <div className="d-flex gap-2 align-items-start flex-column">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className={`${errors.name && `is-invalid`} form-control`}{...register("name", { required: true })} />
                                        {errors.name && <span className="invalid-feedback">
                                            Please enter full name
                                        </span>}
                                    </div>
                                    <div className="d-flex gap-2 align-items-start flex-column">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className={`${errors.email && `is-invalid`} form-control`}{...register("email", { required: true })} />
                                        {errors.email && <span className="invalid-feedback">
                                            Email is required
                                        </span>}
                                    </div>
                                    <div className="d-flex gap-2 align-items-start flex-column">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" className={`${errors.password && `is-invalid`} form-control`} {...register("password", { required: true })} />
                                        {errors.password && <span className="invalid-feedback">
                                            Must type password
                                        </span>}
                                    </div>
                                    <div className="d-flex gap-2 align-items-start flex-column">
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                        <input type="password" id="confirm-password" className={`${errors['confirm-password'] && `is-invalid`} form-control`} {...register('confirm-password',{
                                            validate: value =>
                                                value === password.current || "The passwords do not match"
                                        })} />
                                        {errors['confirm-password'] && <span className="invalid-feedback">
                                            {errors['confirm-password'].message}
                                        </span>}
                                    </div>
                                    <div className="pt-3">
                                        <button className="btn btn-lg btn-success align-self-center" type="submit">Register</button>
                                    </div>
                                    <button className={`${Object.keys(errors).length > 0 ? `visible` : `invisible`} btn btn-link`} onClick={() => clearErrors()} type="button"><MdDeleteSweep /> Remove errors</button>
                                </form>
                                <span className="d-flex align-items-center justify-content-center">
                                    Already have an account?
                                    <button className="btn btn-link" onClick={handleClick}>Login</button>
                                </span>
                                <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} SwiftMoneyTor Inc.</span>
                            </main>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default SignUp