import { useEffect, useState } from "react";
import useAppStore from "../../../appStore";
import FetchWithAuth from "../../../utils/API/Fetch/FetchWithAuth";
import Table from "../../Template/Table/Table";
import Filters from "./Filters";

const Inventory = () => {
    const [rows, setRows] = useState([])
    const credentials = useAppStore(state => state.credentials)
    useEffect(() => {
        FetchWithAuth('inventory/fetch', credentials.token).then(response => {
            let r = response.responsedata.map((a, i) => ({ ...a, id: i + 1 }));
            setRows(r)
        })
    }, [])

    const columns = [
        { field: 'item_name', headerName: 'Item', width: 500, headerAlign: 'center' },
        { field: 'item_quantity', headerName: 'Quantity', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'status', headerName: 'Status', width: 150, headerAlign: 'center', renderCell: (cellValues) => cellValues.row.item_quantity > 0 ? 'in-stock' : 'out-of-stock', align: 'center' },
    ];
    return (
        <div className="container pt-3">
            <Filters />
            <div className="container">
                <Table data={{ columns, rows, height: 320 }} />
            </div>
        </div>
    )
}

export default Inventory