import { Link } from "react-router-dom";
import logo404 from '../assets/logo404.png';
import '../styles/Error404.css';


function Error404() {
  return (
    <>
      <div className="error">
        <img src={logo404} alt="logo 404" className="error-image" />
        <span className="error-details">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" className="error-back">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </>
  );
}

export default Error404;