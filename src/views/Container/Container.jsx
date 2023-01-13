import Devices from "../Devices/Devices"
import Features from "../Features/Features"
import Hero from "../Hero/Hero"
import Login from "../Login/Login"


const Container = (props) => {
    return (
        <>
            {props.component == 'home' &&
                <>
                    <Hero />
                    <Features />
                    <Devices />
                </>
            }
            {props.component == 'login' &&
                <>
                    <Login />
                </>
            }
        </>
    )
}

export default Container