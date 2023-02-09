import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';
import React, {useState} from 'react'

export default function EditAccount(props){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        // console.log(data);
        fetch('http://localhost:8000/api/updateAcc/?users_id=1', { //Add dynamic id
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            props.toClick(res)
        })
        .catch(error => console.error(error));
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input 
                type="email" 
                name='email'
                className={`${errors.email ? 'is-invalid' : ''} form-control`}
                defaultValue={props.AccInfo.email}
                aria-invalid={errors.email ? "true" : "false"} 
                {...register("email",{required : "This field is Required!"})}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input 
                type="pasword"
                defaultValue={props.AccInfo.password}
                className={`${errors.password && `is-invalid`} form-control`}
                {...register("password", {required: true})}
                />
            </div>
            <div className="input-group mb-3">
                        <span className="input-group-text">Confirm Changes</span>
                        <input type="password" placeholder='Password' id="confirm-password" className={`${errors['confirm-password'] && `is-invalid`} form-control`} {...register('confirm-password', {
                            validate: value =>
                                value === props.AccInfo.password || "The passwords do not match"
                        })} />
                        {errors['confirm-password'] && <span className="invalid-feedback">
                            {errors['confirm-password'].message}
                        </span>}
                    </div>
            <div className="d-flex justify-content-end align-content-end5">
                <span className='btn btn-danger me-2 input-group-text fs-5'
                    onClick={props.toClick}>
                        Cancel
                </span>
                <button type='submit' className='btn btn-outline-success'>Save</button>
            </div>
        </form>
    )
}