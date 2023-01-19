import { Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { MdDeleteSweep } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import LOGO from '../../assets/logo.png';
const Login = () => {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    const navigate = useNavigate()
    const handleSubmition = (data) => {
        if (Object.keys(data).length > 0) {
            navigate('/dashboard', { replace: true }, [navigate])
        }
    }
    const handleClick = () => {
        navigate('/sign-up', { replace: true }, [navigate])
    }
    return (
        <div className="container py-3">
            <Link to='/'><Image src={LOGO} height={75} width={250} /></Link>
            <main className="form-signin m-auto">
                <form action="" onSubmit={handleSubmit(handleSubmition)} className="d-flex flex-column gap-2">
                    <div className="d-flex gap-2 align-items-start flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className={`${errors.email && `is-invalid`} form-control`}{...register("email", { required: true })} />
                        {errors.email && <span className="invalid-feedback">
                            Email is required
                        </span>}
                    </div>
                    <div className="d-flex gap-2 align-items-start flex-column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className={`${errors.password && `is-invalid`} form-control`} {...register("password", { required: true })} />
                        {errors.password && <span className="invalid-feedback">
                            Must type password
                        </span>}
                    </div>
                    <div className="pt-3">
                    <button className="btn btn-lg btn-success align-self-center" type="submit">Sign in</button>
                    </div>

                    <button className={`${Object.keys(errors).length > 0 ? `visible` : `invisible`} btn btn-link`} onClick={() => clearErrors()} type="button"><MdDeleteSweep /> Remove errors</button>
                </form>
                <span className="d-flex align-items-center justify-content-center">
                    Don't have an account?
                    <button className="btn btn-link" onClick={handleClick}>Sign-up</button>
                </span>
                <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} SwiftMoneyTor Inc.</span>
            </main>

        </div>
    )
}

export default Login