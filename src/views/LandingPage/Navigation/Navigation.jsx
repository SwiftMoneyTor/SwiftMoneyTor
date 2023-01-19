import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useAppStore from '../../../appStore';
import LOGO from '../../../assets/logo.png';

const Navigation = () => {
    const setComponent = useAppStore(state => state.setComponent)
    const component = useAppStore(state => state.component)
    const handleClick = (event) => {
        setComponent(event.target.getAttribute('data-nav'))
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <Image src={LOGO} fluid={true} height={275} width={275} data-nav='home' />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Link className={`${component == 'home' ? `activeDash` : ``} nav-link`} to='/' data-nav="home" onClick={handleClick}>Home</Link>
                        <Link className={`${component == 'login' ? `activeDash` : ``} nav-link`} to='/login' data-nav="login" onClick={handleClick}>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation