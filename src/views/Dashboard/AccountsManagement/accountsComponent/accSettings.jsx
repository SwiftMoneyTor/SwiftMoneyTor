import { AiOutlineForm, AiOutlineSave } from 'react-icons/ai';
import React from 'react';


export default function AccSettings(props){

    const {email, password} =props.profileInfo

    return(
        <form onSubmit={props.submit} method="POST" className='col-md-12 col-lg-10 col-xl-12'>
            <div className="d-flex justify-content-end py-2 pb-2">
                <span className="input-group-text fs-4 editToSave" 
                    onClick={props.toClick} data-edit="disableEditAccountField">
                    {props.editInfo === false ? <AiOutlineSave title='Save' className='saveEdit'/> : <AiOutlineForm title='Edit' className='editSave'/>}
                </span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input 
                type="text" 
                className="form-control"
                name='email'
                value={email}
                disabled={props.editInfo}
                onChange={props.onChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input 
                type="password" 
                className="form-control"
                name='password'
                value={password}
                disabled={props.editInfo}
                onChange={props.onChange}
                />
            </div>

            <button className='displayNone'></button>
        </form>
    )
}