import { Button, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";


const InventoryModal = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm()
    const [show, setShow] = useState(false);
    const [select, setSelect] = useState(1)
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
    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    return (<>
        <Button variant="contained" onClick={handleShow} color="success">
            Add Item
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
                            <TextField label="Category" select value={select} name="category" {...register('category', { onChange: handleChange })}>
                                {categories.map(category => (<MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>))}
                            </TextField>
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField label="Item Name" {...register('item_name')} />
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