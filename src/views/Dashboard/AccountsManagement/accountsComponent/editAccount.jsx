import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';
import FetchWithAuth from '../../../../utils/API/Fetch/FetchWithAuth';


export default function EditAccount(props) {
    const credentials = useAppStore(state => state.credentials)
    const { register, handleSubmit, watch, formState: { errors }, getValues } = useForm();
    const [passConfirm, setPassConfirm] = useState({
        error: '',
        message: '',

    });
    const onSubmit = data => {
        FetchWithAuth(`account/update?users_id=${props.AccInfo.id}&passcheck=${data.passwordConfirmation}`, credentials.token, data, 'PUT').then(pass => {
            if (pass.status === 'match') {
                putAcc()
            } else {
                setPassConfirm(pass)
            }
        })
        FetchWithAuth(`account/update?users_id=${props.AccInfo.id}`, credentials.token, data, 'PUT').then(res => {
            const e = 'cancel'
            props.toClick(e, res)
            console.log(res)
        })

    }

    console.log(props.AccInfo.email)
    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input
                    type="email"
                    name='email'
                    className={`${errors.email ? 'is-invalid' : ''} form-control text-center`}
                    defaultValue={props.AccInfo.email}
                    aria-invalid={errors.email ? "true" : "false"}
                    {...register("email", { required: "This field is Required!" })}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Password</span>
                <input
                    type="password"
                    defaultValue='password'
                    className={`${errors.password && `is-invalid`} form-control text-center`}
                    {...register("password", { required: true })}
    />
            </div >
            <hr/>
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
        </form >
    )
}