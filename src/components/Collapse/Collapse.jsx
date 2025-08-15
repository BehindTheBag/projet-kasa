import { useState } from 'react';
import arrowUp from '../../assets/arrow_up.png';
import '../../styles/AppartDetails.css';

function AppartDetails({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  function toggleContent() {
    setShowContent(!showContent);
  }

  return (
    <div className="appart-details">
      <div className="appart-details-header" onClick={toggleContent}>
        <h3>{title}</h3>
        <img src={arrowUp} alt="flèche" className={showContent ? 'rotated' : ''} />
      </div>
      {showContent ? <div className="appart-details-content">{content}</div> : null}
    </div>
  );
}

export default AppartDetails;

