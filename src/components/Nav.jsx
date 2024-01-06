import { Link } from "react-router-dom";
import logo from '../assets/main logo.svg'
import './Nav.css'


const Nav = () => {
    return ( 
        <>
        <nav className="navbar">
            <Link to="/"><img src={logo}/></Link>
            <ul>
                <li><Link to={'#'}>About</Link></li>
                <li><Link to={'#'}>Service</Link></li>
                <li><Link to={'#'}>Company</Link></li>
                <li><Link to={'#'}>Support</Link></li>
            </ul>
            <i className="bx bx-menu" ></i>

        </nav>
        </>
     );
}
 
export default Nav;