import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAppStore from '../../appStore'

const PrivateRoutes = () => {
    const token = useAppStore(state => state.auth)
    let auth = { 'token': token }
    return (
        auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes