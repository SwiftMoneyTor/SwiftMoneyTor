import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';
import useAppStore from "../../../appStore";


const DashBoardNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const setDashboard = useAppStore(state => state.setDashboard)
    const activeDashboard = useAppStore(state => state.activeDash)
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
                        setDashboard()
                        setActive('dashboard')
                    }
                })
            }
        })
    }
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#dashboard" onClick={handleClick}>
                    <img src="/logo4.png" alt="logo" className="img-fluid" height={275} width={275} data-dashnav="dashboard" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#dashboard" data-dashnav="dashboard" onClick={handleClick} className={`${activeDashboard == "dashboard" ? `activeDash` : ``}`} >Dashboard</Nav.Link>
                        <Nav.Link href="#inventory" data-dashnav="inventory" onClick={handleClick} className={`${activeDashboard == "inventory" ? `activeDash` : ``}`} >Inventory</Nav.Link>
                        <Nav.Link href="#reports" data-dashnav="reports" onClick={handleClick} className={`${activeDashboard == "reports" ? `activeDash` : ``}`} >Reports</Nav.Link>
                        <Nav.Link href="#accounts" data-dashnav="accounts management" onClick={handleClick} className={`${activeDashboard == "accounts management" ? `activeDash` : ``}`} >Accounts</Nav.Link>
                        <Nav.Link href="#logout" data-dashnav="dashboard" onClick={handleLogout} >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default DashBoardNav