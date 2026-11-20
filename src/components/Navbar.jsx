import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='links'>Início</Link>
            <Link to="/posts" className='links'>Posts</Link>
            <Link to="/sobre" className='links'>Sobre</Link>
        </nav>
    );
}

export default Navbar;