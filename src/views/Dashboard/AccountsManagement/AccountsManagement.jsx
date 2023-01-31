import { Grid } from "@mui/material"
import AccountsTab from "./AccountsTab"
import ImageArea from "./ImageArea"

const AccountsManagement = () => {
    return (
        <div className="container">
            <Grid container>
                <Grid item md={3} xs={12}>
                    <ImageArea />
                </Grid>
                <Grid item md={9} xs={12}>
                    <AccountsTab />
                </Grid>
            </Grid>
        </div>)
}

export default AccountsManagement