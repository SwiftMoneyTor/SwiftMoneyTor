import React from 'react';


export default function SideNavbar(props){

    const [ActiveLink, setActiveLink] = React.useState('dashboard')


    const handleClickDashPage = (event) => {

        event.target.name != ActiveLink && document.querySelector(`a[name=${ActiveLink}]`).setAttribute("class","nav-link")
        props.dashContentLink(event.target.name)
        event.target.setAttribute("class", "nav-link active")
        setActiveLink( () => event.target.name)

    }

    return(
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="position-sticky sidebar-sticky text-start ps-md-3">
            <ul className="nav flex-column fs-4">
                <li className="nav-item">
                    <a className="nav-link active" name="dashboard" onClick={handleClickDashPage} aria-current="page" href="#">
                        <div className="row">
                            <div className="col-1"><i className="fa-solid fa-house fs-4 align-text-bottom"></i></div>
                            <div className="col-1 pt-1 ms-2 ms-md-3">Dashboard</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" name="orders" onClick={handleClickDashPage} href="#">
                        <div className="row">
                            <div className="col-1"><i className="fa-solid fa-bag-shopping fs-4 align-text-bottom"></i></div>
                            <div className="col-1 pt-1 ms-2 ms-md-3">Orders</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" name="inventory" onClick={handleClickDashPage} href="#">
                        <div className="row">
                            <div className="col-1"><i className="fa-solid fa-boxes-stacked fs-4"></i></div>
                            <div className="col-1 pt-1 ms-2 ms-md-3">Inventory</div>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" name="reports" onClick={handleClickDashPage} href="#">
                        <div className="row">
                            <div className="col-1"><i className="fa-solid fa-file-pen fs-4 align-text-bottom"></i></div>
                            <div className="col-1 pt-1 ms-2 ms-md-3">Reports</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )

}