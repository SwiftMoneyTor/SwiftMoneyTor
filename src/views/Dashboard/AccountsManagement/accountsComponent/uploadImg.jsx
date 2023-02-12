import React, {useCallback, Component} from 'react'
import { Hidden } from '@mui/material';
import Dropzone, {useDropzone} from 'react-dropzone'
import { Dropdown } from 'react-bootstrap';

// const AccProfileUpload = () => {

// };
// export default AccProfileUpload;

class AccProfileUpload extends Component{

        handleDrop = (files, rejectedFiles) => {
            console.log(files)
        }

    render(){
        return(
            <>
                <Dropzone
                    onDrop=''
                >
                    Drop file here
                </Dropzone>
            </>
        )
    }
}

export default AccProfileUpload;