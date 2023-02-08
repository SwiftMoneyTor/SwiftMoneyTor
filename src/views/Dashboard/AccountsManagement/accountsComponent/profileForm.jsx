import React from 'react';


export default function ProfileForm(props){

    const {firstName, lastName, bDay, gender, lotNum, street, brgy, city, zipCode} = props.profileInfo

    return(
        <form onSubmit={props.submit} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">First name</span>
                <input 
                type="text" 
                className='form-control'
                name='firstName'
                value={firstName}
                disabled
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last name</span>
                <input 
                type="text" 
                className='form-control'
                name='lastName'
                value={lastName}
                disabled
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Birthday</span>
                <input 
                type="text" 
                className='form-control'
                name='bDay'
                value={bDay}
                disabled
                />
            </div>
            <div className="input-group mb-3">
            <span className="input-group-text">Gender</span>
                <input 
                type="text" 
                className='form-control'
                name='gender'
                value={gender === 'M' ? "Male" : gender ==="" ? '' : "Female"}
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
                        value={lotNum}
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
                        value={street}
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
                    value={brgy}
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
                        value={city}
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
                        value={zipCode}
                        disabled
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <span className='btn btn-danger me-2 input-group-text fs-5'
                    onClick={props.toClick}>
                        Edit
                </span>
                <button type='submit' className='btn btn-outline-success' disabled>Save</button>
            </div>
        </form>
    )
}