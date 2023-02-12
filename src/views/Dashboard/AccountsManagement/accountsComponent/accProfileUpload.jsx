import { Button, FormControl, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';


const AccProfileUpload = () => {
    const credentials = useAppStore(state => state.credentials)
    const [image, setImage] = useState('')
    const [isUploaded, setIsUpload] = useState(false)
    const { register, handleSubmit } = useForm
    const handleSubmition = (data) => {
        console.log(data)
    }
    const HandleChangeImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setIsUploaded(true)
    }
    return (
        <>

            {isUploaded && <Grid container>
                <Grid item>
                    <img src={image} />
                    </Grid>
            </Grid>}

            <form onSubmit={handleSubmit(handleSubmition)}>
                <FormControl variant="outlined">
                    <Button variant="contained" color="success" component="label">
                        Upload
                        <input accept="image/*" hidden type="file" {...register('display_profile', { onChange: HandleChangeImage })} />
                    </Button>
                </FormControl>
            </form>
            <div>
                <button className='btn btn-outline-warning text-black' onClick={onDrop}>Upload</button>
            </div>
        </>)

}

export default AccProfileUpload;