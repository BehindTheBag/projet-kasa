import mountainImg from "../assets/mountains.png";
import AppartDetails from "../components/AppartDetails/AppartDetails";
import BannerImg from "../components/Banner/BannerImg";
import aboutData from "../data/about.json";
import "../styles/About.css";

function About() {
  return (
      <div className="about-page">
      <BannerImg src={mountainImg} alt="Bannière montagnes" />
      <div className="about-details-wrapper">
        {aboutData.map(item => (
          <AppartDetails key={item.id} title={item.title} content={item.description} />
        ))}
      </div>
       </div>
  );
}

export default About;