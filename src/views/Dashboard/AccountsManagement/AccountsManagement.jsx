import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { AiOutlineUpload } from 'react-icons/ai';
import Swal from 'sweetalert2';
import useAppStore from '../../../appStore';
import avatar from '../../../assets/dashboard/avatar.png';
import FetchWithAuth from '../../../utils/API/Fetch/FetchWithAuth';
import './accounts.css';
import AccHelp from './accountsComponent/accHelp';
import AccProfileUpload from './accountsComponent/accProfileUpload';
import AccSettings from './accountsComponent/accSettings';
import EditAccount from './accountsComponent/editAccount';
import EditProfileForm from './accountsComponent/editProfileForm';
import ProfileForm from './accountsComponent/profileForm';

const AccountsManagement = () => {

    const credentials = useAppStore(state => state.credentials)
    const profilePic = useAppStore(state => state.profilePic)
    const setProfilePic = useAppStore(state => state.setProfilePic)
    const [links, setLinks] = React.useState('Profile')

    const [profileData, setProfileData] = useState(null);
    const [AccManage, setAccManage] = useState({
        loading: true,
        error: null,
        editInfo: 'cancel',
    });

    const userId = JSON.parse(sessionStorage.getItem('auth')).id
    const userPass = JSON.parse(sessionStorage.getItem('auth')).password

    useEffect(() => {
        FetchWithAuth(`profile/fetch?users_id=${userId}`, credentials.token)
            .then(data => {
                data != '' ? setProfileData(noData => ({ ...data })) : setProfileData(noData => ({ ...data[0] }))
                setAccManage(loading => ({
                    ...loading,
                    loading: false
                }))
                console.log(data)
                if (data.display_image)
                    setProfilePic(data.display_image)
                else
                    setProfilePic(avatar)
            })
            .catch(err => {
                setAccManage(error => ({
                    ...error,
                    error: err
                }))
                console.error(err)
            });
    }, [])

    const clickToEdit = (event, res) => {

        if (event === 'profile') {
            setAccManage((oldstate) => ({ ...oldstate, editInfo: 'profile' }))
        }
        else if (event === 'account') {
            setAccManage((oldstate) => ({ ...oldstate, editInfo: 'account' }))
        } else if (event != null && event.target) {
            setAccManage((oldstate) => ({ ...oldstate, editInfo: event.target.id }))
        } else {
            setAccManage((oldstate) => ({ ...oldstate, editInfo: 'cancel' }))
        }

        if (res != null && res.profile === 'updated') {
            Swal.fire({ title: "Success", text: "Profile update saved", icon: "success", confirmButtonColor: '#53893D' })
        }
        if (res != null && res.account === 'updated') {
            Swal.fire({ title: "Success", text: "Account update saved", icon: "success", confirmButtonColor: '#53893D' })
        }
    };
    const profile = () => {
        if (AccManage.editInfo != 'profile') {
            return (
                <ProfileForm
                    userId={userId}
                    editInfo={AccManage.editInfo}
                    toClick={clickToEdit}
                    profileInfo={profileData[0] || profileData} 
                />
            )
        } else {
            return (
                <EditProfileForm
                    userId={userId}
                    editInfo={AccManage.editInfo}
                    toClick={clickToEdit}
                    profileInfo={profileData[0] || profileData}
                />
            )
        }
    }

    const account = () => {
        if (AccManage.editInfo != 'account') {
            return (
                <AccSettings
                    editInfo={AccManage.editInfo}
                    toClick={clickToEdit}
                    AccInfo={profileData[0] || profileData}
                />
            )
        } else {
            return (
                <EditAccount 
                    editInfo={AccManage.editInfo } 
                    toClick={ clickToEdit }
                    AccInfo={profileData[0] || profileData}
                />
            )
        }
    }

    const accLink = (event) => {
        const { id, innerHTML } = event.target
        id != 'Upload' ? setLinks((link) => link = innerHTML) : setLinks((link) => link = id)
    }

    return (
        <div className="col-md-6 container-lg border border-3 rounded-3 mt-5 borderHeight">
            <div className="row d-flex justify-content-center">
                <div className="col-4 col-lg-6 col-xl-2 d-flex flex-column align-content-center py-5 leftPane">
                    <div className="profilePic-account pb-2">
                        <img src={`${profilePic}`} />
                        <div className='uploadButton col-auto w-100'>
                            <span className='fs-3' style={{ cursor: 'pointer' }}><AiOutlineUpload title='Upload' className='mb-2' id='Upload' onClick={accLink} /></span>
                        </div>
                    </div>
                    <div className=''>
                        <Nav className="flex-column fs-5 align-content-center border-end border-2 accLink">
                            <Nav.Item className='py-2'>
                                {AccManage.loading === false ? <NavLink onClick={accLink}>Profile</NavLink> : "Profile"}
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                {AccManage.loading === false ? <NavLink onClick={accLink}>Account</NavLink> : "Account"}
                            </Nav.Item>
                            <Nav.Item className='py-2'>
                                {AccManage.loading === false ? <NavLink onClick={accLink}>Help</NavLink> : "Help"}
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div className="col-8 col-lg-6 d-flex py-md-5 py-sm-2 flex-column justify-content-center rightPane">
                    {
                        AccManage.loading === true ? <div className="d-flex justify-content-center">
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