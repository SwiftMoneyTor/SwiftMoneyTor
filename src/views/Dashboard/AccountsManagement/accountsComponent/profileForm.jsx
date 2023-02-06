import { AiOutlineForm, AiOutlineSave} from 'react-icons/ai';

export default function ProfileForm(props){

    const {firstName, lastName, bDay, lotNum, street, brgy, city, zipCode} = props.profileInfo

    return(
        <form onSubmit={props.submit} method="POST" className='col-md-12 col-lg-10 col-xl-12'>
            <div className="d-flex justify-content-end py-2 pb-2">
                <span className="input-group-text fs-4 editToSave" 
                    onClick={props.toClick} data-edit="disableEditAccountField">
                    {props.editInfo=== false ? <AiOutlineSave title='Save' className='saveEdit'/> : <AiOutlineForm title='Edit' className='editSave'/>}
                </span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">First name</span>
                <input 
                type="text" 
                className="form-control"
                name='firstName'
                value={firstName}
                disabled={props.editInfo}
                onChange={props.onChange}
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
                onChange={props.onChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Birthday</span>
                <input 
                type="text" 
                className="form-control"
                name='bDay'
                value={bDay}
                disabled={props.editInfo}
                onChange={props.onChange}
                />
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Lot#</span>
                        <input 
                        type="text" 
                        className="form-control"
                        name='lotNum'
                        value={lotNum}
                        disabled={props.editInfo}
                        onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Street</span>
                        <input 
                        type="text" 
                        className="form-control"
                        name='street'
                        value={street}
                        disabled={props.editInfo}
                        onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Brgy</span>
                    <input 
                    type="text" 
                    className="form-control"
                    name='brgy'
                    value={brgy}
                    disabled={props.editInfo}
                    onChange={props.onChange}
                    />
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">City</span>
                        <input 
                        type="text" 
                        className="form-control"
                        name='city'
                        value={city}
                        disabled={props.editInfo}
                        onChange={props.onChange}
                        />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">Zip Code</span>
                        <input 
                        type="text" 
                        className="form-control"
                        name='zipCode'
                        value={zipCode}
                        disabled={props.editInfo}
                        onChange={props.onChange}
                        />
                    </div>
                </div>
            </div>

            <button className='displayNone'></button>
        </form>
    )
}