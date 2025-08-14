import BannerImg from "../components/Banner/BannerImg";
import AppartDetails from "../components/AppartDetails/AppartDetails";
import "../styles/About.css";
import "../styles/Banner.css";

function About() {
  return (
    <>
      <BannerImg />
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
