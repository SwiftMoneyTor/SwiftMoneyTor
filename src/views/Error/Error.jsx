import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import errorImg from '../../assets/404 Error.gif'
import LOGO from '../../assets/logo.png'

const Error = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/', { replace: true }, [navigate])
    }
    return (
        <Container className='d-flex flex-column py-3 align-items-center'>
            <Image src={LOGO} height={100} width={275} />
            <Image src={errorImg} className="img-fluid" height={300} width={500} />
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
            <div className='py-5'>
                <button className='btn btn-success' onClick={handleClick}>Return to home</button>
            </div>
        </Container>
    )
}

export default Error