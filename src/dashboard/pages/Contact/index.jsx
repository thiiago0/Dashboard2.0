import "./contact.css";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import whatssap from "../../../assets/whatsapp.png";

export const Contact = () => {
  return (
    <div className="background-contacto">
      <h2 className="contacto">Contactos</h2>
      <h3 className="redes">Mis redes sociales son:</h3>
      <div className="social-media">
        <div className="facebook">
          <a href="https://www.facebook.com/santhiago.osorno/" target="_blank">
            <img className="social-media-img" src={facebook} alt="facebook" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/santhiiagoo10/" target="_blank">
            <img className="social-media-img" src={instagram} alt="instagram" />
          </a>
        </div>
        <div className="whatssap">
          <a href="https://wa.me/15167102617" target="_blank">
            <img className="social-media-img" src={whatssap} alt="whastapp" />
          </a>
        </div>
      </div>
    </div>
  );
};
