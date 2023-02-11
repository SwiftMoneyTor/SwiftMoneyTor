import { Button, FormControl, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BiAddToQueue } from 'react-icons/bi';

const CategoryModal = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmition = (data) => {
        console.log(data)
    }
    return (
        <>
            <Button variant="contained" onClick={handleShow} color="success" startIcon={<BiAddToQueue/>}>
                Category
            </Button>
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleSubmition)}>
                        <Stack spacing={2}>
                            <FormControl variant="outlined">
                                <TextField label="Category" {...register('category_name')} />
                            </FormControl>
                            <Stack spacing={1} direction="row" justifyContent="flex-end">
                                <Button variant="contained" onClick={handleClose} color="warning" type="button">
                                    Close
                                </Button>
                                <Button variant="contained" color="success" type="submit">
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CategoryModal