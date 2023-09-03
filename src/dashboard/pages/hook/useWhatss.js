import { useEffect } from "react";

export const useWhatss = () => {
  const phoneNumber = "15167102617";

  useEffect(() => {
    const handleWhatsAppClick = () => {
      const whatsappUrl = `https://wa.me/${phoneNumber}`;
      window.location.href = whatsappUrl;
    };

    const whatsappImage = document.getElementById("whatsappImage");
    whatsappImage.addEventListener("click", handleWhatsAppClick);

    return () => {
      whatsappImage.removeEventListener("click", handleWhatsAppClick);
    };
  }, []);
};
