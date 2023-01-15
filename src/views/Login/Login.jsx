import useAppStore from "../../appStore"

const Login = () => {
    const handleClick = useAppStore(state => state.setDashboard)
    return (
        <div className="container p-5">
            <main className="form-signin m-auto">
                <form action="" className="d-flex flex-column gap-2">
                    <h3 className="h3 mb-3 fw-normal">Login</h3>
                    <div className="d-flex gap-2 align-items-start flex-column">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div className="d-flex gap-2 align-items-start flex-column">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" />
                    </div>
                    <button className="btn btn-lg btn-primary align-self-center" onClick={handleClick}>Sign  in</button>
                    <p className="my-3 text-muted">© {new Date().getFullYear()}</p>
                </form>
            </main>

        </div>
    )
}

export default Login