import Icon from '/src/assets/favicon.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import useAppStore from '../../../appStore';

const Footer = () => {
    const component = useAppStore(state => state.component)
    return (
        <div className={`${component == "login" ? `login-footer` : `m-0`} container-fluid p-0 bg-light`}>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="#" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"><img src={Icon} alt="" height={50} width={50} /></a>
                        <span className="mb-3 mb-md-0 text-muted">© {new Date().getFullYear()} SwiftMoneyTor Inc.</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><FaFacebook /></li>
                        <li className="ms-3"><FaInstagram /></li>
                        <li className="ms-3"><FaTwitter /></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Footer