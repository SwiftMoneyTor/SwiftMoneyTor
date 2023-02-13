import { useForm } from 'react-hook-form';
import useAppStore from '../../../../appStore';
import FetchWithAuth from '../../../../utils/API/Fetch/FetchWithAuth';

export default function editProfileForm(props) {
    const credentials = useAppStore(state => state.credentials)
    if (props.profileInfo != null) {
        var { firstName, lastName, bDay, gender, lotNum, street, brgy, city, zipCode } = props.profileInfo
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {

        FetchWithAuth(`profile/update?users_id=${props.userId}`, credentials.token, data, 'PUT')
            .then(res => {
                const e = 'cancel';
                props.toClick(e, res)
            })
            .catch(error => {
                console.error(error)
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className='col-md-12 col-lg-10 col-xl-12 my-4'>
            <div className="input-group mb-3">
                <span className="input-group-text">First name</span>
                <input
                    type="text"
                    className={`${errors.firstName ? 'is-invalid' : ''} form-control`}
                    defaultValue={props.profileInfo != null ? firstName : ''}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    {...register("firstName", { required: "This field is Required!" })}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Last name</span>
                <input
                    type="text"
                    className={`${errors.lastName && `is-invalid`} form-control`}
                    defaultValue={props.profileInfo != null ? lastName : ''}
                    {...register("lastName", { required: true })}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Birthday</span>
                <input
                    type="date"
                    pattern="\d{4}-\d{2}-\d{2}"
                    className={`${errors.bDay ? 'is-invalid' : ''} form-control`}
                    defaultValue={props.profileInfo != null ? bDay : ''}
                    {...register("bDay", { required: true })}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Gender</span>
                <select className={`${errors.gender && `is-invalid`} form-select`}
                    defaultValue={props.profileInfo != null ? gender : ''}
                    {...register("gender", { required: true })}
                >
                    <option>Choose...</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Lot#</span>
                        <input
                            type="text"
                            className={`${errors.lotNum && `is-invalid`} form-control`}
                            defaultValue={props.profileInfo != null ? lotNum : ''}
                            {...register("lotNum", { required: true })}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Street</span>
                        <input
                            type="text"
                            className={`${errors.street && `is-invalid`} form-control`}
                            defaultValue={props.profileInfo != null ? street : ''}
                            {...register("street", { required: true })}
                        />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Brgy</span>
                    <input
                        type="text"
                        className={`${errors.brgy && `is-invalid`} form-control`}
                        defaultValue={props.profileInfo != null ? brgy : ''}
                        {...register("brgy", { required: true })}
                    />
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">City</span>
                        <input
                            type="text"
                            className={`${errors.city && `is-invalid`} form-control`}
                            defaultValue={props.profileInfo != null ? city : ''}
                            {...register("city", { required: true })}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Zip Code</span>
                        <input
                            type="text"
                            className={`${errors.zipCode && `is-invalid`} form-control`}
                            defaultValue={props.profileInfo != null ? zipCode : ''}
                            {...register("zipCode", { required: true })}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                {props.profileInfo && <span className='btn btn-danger me-2 input-group-text fs-5' id='cancel'
                    onClick={props.toClick}
                >
                    Cancel
                </span>}
                <button type='submit' className='btn btn-outline-success'>Save</button>
            </div>
        </form>
    )
}