import { Button, FormControl, MenuItem, Stack, TextField } from "@mui/material";
import { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdAddBusiness } from 'react-icons/md';
import Swal from "sweetalert2";
import useAppStore from '../../../appStore';
import FetchWithAuth from "../../../utils/API/Fetch/FetchWithAuth";
import FetchWithFormData from "../../../utils/API/FetchWithFormData";

const ProductsModal = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm()
    const credentials = useAppStore(state => state.credentials)
    const [show, setShow] = useState(false);
    const [image, setImage] = useState('');
    const [isUploaded, setIsUploaded] = useState(false);
    const [select, setSelect] = useState(1)
    const [formReset, setFormReset] = useState(false)
    const [categories, setCategories] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        reset()
    }, [formReset])
    useEffect(()=>{
        FetchWithAuth('categories/fetch', credentials.token).then(response => {
            setCategories(response.responsedata)
        })
    },[])
    const handleSubmition = (data) => {
        const formData = new FormData()
        formData.append('product_image', data.product_image[0])
        formData.append('product_name', data.product_name)
        formData.append('product_price', data.product_price)
        formData.append('category_id', data.category)
        let response = FetchWithFormData('products/add',credentials.token, formData)
        response.then((res) => {
            if (res.data.success) {
                Swal.fire({ title: 'Success', text: 'Product successfully added', icon: "success", confirmButtonColor: '#53893D' }).then((result) => {
                    if (result.isConfirmed) {
                        setFormReset(prevFormReset => !prevFormReset)
                        setShow(false)
                    }
                })
            }
        })

    }
    const handleChange = (e) => {
        setSelect(e.target.value)
    }
    const HandleChangeImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setIsUploaded(true)
    }
    return (<>

        <Button variant="contained" onClick={handleShow} color="success" startIcon={<MdAddBusiness />}>
            Product
        </Button>

        <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Add Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit(handleSubmition)}>
                    <Stack spacing={2}>
                        <FormControl variant="outlined">
                            <TextField label="Category" select value={select} name="category" {...register('category', { onChange: handleChange })}>
                                {categories.map(category => (<MenuItem key={category.category_id} value={category.category_id}>
                                    {category.category_name}
                                </MenuItem>))}
                            </TextField>
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField label="Product Name" {...register('product_name')} />
                        </FormControl>
                        <FormControl variant="outlined">
                            <Button variant="contained" color="success" component="label">
                                Upload
                                <input accept="image/*" hidden type="file" {...register('product_image', { onChange: HandleChangeImage })} />
                            </Button>
                        </FormControl>
                        {isUploaded && <FormControl variant="outlined">
                            <img src={image ?? ''} height={150} />
                        </FormControl>}
                        <FormControl variant="outlined">
                            <TextField label="Product Price" {...register('product_price')} />
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
    </>)
}

export default ProductsModal