import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class SideNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        expanded: false
        };
        this.onToggle = this.onToggle.bind(this);
        this.render = this.render.bind(this);
    }

    onToggle() {
        this.setState({ expanded: !this.state.expanded });
    }

    render() {

        const handleClickDashPage = (event) => {
            this.props.dashContentLink(event.target.innerHTML.toLowerCase())
        }

        console.log(this)

        return (
        <Navbar expand="md" expanded={this.state.expanded} onToggle={this.onToggle} variant="light" className='ps-lg-3 mt-lg-5 col-auto position-relative'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column fs-4 sideBarActive sidebar">
                    <NavItem>
                        <Nav.Link href="#dashboard">
                            <div className="row d-flex justify-content-center" onClick={handleClickDashPage}>
                                <div className="col-2"><i className="fa-solid fa-house fs-4"></i></div>
                                <div className="col-2">Dashboard</div>
                            </div>
                        </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#orders">
                            <div className="row d-flex justify-content-center" onClick={handleClickDashPage}>
                                <div className="col-2"><i className="fa-solid fa-bag-shopping fs-4"></i></div>
                                <div className="col-2">Orders</div>
                            </div>
                        </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#inventory" onClick={handleClickDashPage}>
                        <div className="row d-flex justify-content-center">
                                <div className="col-2"><i className="fa-solid fa-boxes-stacked fs-4"></i></div>
                                <div className="col-2">Inventory</div>
                            </div>
                        </Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href="#reports">
                            <div className="row d-flex justify-content-center" onClick={handleClickDashPage}>
                                <div className="col-2"><i className="fa-solid fa-file-pen fs-4"></i></div>
                                <div className="col-2">Reports</div>
                            </div>
                        </Nav.Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default SideNavbar;