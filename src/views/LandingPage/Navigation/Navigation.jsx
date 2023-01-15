import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAppStore from '../../../appStore';

const Navigation = () => {
    const setComponent = useAppStore(state => state.setComponent)
    const handleClick = (event) => {
        setComponent(event.target.innerHTML.toLowerCase())
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Image src='logo4.png' fluid={true} height={150} width={150} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#home" onClick={handleClick}>Home</Nav.Link>
                        <Nav.Link href="#link" onClick={handleClick}>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation