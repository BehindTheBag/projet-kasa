import bannerImg from '../../assets/img.png';
import '../../styles/banner.css';

function BannerImg() {
  return (
    <div className="banner">  
      <img src={bannerImg} alt="Banner" />
    </div>
  );
}

export default BannerImg;