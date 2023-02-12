import React from 'react';


export default function ProfileForm(props){

    if(props.profileInfo != null){
        var {firstName, lastName, bDay, gender, lotNum, street, brgy, city, zipCode} = props.profileInfo
    }

    return(
        <form onSubmit={props.submit} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">First name</span>
                <input 
                type="text" 
                className='form-control'
                name='firstName'
                value={props.profileInfo != null ? firstName : ''}
                disabled
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last name</span>
                <input 
                type="text" 
                className='form-control'
                name='lastName'
                value={props.profileInfo != null ? lastName : ''}
                disabled
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Birthday</span>
                <input 
                type="text" 
                className='form-control'
                name='bDay'
                value={props.profileInfo != null ? bDay : ''}
                disabled
                />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text">Gender</span>
                <input 
                type="text" 
                className='form-control'
                name='gender'
                value={props.profileInfo != null && gender== 'M' ? 'Male' : gender=='F' ? 'Female' : ''}
                disabled
                />
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Lot#</span>
                        <input 
                        type="text" 
                        className='form-control'
                        name='lotNum'
                        value={props.profileInfo != null ? lotNum : ''}
                        disabled
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Street</span>
                        <input 
                        type="text" 
                        className='form-control'
                        name='street'
                        value={props.profileInfo != null ? street : ''}
                        disabled
                        />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Brgy</span>
                    <input 
                    type="text" 
                    className='form-control'
                    name='brgy'
                    value={props.profileInfo != null ? brgy : ''}
                    disabled
                    />
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">City</span>
                        <input 
                        type="text" 
                        className='form-control'
                        name='city'
                        value={props.profileInfo != null ? city : ''}
                        disabled
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Zip Code</span>
                        <input 
                        type="text" 
                        className='form-control'
                        name='zipCode'
                        value={props.profileInfo != null ? zipCode : ''}
                        disabled
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <span className='btn btn-danger me-2 input-group-text fs-5' id='profile'
                    onClick={props.toClick}>
                        Edit
                </span>
                <button type='submit' className='btn btn-outline-success' disabled>Save</button>
            </div>
        </form>
    )
}