import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import hosticon from "../assets/hosticon.png";
import star_active from "../assets/star_active.png";
import star_inactive from "../assets/star_inactive.png";
import AppartDetails from "../components/AppartDetails/AppartDetails";
import "../styles/Appartement.css";

function Appartement() {
  const { id } = useParams(); // id url 
  const logement = logements.find((item) => item.id === id); // recherche du bon logement

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const rating = parseInt(logement.rating); 

  const stars = (
    <>
      <img src={rating >= 1 ? star_active : star_inactive} alt="étoile 1" />
      <img src={rating >= 2 ? star_active : star_inactive} alt="étoile 2" />
      <img src={rating >= 3 ? star_active : star_inactive} alt="étoile 3" />
      <img src={rating >= 4 ? star_active : star_inactive} alt="étoile 4" />
      <img src={rating >= 5 ? star_active : star_inactive} alt="étoile 5" />
    </>
  );

  return (
    <div className="appart-page">
      <div className="appart-image">
        <img src={logement.cover} alt={logement.title} />
      </div>

      <div className="appart-top">
        <div>
          <h1 className="appart-title">{logement.title}</h1>
          <h2 className="appart-location">{logement.location}</h2>
          <div className="appart-tags">
            {logement.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="side-info">
          <div className="appart-host">
            <h3 className="appart-hostname">{logement.host.name}</h3>
            <img
              src={logement.host.picture || hosticon}
              alt="Icône hôte"
              className="host-icon"
            />
          </div>
          <div className="appart-rating">{stars}</div>
        </div>
      </div>

      <div className="appart-details-wrapper">
        <AppartDetails title="Description" content={logement.description} />
        <AppartDetails title="Équipements" content={logement.equipments} />
      </div>
    </div>
  );
}


export default Appartement;
