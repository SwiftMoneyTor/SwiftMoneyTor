import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAppStore from "../../../appStore";
import LOGO from '../../../assets/logo.png';


const DashBoardNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const activeDashboard = useAppStore(state => state.activeDash)
    const setComponent = useAppStore(state => state.setComponent)
    const navigate = useNavigate()
    const handleClick = (event) => {
        setActive(event.target.getAttribute('data-dashnav'))
    }
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
                        sessionStorage.clear()
                        setActive('dashboard')
                        setComponent('home')
                        navigate('/', { replace: true }, [navigate])
                    }
                })
            }
        })
    }
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
                        <Link to="/dashboard" className={`${activeDashboard == "dashboard" ? `activeDash` : ``} nav-link`} onClick={handleClick} data-dashnav="dashboard">
                            Dashboard
                        </Link>
                        <Link to="/inventory" className={`${activeDashboard == "inventory" ? `activeDash` : ``} nav-link`} onClick={handleClick} data-dashnav="inventory">
                            Inventory
                        </Link>
                        <Link to="/reports" className={`${activeDashboard == "reports" ? `activeDash` : ``} nav-link`} onClick={handleClick} data-dashnav="reports">
                            Reports
                        </Link>
                        <Link to="/accounts" className={`${activeDashboard == "accounts management" ? `activeDash` : ``} nav-link`} onClick={handleClick} data-dashnav="accounts management">
                            Accounts
                        </Link>
                        <Link to="/logout" className={`${activeDashboard == "logout" ? `activeDash` : ``} nav-link`} onClick={handleLogout}>
                            Logout
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default DashBoardNav