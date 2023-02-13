import Sales from './mainDashComp/Sales';
import SummInventory from './mainDashComp/SummaryOfInventory';
import TransactionsModal from './TransactionsModal';


const mainDashboard = () => {
    return (
        <div className="container py-5">
            <div className="col d-flex justify-align-start ps-5">
                <TransactionsModal />
            </div>
            <div className="row g-4 py-3">
                <div className="col">
                    <h2>Inventory</h2>
                    <SummInventory />
                </div>
                <div className="col">
                    <h2>Transaction</h2>
                    <SummInventory />
                </div>
            </div>
            <div className="row">
                <h2>Sales</h2>
                <div className="col">
                    <Sales />
                </div>
            </div>
        </div>
    )
}

export default mainDashboard;