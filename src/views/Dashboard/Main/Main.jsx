import useAppStore from "../../../appStore"
import AccountsManagement from "../AccountsManagement/AccountsManagement"
import Inventory from "../Inventory/Inventory"
import MainDashBoard from "../MainDashboard/MainDashboard"
import Reports from "../Reports/Reports"

const Main = () => {
    const activeTitle = useAppStore(state => state.activeDash)
    return (
        <div className="py-3">
            <h1 className="text-capitalize">
                {activeTitle && activeTitle.split('_')[0]}
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
            {activeTitle == 'accounts management' &&
                <>
                    <AccountsManagement />
                </>
            }
        </div>
    )
}

export default Main