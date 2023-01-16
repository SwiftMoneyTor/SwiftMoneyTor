const Devices = () => {
    return (
        <div className="container border-top pt-4">
            <p className="display-6"><span className="fw-bold">Compatible</span> with any hardware</p>
            <p>No installation and no specific hardware required.</p>
            <div className="row devices py-5">
                <div className="col">
                    <img src="/devices/pc.png" className="img-fluid" alt="" />
                </div>
                <div className="col">
                    <img src="/devices/laptop.png" className="img-fluid" alt="" />
                </div>
                <div className="col">
                    <img src="/devices/mobile.png" className="img-fluid" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Devices