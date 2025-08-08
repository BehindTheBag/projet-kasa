import Banner from "../components/Banner/Banner";
import AppartDetails from "../components/AppartDetails/AppartDetails";
import '../styles/About.css';

function About() {
  return (
    <>
      <Banner />

      <div className="about-details-wrapper">
        <AppartDetails title="Fiabilité" />
        <AppartDetails title="Respect" />
        <AppartDetails title="Service" />
        <AppartDetails title="Sécurité" />
      </div>
    </>
  );
}

export default About;