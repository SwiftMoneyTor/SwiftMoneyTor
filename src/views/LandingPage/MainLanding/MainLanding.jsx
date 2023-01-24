import React from 'react'
import Footer from '../../Template/Footer/Footer'
import Navigation from '../../Template/Navigation/Navigation'
import AboutUs from '../AboutUs/AboutUs'
import Devices from '../Devices/Devices'
import Features from '../Features/Features'
import Hero from '../Hero/Hero'
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