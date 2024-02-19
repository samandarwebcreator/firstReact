import './Footer.scss';
import footerImg from "../../assets/images/footerImg.png"

const Footer = () => {
  return (<footer className='footer'>
    <div className='container'>
      <div className="footer__main-box">
        <div className="footer__content-box">
          <h3>
          Join 100 Compannies who boost their business with Product
          </h3>
          <button>
            Get This
          </button>
        </div>

        <div className="footer__image-box">
          <img src={footerImg} alt="product output" />
        </div>
      </div>
    </div>
  </footer>)
};

export default Footer;
