import { Button, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdPostAdd } from 'react-icons/md';

const InventoryModal = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm()
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState(1)
    const [product, setProduct] = useState(1)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmition = (data) => {
        console.log(data)
    }
    const categories = [
        { name: 'Category 1', id: 1 },
        { name: 'Category 2', id: 2 },
        { name: 'Category 3', id: 3 },
        { name: 'Category 4', id: 4 }
    ]
    const products = [
        { name: 'Prod 1' },
        { name: 'Prod 2' },
        { name: 'Prod 3' },
        { name: 'Prod 4' },
        { name: 'Prod 5' },
        { name: 'Prod 6' },
    ]
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleChangeProduct = (e) => {
        setProduct(e.target.value)
    }
    return (<>
        <Button variant="contained" onClick={handleShow} color="success" startIcon={<MdPostAdd/>}>
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
                            <TextField label="Category" select value={category} name="category" {...register('category', { onChange: handleChangeCategory })}>
                                {categories.map(category => (<MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>))}
                            </TextField>
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField label="Item Name" select value={product} name="item_id" {...register('item_id', { onChange: handleChangeProduct })}>
                                {products.map((product, i) => (<MenuItem key={i} value={i}>
                                    {product.name}
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