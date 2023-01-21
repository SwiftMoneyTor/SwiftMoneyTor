import NavDropdown from 'react-bootstrap/NavDropdown';

export default function DashboardHeader(){
    return(
        <header className="navbar sticky-top bg-color flex-md-nowrap shadow">
            <h2 className="navbar-brand col-md-3 col-lg-2 fs-4 my-2">Company name</h2>
            <div className="navbar-nav pe-lg-3 pe-md-4 pe-xl-5">
                <div className="row">
                    <div className="col-auto mx-0 px-0 pt-1">
                        <img className='profilePic' src="/dashboard/default/avatar-male.png" width={40 + "px"} alt=''/>
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
        </header>
    )
}