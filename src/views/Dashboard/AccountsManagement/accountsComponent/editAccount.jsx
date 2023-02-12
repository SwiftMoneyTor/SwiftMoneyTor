import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';
import React, {useState} from 'react'

export default function EditAccount(props){

    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const onSubmit = data => {

        // fetch(`http://localhost:8000/api/userAcc/?users_id=${props.userId}&password=${data.password}`,{
        //     method: 'GET',
        //     headers:{
        //         'Content-type' : 'application/json'
        //     }
        // }).then(response => response.json())
        // .then(pass =>console.log(pass))
        // .catch(err=>console.log(err))
        
        // function putAcc(){
            fetch(`http://localhost:8000/api/updateAcc/?users_id=${props.AccInfo.id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
            }
            })
            .then(response => console.log(response.json()))
            .then(res => {
                console.log(res)
                props.toClick(e, res)
            })
            .catch(error => console.error(error));
            // }
    };
    console.log()
    return(
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input 
                type="email" 
                name='email'
                className={`${errors.email ? 'is-invalid' : ''} form-control text-center`}
                defaultValue={props.AccInfo.email}
                aria-invalid={errors.email ? "true" : "false"} 
                {...register("email",{required : "This field is Required!"})}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input 
                type="password"
                defaultValue='password'
                className={`${errors.password && `is-invalid`} form-control text-center`}
                {...register("password", {required: true})}
                />
            </div>
            <div className="input-group mb-3">
                        <span className="input-group-text">Confirm Changes</span>
                        <input type="password" placeholder='Password' id="confirm-password" className={`${errors['passwordConfirmation'] && `is-invalid`} form-control text-center`} {...register("passwordConfirmation", {
                            required: "Please confirm password!",
                            validate: {
                            matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || "Passwords did not match!";
                            }
                            }
                        })}
                        />
                        {errors['passwordConfirmation'] && <span className="invalid-feedback">
                            {errors['passwordConfirmation'].message}
                        </span>}
                    </div>
            <div className="d-flex justify-content-end align-content-end5">
                <span className='btn btn-danger me-2 input-group-text fs-5' id='cancel'
                    onClick={props.toClick}>
                        Cancel
                </span>
                <button type='submit' className='btn btn-outline-success'>Save</button>
            </div>
        </form>
    )
}