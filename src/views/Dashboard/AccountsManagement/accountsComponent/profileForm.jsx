import {AiOutlineUpload, AiOutlineForm, AiOutlineSave} from 'react-icons/ai';

export default function ProfileForm(props){

    const {firstName, lastName, age, lotNum, street, brgy, city, zipCode} = props.profileInfo

    return(
        <form className='col-md-12 col-lg-10 col-xl-12'>
                        <div className="d-flex justify-content-end pt-5 pb-2">
                            <a className="input-group-text fs-4" 
                                onClick={props.toClick}>
                                {props.editInfo === false ? <AiOutlineSave title='Save' className='text-success'/> : <AiOutlineForm title='Edit' className='text-danger'/>}
                            </a>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">First name</span>
                            <input 
                            type="text" 
                            className="form-control"
                            name='firstname'
                            value={firstName}
                            disabled={props.editInfo}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Last name</span>
                            <input 
                            type="text" 
                            className="form-control"
                            name='lastName'
                            value={lastName}
                            disabled={props.editInfo}
                            />
                        </div>
                    </form>
    )
}