import '../styles/Appartement.css';
import hosticon from '../assets/hosticon.png';
import star_active from '../assets/star_active.png';
import star_inactive from '../assets/star_inactive.png';
import AppartDetails from '../components/AppartDetails/AppartDetails';
import mountains from '../assets/mountains.png';

function Appartement() {
  return (
    <div className="appart-page">
      <div className="appart-image">
       
          <img src={mountains} alt="montagne" style={{ width: '800px', height: '400px' }} /> 
      </div>

      <div className="appart-top">
        <div>
          <h1 className="appart-title">Cozy loft on the Canal Saint-Martin</h1>
          <h2 className="appart-location">Paris, Ile-de-France</h2>
          <div className="appart-tags">
            <span>Cozy</span>
            <span>Canal</span>
            <span>Paris 10</span>
          </div>
        </div>

        <div className="side-info">
          <div className="appart-host">
            <h3 className="appart-hostname">
              Alexandre<br />Dumas
            </h3>
            <img src={hosticon} alt="Icône hôte" className="host-icon" />
          </div>
          <div className="appart-rating">
            <span><img src={star_active} alt="étoile pleine" /></span>
            <span><img src={star_active} alt="étoile pleine" /></span>
            <span><img src={star_active} alt="étoile pleine" /></span>
            <span><img src={star_inactive} alt="étoile vide" /></span>
            <span><img src={star_inactive} alt="étoile vide" /></span>
          </div>
        </div>
      </div>

      <div className="appart-details-wrapper">
        <AppartDetails title="Description" />
        <AppartDetails title="Équipements" />
      </div>
    </div>
  );
}

export default Appartement;
