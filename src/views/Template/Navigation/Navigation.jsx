import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/logo.png';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='m-auto'>
                    <Link to='/'>
                        <Image src={LOGO} fluid={true} height={275} width={275} data-nav='home' />
                    </Link>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation