import { Grid, Stack, Typography } from "@mui/material"
const CheckoutHeader = () => {
    return (
        <Grid item md={12}>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Typography variant="h6">Product Image</Typography>
                <Typography variant="h6">Product Name</Typography>
                <Typography variant="h6">Unit Price</Typography>
                <Typography variant="h6">Amount</Typography>
                <Typography variant="h6">Quantity</Typography>
                <Typography variant="h6">Options</Typography>
            </Stack>
        </Grid>)
}

export default CheckoutHeader