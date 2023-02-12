import { Grid } from "@mui/material";
import './Filters.css';
import InventoryModal from "./InventoryModal";
import ProductsModal from "./ProductsModal";
const Filters = () => {

    return (<>
        <Grid container spacing={2} direction="row" justifyContent='center'>
            <Grid item>
                <InventoryModal />
            </Grid>
            <Grid item>
                <ProductsModal />
            </Grid>
        </Grid>
    </>
    )
}

export default Filters