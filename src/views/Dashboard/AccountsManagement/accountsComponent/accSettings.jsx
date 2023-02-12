import React from 'react';
import useAppStore from '../../../../appStore';

export default function AccSettings(props) {

    return(
        <form onSubmit={props.submit} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input
                    type="text"
                    className="form-control"
                    name='email'
                    value={props.AccInfo.email}
                    disabled
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                    type="password"
                    className="form-control text-center"
                    name='password'
                    value= 'password'
                    disabled
                />
            </div>
            <div className="d-flex justify-content-end mt-5 pt-4">
                <span className='btn btn-danger me-2 input-group-text fs-5' id='account'
                    onClick={props.toClick}>
                        Edit
                </span>
                <button type='submit' className='btn btn-outline-success' disabled>Save</button>
            </div>
        </form>
    )
}