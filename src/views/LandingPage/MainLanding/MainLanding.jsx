import React from 'react'
import Footer from '../../Footer/Footer'
import AboutUs from '../AboutUs/AboutUs'
import Devices from '../Devices/Devices'
import Features from '../Features/Features'
import Hero from '../Hero/Hero'
import Navigation from '../Navigation/Navigation'
const MainLanding = () => {
    return (
        <>
            <Navigation />
            <Hero />
            <Features />
            <Devices />
            <AboutUs />
            <Footer />
        </>
    )


}

export default MainLanding