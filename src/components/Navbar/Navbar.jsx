import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <NavLink to="/" className="navlogo">
        <img src={logo} alt="Logo" />
      </NavLink>

      <NavLink 
        to="/"
        className={({ isActive }) =>
          isActive ? 'navlink active' : 'navlink'
        }
      >
        Accueil
      </NavLink>  

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'navlink active' : 'navlink'
        }
      >
        A propos
      </NavLink>
    </nav>
  );
}

// to redirection 
// NavLink style  active ou inactive
export default Navbar;