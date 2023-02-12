import { Image, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineExport, AiOutlineSetting } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAppStore from "../../../appStore";
import LOGO from '../../../assets/logo.png';
import './DashBoardNav.css';

const DashBoardNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const activeDashboard = useAppStore(state => state.activeDash)
    const setComponent = useAppStore(state => state.setComponent)
    const profilePic = useAppStore(state => state.profilePic)
    const setAuth = useAppStore(state => state.setAuth)
    const credentials = useAppStore(state => state.credentials)
    const navigate = useNavigate()
    const handleClick = (event) => {
        setActive(event.target.getAttribute('data-dashnav'))
    }
    const getAuth = JSON.parse(sessionStorage.getItem('auth'))

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#53893D',
            cancelButtonColor: '#F38E18',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Logged out',
                    text: "You have successfully logged out",
                    icon: 'success',
                    confirmButtonColor: '#53893D'
                }).then(result => {
                    if (result.isConfirmed) {
                        setActive('dashboard')
                        setComponent('home')
                        setAuth()
                        sessionStorage.removeItem('auth')
                        navigate('/', { replace: true }, [navigate])
                    }
                })
            }
            else {
                window.history.back()
            }
        })
    }
    const navObject = ['dashboard', 'inventory', 'reports']

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/dashboard' onClick={handleClick}>
                        <Image src={LOGO} fluid={true} height={275} width={275} data-dashnav="dashboard" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {navObject.map((a, i) => {
                            return (
                                <Link to={`/${a}`} key={i} className={`${activeDashboard == a ? `activeDash` : ``} nav-link`} onClick={handleClick} data-dashnav={a}>
                                    {a.charAt(0).toUpperCase() + a.slice(1)}
                                </Link>
                            )
                        })}
                    </Nav>
                    <Nav>
                        <NavDropdown title={getAuth.email} id="collasible-nav-dropdown">
                            <Nav className="mx-auto">
                                <Nav.Item className='profilePic-nav mx-auto mt-2'>
                                    <Image src={profilePic} />
                                </Nav.Item>
                            </Nav>
                            <Nav className="mx-auto">
                                <Nav.Item className="nav-item noHOver mx-auto">
                                    <span className='profilePic-nav nav-link'>Company</span>
                                </Nav.Item>
                            </Nav>
                            <Nav className="mx-auto">
                                <Nav.Item className="nav-item">
                                    <Link to="/account" className='nav-link ms-2' onClick={handleClick} data-dashnav='account'>
                                        <AiOutlineSetting className='me-2 mb-1' />Account
                                    </Link>
                                </Nav.Item>
                            </Nav>
                            <NavDropdown.Divider />
                            <Nav className="mx-auto">
                                <Nav.Item className="nav-item">
                                    <Link to="/logout" className={`${activeDashboard == "logout" ? `activeDash` : ``} nav-link ms-2`} onClick={handleLogout}>
                                        <AiOutlineExport className='me-2 mb-1' />Logout
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default DashBoardNav