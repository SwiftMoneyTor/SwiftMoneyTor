import React from 'react';
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
        FetchWithAuth(`account/update?users_id=${props.AccInfo.id}`, credentials.token, data,'PUT').then(res => {
                console.log(res)
                props.toClick('account', res)
            })
            .catch(error => console.error(error));
    };
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
<<<<<<< HEAD
                <input 
                type="password"
                defaultValue=''
                className={`${errors.password && `is-invalid`} form-control text-center`}
                {...register("password")}
=======
                <input
                    type="password"
                    defaultValue='password'
                    className={`${errors.password && `is-invalid`} form-control text-center`}
                    {...register("password", { required: true })}
>>>>>>> 205fc94efb49b871e42fe5c2ef290c6b662c6197
                />
            </div>
            <hr/>
            <div className="input-group mb-3">
<<<<<<< HEAD
                        <span className="input-group-text">Confirm Changes</span>
                        <input type="password" placeholder='Password' id="confirm-password" className={`${errors['passwordConfirmation'] && `is-invalid` || passConfirm.status == 'error' && `is-invalid`} form-control text-center`} {...register("passwordConfirmation", {
                            required: "Please confirm password!",
                        })}
                        />
                        {errors['passwordConfirmation'] && <span className="invalid-feedback">
                            {errors['passwordConfirmation']?.message}
                        </span>
                        }
                        {passConfirm.status == 'error' && <span className="invalid-feedback">
                            Password did not match
                        </span>}
                    </div>
=======
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
>>>>>>> 205fc94efb49b871e42fe5c2ef290c6b662c6197
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