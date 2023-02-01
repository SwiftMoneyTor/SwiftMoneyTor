import { NavLink, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './accounts.css';
// import useAppStore from "../../../appStore";
import defaultPic from '../../../assets/dashboard/avatar.png';
import React from 'react';
import ProfileForm from './accountsComponent/profileForm';
import {AiOutlineUpload, AiOutlineForm, AiOutlineSave} from 'react-icons/ai';

const AccountsManagement = () => {

    // const profilepic = useAppStore(state => state.setProfilePic)
    const [profileInfo, setProfileInfo] = React.useState({
        firstName : 'Whistner',
        lastName : 'Rojas',
        age: 25,
        lotNum : '2',
        street: 'Bulusan',
        brgy: 'Paang Bundok',
        city: 'Quezon City',
        zipCode: '1114'
    });

    const editField = true
    const [editInfo, setEditInfo] = React.useState( editField )

    const clickToEdit = (event)=> {
        setEditInfo((oldstate)=> oldstate = !oldstate)
    };

    const clickToSave = ()=> {
        setEditInfo((oldstate)=> oldstate = !oldstate)
    };

    return (
        <div className="col-md-6 container-lg border border-3 rounded-3 mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4 col-lg-6 col-xl-2 d-flex flex-column py-5 leftPane">
                    <div className="profilePic-account pb-2">
                        <img src={`${defaultPic}`}/>
                        <div className='uploadButton col-auto w-100'>
                            <span className='fs-3'><AiOutlineUpload title='upload'/></span>
                        </div>
                    </div>
                    <Nav className="flex-column fs-5 border-end border-1 accLink">
                        <Nav.Item className='py-2'>
                            <NavLink>Profile</NavLink>
                        </Nav.Item>
                        <Nav.Item className='py-2'>
                            <NavLink>Account</NavLink>
                        </Nav.Item>
                        <Nav.Item className='py-2'>
                            <NavLink>Password</NavLink>
                        </Nav.Item>
                        <Nav.Item className='py-2'>
                            <NavLink>Help</NavLink>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className="col-8 col-lg-6 pt-5 d-flex justify-content-center rightPane">

                    <ProfileForm 
                    editInfo={editInfo} 
                    toClick={editInfo === true ? clickToEdit : clickToSave}
                    profileInfo={profileInfo}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default AccountsManagement