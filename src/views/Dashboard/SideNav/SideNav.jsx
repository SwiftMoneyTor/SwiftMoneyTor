import { AiOutlineMenu } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { MdDashboard, MdInventory, MdManageAccounts } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import Swal from 'sweetalert2';
import useAppStore from "../../../appStore";

const SideNav = () => {
    const setActive = useAppStore(state => state.setActiveDash)
    const active = useAppStore(state => state.activeDash)
    const setDashboard = useAppStore(state => state.setDashboard)
    const hideMenu = useAppStore(state => state.hideMenu)
    const setHideMenu = useAppStore(state => state.setHideMenu)
    const handleClick = (event) => {
        setActive(event.target.getAttribute('data-sidenav'))
    }
    const handleLogout = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#53893D',
            cancelButtonColor: '#F38E18',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Logged out!',
                    'You have successfully logged out.',
                    'success',
                ).then(result => {
                    if (result.isConfirmed) {
                        setDashboard()
                    }
                })

            }
        })
    }
    return (
        <div className="container-fluid">
            <span className="py-3"><img src="/favicon.png" alt="logo" className="img-fluid" height={!hideMenu ? 100 : 50} width={!hideMenu ? 100 : 50} /></span>
            <span onClick={setHideMenu} className="py-3">
                <AiOutlineMenu />
            </span>
            <nav className="nav flex-row align-items-start">
                <div data-sidenav="dashboard" className={`${active == 'dashboard' && `activeDash`} nav-link ${hideMenu ? 'justify-content-center' : ``}`} onClick={handleClick}>
                    <MdDashboard />
                    {!hideMenu ? 'Dashboard' : ''}
                </div>
                <div data-sidenav="inventory" className={`${active == 'inventory' && `activeDash`} nav-link ${hideMenu ? 'justify-content-center' : ``}`} onClick={handleClick}>
                    <MdInventory />
                    {!hideMenu ? 'Inventory' : ''}
                </div>
                <div data-sidenav="reports" className={`${active == 'reports' && `activeDash`} nav-link ${hideMenu ? 'justify-content-center' : ``}`} onClick={handleClick}>
                    <TbReportAnalytics />
                    {!hideMenu ? 'Reports' : ''}
                </div>
                <div data-sidenav="accounts management" className={`${active == 'accounts management' && `activeDash`} nav-link ${hideMenu ? 'justify-content-center' : ``}`} onClick={handleClick}>
                    <MdManageAccounts />
                    {!hideMenu ? 'Accounts' : ''}
                </div>
                <div data-sidenav="accounts management" className={`nav-link ${hideMenu ? 'justify-content-center' : ``}`} onClick={handleLogout}>
                    <BiLogOut />
                    {!hideMenu ? 'Logout' : ''}
                </div>
            </nav>
        </div>
    )
}

export default SideNav