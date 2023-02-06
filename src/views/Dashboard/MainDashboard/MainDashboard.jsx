import SummInventory from './mainDashComp/SummaryOfInventory'
import Sales from './mainDashComp/Sales';

const mainDashboard = ()=>{
    return (
        <div className="container py-5">
            <div className="col d-flex justify-align-start ps-5">
                <button className='btn btn-outline-success p-3'>New Transactions</button>
            </div>
            <div className="row g-4 py-3">
                <div className="col">
                    <h2>Inventory</h2>
                    <SummInventory/>
                </div>
                <div className="col">
                    <h2>Transaction</h2>
                    <SummInventory/>
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