import { useState } from "react"
import Devices from "../../Devices/Devices"
import Features from "../../Features/Features"
import Login from "../../Login/Login"
import Hero from "../Hero/Hero"


const Container = (props) => {
    const [click, setClick] = useState(false)
    if (click) {
        // this returns a boolean value to parent component
        props.handleDashboard(click)
    }
    return (
        <>
            {/* if component is equal to home show the components inside <></> tag */}
            {props.component == 'home' &&
                <>
                    <Hero />
                    <Features />
                    <Devices />
                </>
            }
            {/* if component is equal to login show the components inside <></> tag */}
            {props.component == 'login' &&
                <>
                    <Login handleLogin={(click) => setClick(click)} />
                </>
            }
        </>
    )
}

export default Container