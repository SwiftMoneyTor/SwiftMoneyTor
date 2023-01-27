import useAppStore from "../../../appStore"
import Login from "../../Login/Login"
import Devices from "../Devices/Devices"
import Features from "../Features/Features"
import Hero from "../Hero/Hero"


const Container = () => {
    const component = useAppStore(state => state.component)
    return (
        <>
            {/* if component is equal to home show the components inside <></> tag */}
            {component == 'home' &&
                <>
                    <Hero />
                    <Features />
                    <Devices />
                </>
            }
            {/* if component is equal to login show the components inside <></> tag */}
            {component == 'login' &&
                <>
                    <Login />
                </>
            }
        </>
    )
}

export default Container