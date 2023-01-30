import { Button, Grid } from '@mui/material'
import React from 'react'

const ReportsHeader = () => {
    return (
        <Grid container spacing={2} className="px-4 text-end">
            <Grid item xs={12}>
                <Button variant="contained" color="success">
                   Export
                </Button>
            </Grid>
        </Grid>
    )
}

export default ReportsHeader