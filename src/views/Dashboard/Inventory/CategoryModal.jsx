import { Button, FormControl, Stack, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BiAddToQueue } from 'react-icons/bi';
import Swal from 'sweetalert2';
import useAppStore from '../../../appStore';
import FetchWithAuth from '../../../utils/API/Fetch/FetchWithAuth';

const CategoryModal = () => {

    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm()
    const [formReset, setFormReset] = useState(false)
    const credentials = useAppStore(state => state.credentials)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        reset()
    }, [formReset])
    const handleSubmition = (data) => {
        FetchWithAuth('category/add', credentials.token, data).then(result => {
            if (result.success === true) {
                setFormReset(prevFormReset => !prevFormReset)
                setShow(false)
                Swal.fire({ title: "Success", text: "You have successfully added a category", icon: "success", confirmButtonColor: '#53893D' })
            }
        })
    }
    return (
        <>
            <Button variant="contained" onClick={handleShow} color="success" startIcon={<BiAddToQueue />}>
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