import './Header.css';
import Navbar from "./Navbar";
import logo from "../assets/logo-grande.png";

const Header = () => {
    return ( 
        <header>
            
            <img src={logo} alt='logo'/>
            
            <Navbar/>
             <img src={logo} alt='logo'/>
        </header>
     );
}
 
export default Header;