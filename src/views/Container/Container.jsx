import Devices from "../Devices/Devices"
import Features from "../Features/Features"
import Hero from "../Hero/Hero"

const Container = (props) => {
    return (
        <div>
            {props.component == 'home' &&
                <>
                    <Hero />
                    <Features />
                    <Devices />
                </>
            }
        </div>
    )
}

export default Container