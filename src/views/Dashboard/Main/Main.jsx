import useAppStore from "../../../appStore"
import AccountsManagement from "../AccountsManagement/AccountsManagement"
import Inventory from "../Inventory/Inventory"
import MainDashBoard from "../MainDashboard/MainDashboard"
import Reports from "../Reports/Reports"

const Main = () => {
    const activeTitle = useAppStore(state => state.activeDash)
    return (
        <div className="p-3 mt-4">
            <h1>
                {activeTitle != 'dashboard' ? activeTitle && activeTitle.split('_')[0] : 'OverView'}
            </h1>
            {activeTitle == 'dashboard' &&
                <>
                    <MainDashBoard />
                </>
            }
            {activeTitle == 'inventory' &&
                <>
                    <Inventory />
                </>
            }
            {activeTitle == 'reports' &&
                <>
                    <Reports />
                </>
            }
            {activeTitle == 'accounts' &&
                <>
                    <AccountsManagement />
                </>
            }
        </div>
    )
}

export default Main