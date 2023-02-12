import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

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