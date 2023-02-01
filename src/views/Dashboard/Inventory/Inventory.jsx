import { Button } from "@mui/material";
import Table from "../../Template/Table/Table";
import Filters from "./Filters";

const Inventory = () => {
    const rows = [
        { id: 1, item: 'Item 1', quantity: 4 },
        { id: 2, item: 'Item 2', quantity: 5 },
        { id: 3, item: 'Item 3', quantity: 10 },
        { id: 4, item: 'Item 4', quantity: 0 },
    ];

    const columns = [
        { field: 'item', headerName: 'Item', width: 500, headerAlign: 'center' },
        { field: 'quantity', headerName: 'Quantity', width: 150, headerAlign: 'center', align: 'center' },
        { field: 'status', headerName: 'Status', width: 150, headerAlign: 'center', renderCell: (cellValues) => cellValues.row.quantity > 0 ? 'in-stock' : 'out-of-stock', align: 'center' },
        {
            field: 'options', headerName: 'Options',
            renderCell: (cellValues) => { return (<Button variant="contained" size="small" color="success">Edit</Button>) }, width: 150, align: "center", headerAlign: 'center',
        },
    ];
    return (
        <div className="container">
            <Filters />
            <div className="container">
                <Table data={{ columns, rows, height: 320 }} />
            </div>
        </div>
    )
}

export default Inventory