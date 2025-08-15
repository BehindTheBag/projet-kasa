import { useState } from "react";
import arrowBack from "../../assets/arrow_back.png";
import arrowForward from "../../assets/arrow_forward.png";
import "../../styles/Carousel.css";

function Carousel({ pictures, title }) {
  // Index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Passer à l'image suivante
  function next() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0); // revenir à la première
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  // Passer à l'image précédente
  function prev() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1); // aller à la dernière
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={title} className="carousel-image" />

      {pictures.length > 1 && (
        <>
          <img src={arrowBack} alt="Précédent" className="arrow arrow-left" onClick={prev} />
          <img src={arrowForward} alt="Suivant" className="arrow arrow-right" onClick={next} />
          <div className="counter">{currentIndex + 1} / {pictures.length}</div>
        </>
      )}
    </div>
  );
}

export default Carousel;