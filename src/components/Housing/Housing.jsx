import { Link } from 'react-router-dom';
import '../../styles/Location.css';

function Housing({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="house">
      <img src={cover} alt={title} />
      <div className="house-title">{title}</div>
    </Link>
  );
}

export default Housing;
