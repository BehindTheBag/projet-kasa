import { Link } from 'react-router-dom';
import '../../styles/Location.css';

function Housing() {
  return (
    <Link to="/logement" className="house">
  <div className="house-title">Titre de la <br /> location</div>
</Link>
  );
}

export default Housing;


