const Filters = () => {
    return (
        <div className="d-flex flex-column gap-2 py-3">
            <div className="row">
                <div className="col text-start">
                    <button className="btn btn-outline-success">Add new item</button>
                </div>
                <div className="col d-flex gap-1">
                    <input type="search" className="form-control" />
                    <button className="btn btn-success">Search</button>
                </div>
                <div className="col text-center">
                    <select className="form-select">
                        <option value="">Select Category</option>
                        <option value="">Category 1</option>
                        <option value="">Category 2</option>
                        <option value="">Category 3</option>
                        <option value="">Category 4</option>
                    </select>
                </div>
                <div className="col">
                    <select className="form-select">
                        <option value="">Select Brand</option>
                        <option value="">Brand 1</option>
                        <option value="">Brand 2</option>
                        <option value="">Brand 3</option>
                        <option value="">Brand 4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters