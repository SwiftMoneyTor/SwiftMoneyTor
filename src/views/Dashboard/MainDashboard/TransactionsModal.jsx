import { Badge, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, FilledInput, FormControl, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingBasket2Line } from 'react-icons/ri';

const TransactionsModal = () => {
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClick = () => { console.log('test') };
    const handleClickAddToCart = (e) => {
        setCart(prevCart => [...prevCart, JSON.parse(e.target.getAttribute('data-value'))])
        console.log(cart.length)
    }
    const cards = [
        { image: 'image1', product_name: 'Product 1', amount: 100 },
        { image: 'image2', product_name: 'Product 2', amount: 200 },
        { image: 'image3', product_name: 'Product 3', amount: 300 },
        { image: 'image4', product_name: 'Product 4', amount: 400 },
        { image: 'image5', product_name: 'Product 5', amount: 500 },
        { image: 'image6', product_name: 'Product 6', amount: 600 },
        { image: 'image7', product_name: 'Product 7', amount: 700 },
    ]
    return (
        <>
            <Button variant="outlined" onClick={handleShow} color="success">
                New Transaction
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid container justifyContent='space-between' alignItems="center">
                        <Grid item>
                            <FormControl variant="outlined" sx={{ padding: '10px' }}>
                                <FilledInput
                                    id="search"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClick}
                                                edge="end"
                                            >
                                                <AiOutlineSearch />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <IconButton size="large">
                                <Badge badgeContent={cart.length} color="success">
                                    <RiShoppingBasket2Line />
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>

                    <Box style={{ maxHeight: '100vh', overflow: 'auto' }}>
                        <Grid container spacing={2} sx={{ padding: '10px' }}>
                            {
                                cards.map((card, i) => {
                                    card['key'] = i
                                    let updatedCard = card
                                    return (
                                        <Grid item key={i} xs={12} md={4} sm={4}>
                                            <Card sx={{ height: 275 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="140"
                                                        image="https://via.placeholder.com/300.png/53893D/fff"
                                                        alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {card.product_name}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button variant="contained" size="small" color="warning" onClick={handleClickAddToCart} data-value={JSON.stringify(updatedCard)}>
                                                        Add to cart
                                                    </Button>
                                                </CardActions>
                                            </Card></Grid>

                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TransactionsModal