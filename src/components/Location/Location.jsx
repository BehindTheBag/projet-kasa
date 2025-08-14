import '../../styles/Location.css';
import Housing from "../Housing/Housing.jsx";
import logements from '../../data/logements.json'; // check housing pour changement

function Location() {
  return (
    <div className="card">
      {logements.map(logement => (
        <Housing 
          key={logement.id} 
          id={logement.id} 
          title={logement.title} 
          cover={logement.cover}
        />
      ))}
    </div>
  );
}

export default Location;
