import { React, useState } from 'react';
import SidePanel from './SidePanel'
import DashContent from './DashContent'
import Footer from './DashFooter'

export default function MainDashBoard(){

    const [dashPage, setDashpage] = useState('dashboard');

    return(
        <>
            <div className="container-fluid">
                <div className="row mx-0">
                    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <SidePanel dashContentLink={(currentPage) => { setDashpage(currentPage) }}/>
                    </nav>
                    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex pt-md-5 pt-2 justify-content-start ">
                        <DashContent dashContent={dashPage}/>
                    </div>
                </div>
                <div className="col-md-3 text-start ps-md-4 footer bottom-0 fs-5">
                    <Footer />
                </div>
            </div>
        </>
    )
}