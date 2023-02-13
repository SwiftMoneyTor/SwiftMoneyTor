import { Grid } from '@mui/material';
import { useEffect, useState } from "react";
import useAppStore from "../../../appStore";
import FetchWithAuth from "../../../utils/API/Fetch/FetchWithAuth";
import Table from "../../Template/Table/Table";

const Reports = () => {
    const credentials = useAppStore(state => state.credentials)
    const [rows, setRows] = useState([])
    const [data, setData] = useState(true)
    useEffect(() => {
        const DataProcessing = async () => {
            let response = await FetchWithAuth('transactions/fetch', credentials.token)
            setRows(response.responsedata.map((a, i) => ({
                id: i,
                transaction: a.transaction,
                items: a.items_array.map(a => ([a.product_details.product_name, `(₱${a.product_details.product_price})`, 'x', a.count].join(' '))).join(' , '),
                total: a.transaction_total,
                merchant: a.merchant_id,
                date:new Date(a.date_added).toDateString()
            })))
        }
        DataProcessing()
    }, [])
    const columns = [
        { field: 'transaction', headerName: 'Transaction', width: 250, headerAlign: 'center' },
        { field: 'items', headerName: 'Items', width: 500, align: 'center', headerAlign: 'center' },
        { field: 'total', headerName: 'Total', width: 150, align: 'center', headerAlign: 'center' },
        { field: 'merchant', headerName: 'Merchant', width: 150, align: 'center', headerAlign: 'center' },
        { field: 'date', headerName: 'Transaction Date', width: 150, align: 'center', headerAlign: 'center' },
    ];
    return (<>
        <Grid container sx={{display:'flex',justifyContent:'center'}}>
            <Grid item md={10} xs={12}>
                <Table data={{ columns, rows, height: 400 }} />
            </Grid>
        </Grid>
    </>)
}

export default Reports
