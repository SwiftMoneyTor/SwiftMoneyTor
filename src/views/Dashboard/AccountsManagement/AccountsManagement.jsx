import { NavLink, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './accounts.css';
// import useAppStore from "../../../appStore";
import defaultPic from '../../../assets/dashboard/avatar.png';
import React from 'react';
import ProfileForm from './accountsComponent/profileForm';
import AccSettings from './accountsComponent/accSettings';
import AccHelp from './accountsComponent/accHelp';
import AccProfileUpload from './accountsComponent/accProfileUpload';
import {AiOutlineUpload, AiOutlineForm, AiOutlineSave} from 'react-icons/ai';


const AccountsManagement = () => {

    // const profilepic = useAppStore(state => state.setProfilePic)
    const [profileInfo, setProfileInfo] = React.useState({
        firstName : 'Whistner',
        lastName : 'Rojas',
        bDay: '1992/01/10',
        lotNum : 2,
        street: 'Bulusan',
        brgy: 'Paang Bundok',
        city: 'Quezon City',
        zipCode: 1114,
        email: 'whistner@gmail.com',
        password: '123alpha',
        profilePic: 'default',
    });

    const [editInfo, setEditInfo] = React.useState(true)

    const clickToEdit = (event)=> {
        setEditInfo((oldstate)=> oldstate = !oldstate)
    };

    const clickToSave = (event)=>{
        event.preventDefault()
        clickToEdit()
    };

    const handleChange = (event) => {
        const {name, value} = event.target
        setProfileInfo((prevInfo)=> ({
            ...prevInfo,
            [name] : value
        }))
    }

    const [links, setLinks] = React.useState('Profile')

    const accLink = (event) =>{
        const { id, innerHTML} = event.target
        id !='Upload' ? setLinks((link)=> link = innerHTML) : setLinks((link)=> link = id)
    }

    return (
        <div className="col-md-6 container-lg border border-3 rounded-3 mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-4 col-lg-6 col-xl-2 d-flex flex-column align-content-center py-5 leftPane">
                    <div className="profilePic-account pb-2">
                        <img src={`${defaultPic}`}/>
                        <div className='uploadButton col-auto w-100'>
                            <span className='fs-3' style={{cursor: 'pointer'}}><AiOutlineUpload title='Upload' className='mb-2' id='Upload' onClick={accLink}/></span>
                        </div>
                    </div>
                    <div className=''>
                        <Nav className="flex-column fs-5 align-content-center border-end border-2 accLink">
                            <Nav.Item className='py-2'>
                                <NavLink onClick={accLink}>Profile</NavLink>
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                <NavLink onClick={accLink}>Account</NavLink>
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                <NavLink onClick={accLink}>Help</NavLink>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="col-8 col-lg-6 d-flex py-md-5 py-sm-2 flex-column justify-content-center rightPane">

                    {
                        links === 'Profile' && <ProfileForm 
                                                    editInfo={editInfo} 
                                                    toClick={editInfo === true ? clickToEdit : clickToSave}
                                                    profileInfo={profileInfo}
                                                    submit={clickToSave}
                                                    onChange={handleChange}
                                                />
                    }
                    {
                        links === 'Account' && <AccSettings 
                                                    editInfo={editInfo} 
                                                    toClick={editInfo === true ? clickToEdit : clickToSave}
                                                    profileInfo={profileInfo}
                                                    submit={clickToSave}
                                                    onChange={handleChange}
                                                />
                    }
                    {
                        links === 'Help' && <AccHelp />
                    }
                    {
                        links === 'Upload' && <AccProfileUpload />
                    }

                </div>
            </div>
        </div>
    )
}

export default AccountsManagement