import React from 'react';
import MainContent from './dashPages/MainContent';
import Orders from './dashPages/Orders'
import Inventory from './dashPages/Inventory'
import Reports from './dashPages/Reports'

export default function DashContent(props){
    console.log(props)
    return(
        <>
            {props.dashContent == "dashboard" && <MainContent />}
            {props.dashContent == "orders" && <Orders />}
            {props.dashContent == "inventory" && <Inventory />}
            {props.dashContent == "reports" && <Reports />}
        </>
    )
}