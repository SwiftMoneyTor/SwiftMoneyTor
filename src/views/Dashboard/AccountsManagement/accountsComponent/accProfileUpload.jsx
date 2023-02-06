import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import { Hidden } from '@mui/material';

const AccProfileUpload = () => {

    const [reload, setReload] = React.useState(true)

    const getUploadParams = ({ meta }) => {
        const url = 'https://httpbin.org/post'
        return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
    }
    
    const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
        setReload(()=> !reload)
    }
    
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }
    
        return (
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*"
                maxFiles={1}
                inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag Files')}
                styles={{
                    dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
                    dropzone: { width: 90 +"%", height: 90 +"%", overflow: 'hidden'},
                    dropzoneActive: { borderColor: 'green' },
                    inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
                }}
            />
        )
    
    // const onFileChange = ({ meta, file }, status) => { 
    //     console.log(status, meta, file) 
    // }
    // const onSubmit = (files, allFiles) => {
    //     allFiles.forEach(f => f.remove())
    // }
    // const getFilesFromEvent = e => {
    //     return new Promise(resolve => {
    //         getDroppedOrSelectedFiles(e).then(chosenFiles => {
    //             resolve(chosenFiles.map(f => f.fileObject))
    //         })
    //     })
    // }
    // const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    //     const textMsg = files.length > 0 ? 'Upload Again' : 'Select Image'
    //     return (
    //         <div class="input-group m-auto d-flex justify-content-center col-6">
    //             <label className="input-group-text btn btn-success mt-4">
    //                 {textMsg}
    //                 <input
    //                     style={{ display: 'block', }}
    //                     type="file"
    //                     accept={accept}
    //                     onChange={e => {
    //                         getFilesFromEvent(e).then(chosenFiles => {
    //                             onFiles(chosenFiles)
    //                         })
    //                     }}
    //                 />
    //             </label>
    //         </div>
    //     )
    // }
    // return (
    //     <Dropzone
    //         onSubmit={onSubmit}
    //         onChangeStatus={onFileChange}
    //         InputComponent={selectFileInput}
    //         getUploadParams={fileParams}
    //         getFilesFromEvent={getFilesFromEvent}
    //         accept="image/*"
    //         maxFiles={1}
    //         inputContent={(files, extra) => (extra.reject ? 'Image files only' : 'Drag Files')}
    //         styles={{
    //             dropzone: { width: 500, height: 400, overflow: 'hidden'},
    //             dropzoneActive: { borderColor: 'green' },
    //         }}            
    //     />
    // );
};
export default AccProfileUpload;