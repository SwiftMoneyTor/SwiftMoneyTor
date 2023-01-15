import Main from "../Main/Main"
import SideNav from "../SideNav/SideNav"

const DashContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <SideNav />
                </div>
                <div className="col-10">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default DashContainer