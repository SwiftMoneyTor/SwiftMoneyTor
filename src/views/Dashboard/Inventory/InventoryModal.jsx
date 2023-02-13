import { Button, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdPostAdd } from 'react-icons/md';
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAppStore from '../../../appStore';
import FetchWithAuth from "../../../utils/API/Fetch/FetchWithAuth";

const InventoryModal = () => {
    const navigate= useNavigate()
    const credentials = useAppStore(state => state.credentials)
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm()
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState(1)
    const [product, setProduct] = useState(1)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    useEffect(() => {
        FetchWithAuth('products/fetch', credentials.token).then(response => {
            setProducts(response.responsedata)
        })
        FetchWithAuth('categories/fetch', credentials.token).then(response => {
            setCategories(response.responsedata)
        })
        
    }, [])
    const handleSubmition = (data) => {
        data['merchant_id'] = credentials.id
        FetchWithAuth('inventory/add', credentials.token, data).then(response => {
            if (response.success) {
                setShow(false)
                Swal.fire({ title: 'Success', text: 'successfully added in inventory', icon: 'success' })
                navigate('/inventory', { replace: true }, [navigate])
            }
        })
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleChangeProduct = (e) => {
        setProduct(e.target.value)
    }
    return (<>
        <Button variant="contained" onClick={handleShow} color="success" startIcon={<MdPostAdd />}>
            inventory
        </Button>

        <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Inventory Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(handleSubmition)}>
                    <Stack spacing={2}>
                        <FormControl variant="outlined">
                            <TextField label="Category" select value={category} name="category_id" {...register('category_id', { onChange: handleChangeCategory })}>
                                {categories.map(category => (<MenuItem key={category.category_id} value={category.category_id}>
                                    {category.category_name}
                                </MenuItem>))}
                            </TextField>
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField label="Item Name" select value={product} name="item_id" {...register('item_id', { onChange: handleChangeProduct })}>
                                {products.map((product, i) => (<MenuItem key={i} value={product.product_id}>
                                    {product.product_name}
                                </MenuItem>))}
                            </TextField>
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField label="Item Quantity" {...register('item_quantity')} />
                        </FormControl>
                        <Stack spacing={1} direction="row" justifyContent="flex-end">
                            <Button variant="contained" onClick={handleClose} color="warning" type="button">
                                Close
                            </Button>
                            <Button variant="contained" color="success" type="submit">
                                Save
                            </Button>
                        </Stack>
                    </Stack>

                </form>
            </Modal.Body>
        </Modal>
    </>
    )
}

export default InventoryModal