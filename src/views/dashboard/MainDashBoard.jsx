import { React, useState } from 'react';
import SidePanel from './SidePanel'
import DashContent from './DashContent'

export default function MainDashBoard(){

    const [dashPage, setDashpage] = useState('dashboard');

    return(
        <>
            <div className="row mx-0">
                <div className="col-md-4 col-lg-4 col-xl-3 col-xxl-2 d-md-block sideNav shadow">
                    <SidePanel dashContentLink={(currentsPage) => { setDashpage(currentsPage) }}/>
                </div>
                <div className="col-md-8 col-lg-8 col-xl-9 pt-lg-5 pt-md-3 dashContent text-start ">
                    <DashContent dashContent={dashPage}/>
                </div>
            </div>
        </>
    )
}