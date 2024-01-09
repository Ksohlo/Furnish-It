import { Link } from "react-router-dom";
import logo from '../assets/main logo.svg'
import './Nav.css'
import { useState } from "react";


const Nav = () => {
    const [menu, setMenu] = useState('bx bx-menu')
    const [click, setClick] = useState(false)

    const toggleMenu = ()=>{
        if (menu === 'bx bx-menu') {
            setMenu('bx bx-x') 
            setClick(!click)
        }else{
            setMenu('bx bx-menu')
            setClick(!click)
        }
    }

    const handleMenu = ()=>{
        setClick(!click)
        if(menu === 'bx bx-x'){
            setMenu('bx bx-menu')
        }
    }


    return ( 
        <>
        <nav className='navbar'>
            <Link to="/"><img src={logo}/></Link>
            <ul className={click ? 'active' : 'ul'} onClick={handleMenu}>
                <li><Link to={'#'}>About</Link></li>
                <li><Link to={'#'}>Service</Link></li>
                <li><Link to={'#'}>Company</Link></li>
                <li><Link to={'#'}>Support</Link></li>
            </ul>
            <div onClick={toggleMenu}><i className={menu} ></i></div>

        </nav>
        </>
     );
}
 
export default Nav;