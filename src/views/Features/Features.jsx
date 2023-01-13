
const Features = () => {
    const handleMouseOver = (event) => {
        let src = event.target.getAttribute('src')
        event.target.setAttribute('src', src)
    }
    return (
        <div className="container border-top pt-5">
            <h2 className="display-6 pb-2">Perks and Features</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" onMouseOver={handleMouseOver}>
                        <img src="/Report.gif" className="img-fluid" alt="" />
                    </div>
                    <h4>Inventory Management</h4>
                    <p></p>
                </div>
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" onMouseOver={handleMouseOver}>
                        <img src="/Data report.gif" className="img-fluid" alt="" />
                    </div>
                    <h4>Track your sales</h4>
                    <p></p>
                </div>
                <div className="feature-col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3" onMouseOver={handleMouseOver}>
                        <img src="/Street Food.gif" className="img-fluid" alt="" />
                    </div>
                    <h4>SME Friendly</h4>
                    <p></p>
                </div>
            </div>
            <div className="pb-3">
                <a href="https://storyset.com/online" className="text-decoration-underline fst-italic">Online illustrations by Storyset</a>
            </div>

        </div>
    )
}

export default Features