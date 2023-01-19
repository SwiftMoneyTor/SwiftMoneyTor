import { useNavigate } from 'react-router-dom'
import heroImage from '../../../assets/Cash Payment.gif'
const Hero = () => {
    const handleMouseOver = (event) => {
        let src = event.target.getAttribute('src')
        event.target.setAttribute('src', src)
    }
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/login', { replace: true }, [navigate])
    }
    return (
        <div className="container">
            <div className="row flex-lg-row align-items-center py-3">
                <div className="col-lg-6">
                    <h1 className="display-1">Organize your Business</h1>
                    <button className="btn btn-lg btn-success m-2" onClick={handleClick}>Login</button>
                    <button className="btn btn-lg btn-outline-dark m-2" >Contact Us</button>

                </div>
                <div className="col-lg-6 py-4" onMouseOver={handleMouseOver}>
                    <img src={heroImage} alt="cashier" className="img-fluid rounded" />
                </div>
            </div>


        </div>
    )
}

export default Hero