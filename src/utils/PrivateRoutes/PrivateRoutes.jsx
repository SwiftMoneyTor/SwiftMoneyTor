import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAppStore from '../../appStore'
const PrivateRoutes = () => {
    const token = useAppStore(state => state.auth)


const sessionAuth = JSON.parse(sessionStorage.getItem('auth')).token

    let auth = { 'token': sessionAuth }

    return (
        auth.token== true ? <Outlet /> : <Navigate to="/login" />
    )
    
}

export default PrivateRoutes