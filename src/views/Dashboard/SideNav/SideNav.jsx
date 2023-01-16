import { MdDashboard, MdInventory, MdManageAccounts } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import useAppStore from "../../../appStore";
const SideNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const handleClick = (event) => {
        setActive(event.target.href.split('/#')[1].toLowerCase())
    }
    return (
        <>
            <span className="py-3"><img src="/favicon.png" alt="logo" className="img-fluid" height={100} width={100} /></span>
            <nav className="nav flex-column gap-3">
                <a href="#Dashboard" className="nav-link" onClick={handleClick}> <MdDashboard /> Dashboard</a>
                <a href="#Inventory" className="nav-link" onClick={handleClick}><MdInventory />  Inventory</a>
                <a href="#Reports" className="nav-link" onClick={handleClick}><TbReportAnalytics /> Reports</a>
                <a href="#Accounts_Management" className="nav-link" onClick={handleClick}><MdManageAccounts /> Accounts Management</a>
            </nav>
        </>
    )
}

export default SideNav