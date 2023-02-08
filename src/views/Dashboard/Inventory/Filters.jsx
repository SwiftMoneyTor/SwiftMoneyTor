import { Grid } from "@mui/material";
import './Filters.css';
import InventoryModal from "./InventoryModal";
const Filters = () => {
    
    return (<>
        <Grid container spacing={2} className="px-5 text-end">
            <Grid item xs={12}>
                <InventoryModal />
            </Grid>
        </Grid>
    </>
    )
}

export default Filters