import { BiLogOut } from "react-icons/bi";
import { MdDashboard, MdInventory, MdManageAccounts } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import useAppStore from "../../../appStore";
const SideNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const active = useAppStore(state => state.activeDash)
    const setDashboard = useAppStore(state => state.setDashboard)
    const handleClick = (event) => {
        setActive(event.target.getAttribute('data-sidenav'))
    }
    const handleLogout = () => {
        setDashboard(false)
    }
    return (
        <>
            <span className="py-3"><img src="/favicon.png" alt="logo" className="img-fluid" height={100} width={100} /></span>
            <nav className="nav flex-column align-items-start">
                <button data-sidenav="dashboard" className={`${active == 'dashboard' && `activeDash`} nav-link`} onClick={handleClick}> <MdDashboard /> Dashboard</button>
                <button data-sidenav="inventory" className={`${active == 'inventory' && `activeDash`} nav-link`} onClick={handleClick}><MdInventory />  Inventory</button>
                <button data-sidenav="reports" className={`${active == 'reports' && `activeDash`} nav-link`} onClick={handleClick}><TbReportAnalytics /> Reports</button>
                <button data-sidenav="accounts management" className={`${active == 'accounts management' && `activeDash`} nav-link`} onClick={handleClick}><MdManageAccounts /> Accounts</button>
                <button data-sidenav="accounts management" className={`nav-link`} onClick={handleLogout}><BiLogOut /> Logout</button>
            </nav>
        </>
    )
}

export default SideNav