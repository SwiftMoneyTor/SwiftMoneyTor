import { Col, Container, Image, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdDeleteSweep } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../appStore";
import loginImgLg from '../../assets/Login-lg.png';
import FetchAPI from "../../utils/API/Fetch/FetchAPI";
import Navigation from '../Template/Navigation/Navigation';

import './Login.css';
const Login = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    const setAuth = useAppStore(state => state.setAuth)
    const setCredentials = useAppStore(state => state.setCredentials)
    const credentials = useAppStore(state => state.credentials)
    const navigate = useNavigate()
    const handleSubmition = (data) => {
        if (Object.keys(data).length > 0) {
            setAuth()
            sessionStorage.setItem('auth', true)

            const DataProcessing = async () => {
                let response = await
                    FetchAPI('api/auth/login', {
                        "email": data.email,
                        "password": data.password
                    }, 'POST')
                let creds = { ...credentials, token: response.authorization.token, name: response.user.name, email: response.user.email }
                setCredentials(creds)
            }
            DataProcessing()

            if (Object.values(credentials).length > 0)
                navigate('/dashboard', { replace: true }, [navigate])
        }
    }
    const handleClick = () => {
        navigate('/sign-up', { replace: true }, [navigate])
    }
    return (
        <>
            <Navigation />
            <div className="container-fluid">

                <Container fluid="xl">
                    <Row className="align-items-center mt-3 mt-md-5">
                        <Col className="d-none d-md-inline-block">
                            <Image src={loginImgLg} className='login-image px-4' />
                        </Col>
                        <Col className="">
                            <main className="form-signin m-auto">
                                <form action="" onSubmit={handleSubmit(handleSubmition)} className=" m-auto d-flex flex-column gap-2">
                                    {/* <fieldset className="border border-success p-5 rounded-5"><legend>Login</legend> */}
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
                                    <div className="pt-3">
                                        <button className="btn btn-lg btn-success align-self-center" type="submit">Sign in</button>
                                    </div>
                                    <button className={`${Object.keys(errors).length > 0 ? `visible` : `invisible`} btn btn-link`} onClick={() => clearErrors()} type="button"><MdDeleteSweep /> Remove errors</button>
                                    {/* </fieldset> */}
                                </form>
                                <div className="mobileDarkBg me-1">
                                    <span className="d-flex align-items-center justify-content-center">
                                        Don't have an account?
                                        <button className="btn btn-link" onClick={handleClick}>Sign-up</button>
                                    </span>
                                    <span className="mb-3 text-dark5173-50 mb-md-0">© {new Date().getFullYear()} SwiftMoneyTor Inc.</span>
                                </div>
                            </main>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>

    )
}

export default Login