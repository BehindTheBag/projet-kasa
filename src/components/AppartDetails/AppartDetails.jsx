import arrowUp from '../../assets/arrow_up.png';
import '../../styles/AppartDetails.css';

function AppartDetails({ title }) {
  return (
    <div className="appart-details">
      <h3>{title}</h3>
      <span><img src={arrowUp} alt="flèche" /></span>
    </div>
  );
}

export default AppartDetails;