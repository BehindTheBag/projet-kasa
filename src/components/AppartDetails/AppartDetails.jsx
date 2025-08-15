import { useState } from 'react';
import arrowUp from '../../assets/arrow_up.png';
import '../../styles/AppartDetails.css';

function AppartDetails({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="appart-details">
      <div className="appart-details-header" onClick={() => setShowContent(!showContent)}>
        <h3>{title}</h3>
        <img 
          src={arrowUp} 
          alt="flèche" 
          className={showContent ? 'rotated' : ''} 
        />
      </div>
      <div className={`appart-details-content ${showContent ? 'open' : ''}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default AppartDetails;