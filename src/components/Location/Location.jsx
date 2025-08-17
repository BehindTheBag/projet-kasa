import logements from '../../data/logements.json'; // check housing pour changement
import '../../styles/Location.css';
import Housing from "../Housing/Housing.jsx";

function Location() {
  return (
     <div className="location-container">
    <div className="card">
      {logements.map(logement => ( <Housing key={logement.id} id={logement.id}  title={logement.title} cover={logement.cover} />
      ))}
    </div> 
    </div>
  );
 
}

export default Location;
