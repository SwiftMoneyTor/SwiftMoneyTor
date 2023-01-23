import NavDropdown from 'react-bootstrap/NavDropdown';

export default function DashboardHeader(){
    return(
        <header className="navbar navbar-dark sticky-top bg-color flex-md-nowrap feather px-0 w-100 shadow py-3">
            <div className="row w-100 px-0 mx-0">
                <div className="col-md-3">
                    <h2 className="navbar-brand col-md-3 px-3 fs-4 ">Company name</h2>
                    <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-md-6">
                    <input className="form-control form-control-dark rounded-5 border-0" type="text" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="navbar-nav col-md-3">
                    <div className="row align-self-end pe-md-3 pe-2">
                        <div className="col-auto mx-0 px-0">
                            <img className='profilePic pt-2' src="/dashboard/default/avatar-male.png" width={40 + "px"} alt=''/>
                        </div>
                        <div className="col-auto">
                            <NavDropdown title="UserName" id="basic-nav-dropdown" className='fs-4'>
                                <NavDropdown.Item href="#action/3.1">
                                    Account
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Company
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}