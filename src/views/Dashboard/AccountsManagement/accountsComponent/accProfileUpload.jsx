import React, {useState, useCallback} from 'react'
import { Hidden } from '@mui/material';
import {useDropzone} from 'react-dropzone'



const AccProfileUpload = () => {

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        Array.from(acceptedFiles).forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                }
                reader.readAsArrayBuffer(file)
            })
        }, [])
        const {getRootProps, getInputProps} = useDropzone({onDrop, accept:{'image/jpeg': [], 'image/png': []}})
        
        return (
            <>
                <div {...getRootProps({
                    className: 'border border-success rounded-4 border-3 w-100 h-100 d-flex my-5',
                })}>
                    <input type="file" name="img" {...getInputProps()} />
                    <p className='d-flex align-self-center mx-auto'>Click or drop files here.</p>
                </div>
                <div>
                    <button className='btn btn-outline-warning text-black' onClick={onDrop}>Upload</button>
                </div>
            </>
        )

};

export default AccProfileUpload;