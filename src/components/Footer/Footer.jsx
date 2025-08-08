import logoFooter from '../../assets/logoFooter.png';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="logoFooter" />
      <p className="footer-txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;