import { DataGrid } from '@mui/x-data-grid';

const Table = (props) => {
    const {rows,columns,height,classes}=props.data
    return (
        <div style={{ height, width:'100%'}} className={classes}>
            <DataGrid sx={{ m: 2 }} rows={rows} columns={columns}/>
        </div>)
}

export default Table