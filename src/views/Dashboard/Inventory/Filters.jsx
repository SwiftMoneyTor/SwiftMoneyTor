import { Button, Grid } from "@mui/material"
import './Filters.css'
const Filters = () => {
    return (<>
        <Grid container spacing={2} className="px-5 text-end">
            <Grid item xs={12}>
                    <Button variant="contained" color="success">
                        Add new item
                    </Button>
            </Grid>
        </Grid>
    </>
    )
}

export default Filters