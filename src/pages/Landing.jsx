import BannerImg from '../components/Banner/BannerImg';
import Location from '../components/Location/Location';
import landingImg from '../assets/img.png';

function Landing() {
  return (
    <>
      <BannerImg src={landingImg} alt="Banner Landing" text="Chez vous, partout et ailleurs" />
      <Location />
    </>
  );
}

export default Landing;