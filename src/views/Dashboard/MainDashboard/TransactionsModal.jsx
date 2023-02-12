import { Badge, Box, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { MdOutlineKeyboardReturn } from 'react-icons/md';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import useAppStore from '../../../appStore';
import FetchFormData from '../../../utils/API/Fetch/FetchFormData';
import FetchWithoutBody from '../../../utils/API/Fetch/FetchWithoutBody';
import CheckoutHeader from './CheckoutHeader';
const TransactionsModal = () => {
    const credentials = useAppStore(state => state.credentials)
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const [cards, setCards] = useState([]);
    const [showCards, setShowCards] = useState(true)
    const [showCart, setShowCart] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartTotal, setCartTotal] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClickAddToCart = (e) => {
        let data = JSON.parse(e.target.getAttribute('data-value'))
        if (cart.filter(item => item.product_id === data.product_id).length < 1) {
            data['quantity'] = 1
            data['price_total'] = data.product_price
            setCart(prevCart => [...prevCart, data])
        }
        else {
            cart.forEach((item, i) => {
                if (item.product_id === data.product_id) {
                    item.quantity = item.quantity + 1
                    item.price_total = item.product_price * item.quantity
                }
            })
            setCart(cart)
        }
        setCartQuantity(prevCartQuantity => prevCartQuantity + 1)
    }
    useEffect(() => {
        const processor = () => {
            FetchWithoutBody('products/fetch', credentials.token).then(res =>
                setCards(res.responsedata))
        }
        processor()
    }, [show])

    const handleClickCart = () => {
        setShowCards(false)
        setShowCart(true)
        if (cartQuantity > 1)
            setCartTotal(cart.map(a => a.price_total).reduce((b, c) => b + c))
        else if (cartQuantity === 1) {
            setCartTotal(cart.map(a => a.price_total))
        }
    }
    const handleClickReturn = () => {
        setShowCards(true)
        setShowCart(false)
    }
    const handleClickDeleteCartItem = (e) => {
        let data = JSON.parse(e.target.getAttribute('data-value'))
        let ncart = cart.filter(item => item.product_id !== data.product_id)
        console.log(ncart)
        setCart(ncart)
        if (cartQuantity > 1) {
            setCartTotal(ncart.map(a => a.price_total).reduce((b, c) => b + c))
            setCartQuantity(ncart.map(a => a.quantity).reduce((b, c) => b + c))
        } else if (ncart.length === 0) {
            setCartQuantity(0)
            setCartTotal(0)
        }
    }
    const handleClickMinusCartItem = (e) => {
        console.log(e.target.getAttribute('data-value'))
    }
    const handleClickPay = () => {
        let data = new Object
        let price_total = cartQuantity > 1 ? cart.map(a => a.price_total).reduce((b, c) => b + c) : cart.map(a => a.price_total)[0]
        data['items_array'] = cart.map(a => ({ id: a.product_id, count: a.quantity }))
        data['transaction_total'] = price_total
        data['merchant_id'] = credentials.user_id
        data['transaction'] = `Transaction Purchase`

        const DataProcessing = async () => {
            let response = await
                FetchFormData('transactions/add', credentials.token, data)
            console.log(response)
        }
        DataProcessing()

    }
    const results = []
    const items = cart.filter((value, index, self) => index === self.findIndex((t) => (t.product_name === value.product_name && t.product_id == value.product_id)))
    const countItems = new Object
    cart.forEach((cartItem, i) => {
        var key = JSON.stringify(cartItem.product_id)
        countItems[key] = (countItems[key] || 0) + 1
    })
    items.forEach((item, i) => {
        const countItemsKey = Object.keys(countItems)
        results.push(
            <Grid item key={i} md={12} >
                <Card sx={{ display: 'flex' }}>
                    <CardMedia component="img" image={item.product_image} sx={{ width: 151 }} alt={`product${i}`} />
                    <CardContent sx={{ flex: "1 0 auto", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography component="div" variant='h6'>{item.product_name}</Typography>
                        <Typography component="div" variant='h6'>{`₱${item.product_price}`}</Typography>
                        <Typography component="div" variant='h6'>{`₱${item.price_total}`}</Typography>
                        <Typography component="div" variant='h6'>{`${item.quantity}`}</Typography>
                        <Typography component="div" variant='h6'>{`${item.quantity}`}</Typography>
                        <ButtonGroup>
                            <Button variant="contained" color="success" data-value={JSON.stringify(item)} onClick={handleClickMinusCartItem}>-</Button>
                            <Button variant="contained" color="warning" data-value={JSON.stringify(item)} onClick={handleClickDeleteCartItem}>Delete</Button>
                        </ButtonGroup>
                    </CardContent>
                </Card>
            </Grid>)
    })
    return (
        <>
            <Button variant="outlined" onClick={handleShow} color="success">
                New Transaction
            </Button>

            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>{showCards ? 'Transaction' : 'Checkout'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Stack justifyContent='flex-end' alignItems="flex-end">
                        {showCards ? <IconButton size="large" onClick={handleClickCart}>
                            <Badge badgeContent={cartQuantity} color="success">
                                <RiShoppingBasket2Line />
                            </Badge>
                        </IconButton> : <IconButton size="large" onClick={handleClickReturn}>
                            <MdOutlineKeyboardReturn />
                        </IconButton>}
                    </Stack>
                    <Box style={{ maxHeight: '100vh', overflow: 'auto' }}>
                        <Grid container spacing={2} sx={{ padding: '10px' }}>
                            {showCards &&
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
                                                        image={card.product_image}
                                                        alt={`card${i}`}
                                                    />
                                                    <CardContent>
                                                        <Stack direction="row" justifyContent="space-between">
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {card.product_name}
                                                            </Typography>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {`₱${card.product_price}`}
                                                            </Typography>
                                                        </Stack>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button variant="contained" size="small" color="warning" onClick={handleClickAddToCart} data-value={JSON.stringify(updatedCard)}>
                                                        Add to cart
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                            {showCart &&
                                cart.length > 0 &&
                                <>
                                    <CheckoutHeader />
                                    {results}
                                    <Grid item md={12}>
                                        <Stack direction="row" justifyContent="space-between" alignItems='center'>
                                            <Typography variant="h6">{`Total Amount: ₱${cartTotal}`}</Typography>
                                            <Button variant="contained" color="success" onClick={handleClickPay}>Pay</Button>
                                        </Stack>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TransactionsModal