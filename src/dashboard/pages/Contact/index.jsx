import "./contact.css";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import whatssap from "../../../assets/whatsapp.png";
// import { useWhatss } from "../hook/useWhatss";

export const Contact = () => {
  // const handleWhatsAppClick = useWhatss();
  return (
    <div className="background-contacto">
      <h2 className="contacto">Contactos</h2>
      <h3 className="redes">Mis redes sociales son:</h3>
      <div className="social-media">
        <div className="facebook">
          <a href="https://www.facebook.com/santhiago.osorno/" target="_blank">
            <img className="facebook-1" src={facebook} alt="" />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/santhiiagoo10/" target="_blank">
            <img className="instagram-1" src={instagram} alt="" />
          </a>
        </div>
        <div className="whatssap">
          <a href="https://wa.me/15167102617" target="_blank">
            <img className="whatssap-1" src={whatssap} alt="" />
          </a>
          {/* <img
          className="whatssap-1"
          id="whatsappImage"
          src={whatssap}
          alt="Enlace a WhatsApp"
          onClick={handleWhatsAppClick}
        /> */}
        </div>
      </div>
    </div>
  );
};
