import bannerImg from '../../assets/img.png';
import '../../styles/banner.css';

function BannerImg({ src, alt, text }) {
  return (
    <div className="banner">
      <img src={src} alt={alt} className="banner-img" />
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default BannerImg;