import Filters from "./Filters"
import Table from "./Table"

const Inventory = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <Filters />
            </div>
            <div className="container">
                <Table />
            </div>

        </div>
    )
}

export default Inventory