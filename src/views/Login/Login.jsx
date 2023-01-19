import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors }, clearErrors } = useForm();
    const navigate = useNavigate()
    const handleClick = (data) => {
        if (Object.keys(data).length > 0) {
            navigate('/dashboard', { replace: true }, [navigate])
            sessionStorage.setItem('loggedin', true)
        }
    }
    return (
        <div className="container p-5">
            <main className="form-signin m-auto">
                <form action="" onSubmit={handleSubmit(handleClick)} className="d-flex flex-column gap-2">
                    <h3 className="h3 mb-3 fw-normal">Login</h3>
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
                    <button className="btn btn-lg btn-success align-self-center" type="submit">Sign in</button>
                    <button className={`${Object.keys(errors).length > 0 ? `visible` : `invisible`} btn btn-link`} onClick={() => clearErrors()} type="button">Clear all errors</button>
                </form>
            </main>

        </div>
    )
}

export default Login