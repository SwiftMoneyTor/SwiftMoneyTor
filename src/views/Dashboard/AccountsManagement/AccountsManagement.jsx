import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './accounts.css';
// import useAppStore from "../../../appStore";
import React, {useEffect, useState} from 'react';
import ProfileForm from './accountsComponent/profileForm';
import EditProfileForm from './accountsComponent/editProfileForm';
import AccSettings from './accountsComponent/accSettings';
import AccHelp from './accountsComponent/accHelp';
import AccProfileUpload from './accountsComponent/accProfileUpload';
import {AiOutlineUpload} from 'react-icons/ai';
import defaultPic from '../../../assets/dashboard/avatar.png';
import useAppStore from '../../../appStore';
import EditAccount from './accountsComponent/editAccount';
import Swal from 'sweetalert2';

const AccountsManagement = () => {

    const credentials = useAppStore(state => state.credentials)

    const [links, setLinks] = React.useState('Profile')

    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editInfo, setEditInfo] = React.useState(true);

    let profileId = 1
    let getUserProfileUrl = `http://localhost:8000/api/userProfile/?users_id=${profileId}`

    useEffect(() =>{
            fetch(getUserProfileUrl , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(profileData => {
                setProfileData(noData => ({...profileData}))
                setLoading(false)
            })
            .catch(err => {
                setError(err)
                console.error(err)
            });
    }, [editInfo])

    const clickToEdit = (event)=> {
        setEditInfo((oldstate)=> oldstate = !oldstate)
        if (event.profile === 'updated'){
            Swal.fire({ title: "Success", text: "Profile update saved", icon: "success", confirmButtonColor: '#53893D' })
            }
        if (event.account === 'updated'){
            Swal.fire({ title: "Success", text: "Account update saved", icon: "success", confirmButtonColor: '#53893D' })
            }
    };
    // console.log(saved)
    const profile = () =>{
        if(editInfo === true){
            return (
                <ProfileForm 
                    editInfo={editInfo} 
                    toClick={clickToEdit}
                    profileInfo={profileData[0]} 
                />
            )
        }else{
            return (
                <EditProfileForm 
                    editInfo={editInfo} 
                    toClick={clickToEdit}
                    profileInfo={profileData[0]}
                />
            )
        }
    }

    const account = () =>{
        if(editInfo === true){
            return (
                <AccSettings
                    editInfo={editInfo} 
                    toClick={clickToEdit}
                    AccInfo={profileData[0]} 
                />
            )
        }else{
            return (
                <EditAccount 
                    editInfo={editInfo} 
                    toClick={ clickToEdit }
                    AccInfo={profileData[0]}
                />
            )
        }
    }

    const accLink = (event) => {
        const { id, innerHTML } = event.target
        id != 'Upload' ? setLinks((link) => link = innerHTML) : setLinks((link) => link = id)
        editInfo === false && clickToEdit()
    }

    return (
        <div className="col-md-6 container-lg border border-3 rounded-3 mt-5 borderHeight">
            <div className="row d-flex justify-content-center">
                <div className="col-4 col-lg-6 col-xl-2 d-flex flex-column align-content-center py-5 leftPane">
                    <div className="profilePic-account pb-2">
                        <img src={`${defaultPic}`} />
                        <div className='uploadButton col-auto w-100'>
                            <span className='fs-3' style={{ cursor: 'pointer' }}><AiOutlineUpload title='Upload' className='mb-2' id='Upload' onClick={accLink} /></span>
                        </div>
                    </div>
                    <div className=''>
                        <Nav className="flex-column fs-5 align-content-center border-end border-2 accLink">
                            <Nav.Item className='py-2'>
                                {loading === false ? <NavLink onClick={accLink}>Profile</NavLink> : "Profile"}
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                {loading === false ? <NavLink onClick={accLink}>Account</NavLink> : "Account"}
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                {loading === false ? <NavLink onClick={accLink}>Help</NavLink> : "Help"}
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="col-8 col-lg-6 d-flex py-md-5 py-sm-2 flex-column justify-content-center rightPane">
                    {
                        loading === true ?  <div className="d-flex justify-content-center">
                                                <div className="spinner-border" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div> : links === 'Profile' && profile()
                    }
                    {
                        links === 'Account' && account()
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