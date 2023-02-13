import { Button, ButtonGroup, FormControl, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';
import FetchWithFormData from '../../../../utils/API/FetchWithFormData';


const AccProfileUpload = () => {
    const credentials = useAppStore(state => state.credentials)
    const setProfilePic = useAppStore(state => state.setProfilePic)
    const [image, setImage] = useState('')
    const [isUploaded, setIsUploaded] = useState(false)
    const { register, handleSubmit } = useForm()
    const handleSubmition = (data) => {
        console.log(data)
        const formData = new FormData
        formData.set('display_image', data.display_profile[0])
        formData.set('user_id', credentials.id)
        FetchWithFormData('profile/update/image', credentials.token, formData).then(response => {
            if (response.data.success) {
                setProfilePic(response.data.responsedata)
            }
        })
    }
    const handleChangeImage = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
        setIsUploaded(true)
    }
    const handleClickClearImage = () => {
        setImage('')
        setIsUploaded(false)
    }
    return (
        <>
            <Grid container justifyContent="center" spacing={2}>
                {isUploaded &&

                    <Grid item>
                        <img src={image ?? ''} height={150} />
                    </Grid>
                }
                <Grid item>
                    <form onSubmit={handleSubmit(handleSubmition)}>
                        {!isUploaded && <FormControl variant="outlined">
                            <Button variant="contained" color="success" component="label">
                                Upload
                                <input accept="image/*" hidden type="file" {...register('display_profile', { onChange: handleChangeImage })} />
                            </Button>
                        </FormControl>}
                        {isUploaded && <ButtonGroup sx={{ padding: '20px' }}>
                            <Button variant="contained" color="warning" type="submit">Save</Button>
                            <Button variant="contained" color="success" onClick={handleClickClearImage}>Clear</Button>
                        </ButtonGroup>}
                    </form>
                </Grid>
            </Grid>
        </>)

}

export default AccProfileUpload;