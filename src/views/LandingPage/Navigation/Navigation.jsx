import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAppStore from '../../../appStore';

const Navigation = () => {
    const setComponent = useAppStore(state => state.setComponent)
    const handleClick = (event) => {
        setComponent(event.target.getAttribute('data-nav'))

    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#!" onClick={handleClick}>
                    <Image src='logo4.png' fluid={true} height={275} width={275} data-nav='home' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#!" onClick={handleClick} data-nav='home'>Home</Nav.Link>
                        <Nav.Link href="#!" onClick={handleClick} data-nav='login'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation