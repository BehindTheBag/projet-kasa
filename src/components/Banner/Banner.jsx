import bannerImg from '../../assets/img.png';
import '../../styles/banner.css';

function Banner () {
  return (
    <div className="banner">
<img src={bannerImg} alt="Banner" />
    <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
