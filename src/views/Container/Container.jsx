import Devices from "../Devices/Devices"
import Features from "../Features/Features"
import Hero from "../Hero/Hero"
import Login from "../Login/Login"
import MainDashBoard from "../dashboard/MainDashBoard"


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
            {props.userOnline &&
                <>
                    <MainDashBoard />
                </>
            }
        </>
    )
}

export default Container