import { Button, Grid, Stack, Tooltip, Typography } from "@mui/material"
import { Card } from "react-bootstrap"
import { BsPencilSquare } from "react-icons/bs"
import { TbAsterisk } from "react-icons/tb"
const AccountsTab = () => {
    return (
        <div className='py-5'>
            <Grid container>
                <Grid item><Card>
                    <Card.Body className="d-flex flex-column align-items-center">
                        <h3>Auth Information</h3>
                        <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="space-between">
                            <Typography variant="overline" display="block" gutterBottom>
                                Email Address
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                email@domain.com
                            </Typography>
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="space-between">
                            <Typography variant="overline" display="block" gutterBottom>
                                Password
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                <TbAsterisk />
                                <TbAsterisk />
                                <TbAsterisk />
                                <TbAsterisk />
                                <TbAsterisk />
                                <TbAsterisk />
                            </Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="flex-end" sx={{ width: '100%' }}>
                            <Tooltip title="Edit">
                                <Button>
                                    <BsPencilSquare />
                                </Button>
                            </Tooltip>
                        </Stack>
                    </Card.Body>
                </Card></Grid>
                <Grid item>
                    <Card>
                        <Card.Body className="d-flex flex-column align-items-center">
                            <h3>Auth Information</h3>
                            <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="space-between">
                                <Typography variant="overline" display="block" gutterBottom>
                                    Email Address
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                    email@domain.com
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={2} sx={{ width: '100%' }} justifyContent="space-between">
                                <Typography variant="overline" display="block" gutterBottom>
                                    Password
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                    <TbAsterisk />
                                    <TbAsterisk />
                                    <TbAsterisk />
                                    <TbAsterisk />
                                    <TbAsterisk />
                                    <TbAsterisk />
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="flex-end" sx={{ width: '100%' }}>
                                <Tooltip title="Edit">
                                    <Button>
                                        <BsPencilSquare />
                                    </Button>
                                </Tooltip>
                            </Stack>
                        </Card.Body>
                    </Card></Grid>
            </Grid>
        </div >
    )
}
export default AccountsTab