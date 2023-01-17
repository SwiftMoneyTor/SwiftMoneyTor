import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swal from 'sweetalert2';
import useAppStore from "../../../appStore";


const DashBoardNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const setDashboard = useAppStore(state => state.setDashboard)
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
                Swal.fire(
                    'Logged out!',
                    'You have successfully logged out.',
                    'success',
                ).then(result => {
                    if (result.isConfirmed) {
                        setDashboard()
                    }
                })

            }
        })
    }
    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#!">
                    <img src="/logo4.png" alt="logo" className="img-fluid" height={275} width={275} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <Nav.Link href="#dashboard" data-dashnav="dashboard" onClick={handleClick} >Dashboard</Nav.Link>
                        <Nav.Link href="#inventory" data-dashnav="inventory" onClick={handleClick} >Inventory</Nav.Link>
                        <Nav.Link href="#reports" data-dashnav="reports" onClick={handleClick} >Reports</Nav.Link>
                        <Nav.Link href="#accounts" data-dashnav="accounts management" onClick={handleClick} >Accounts</Nav.Link>
                        <Nav.Link href="#logout" onClick={handleLogout} >Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default DashBoardNav