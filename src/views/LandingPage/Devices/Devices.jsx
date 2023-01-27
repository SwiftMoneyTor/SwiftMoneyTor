import Laptop from '../../../assets/devices/laptop.png'
import Mobile from '../../../assets/devices/mobile.png'
import PC from '../../../assets/devices/pc.png'
import './Devices.css'
const Devices = () => {
    return (
        <div className="container border-top pt-4">
            <p className="display-6"><span className="fw-bold">Compatible</span> with any device</p>
            <p className='subtitle'>No installation and no specific hardware required.</p>
            <div className="row devices py-5">
                <div className="col">
                    <img src={PC} className="img-fluid" alt="" />
                </div>
                <div className="col">
                    <img src={Laptop} className="img-fluid" alt="" />
                </div>
                <div className="col">
                    <img src={Mobile} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Devices