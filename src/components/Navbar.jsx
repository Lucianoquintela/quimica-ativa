import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='links'>Início</Link>
            <Link to="/posts" className='links'>Ações</Link>
            <Link to="/sobre" className='links'>O que é o projeto</Link>
            <Link to="/sobremim" className='links'>Sobre mim</Link>

        </nav>
    );
}

export default Navbar;