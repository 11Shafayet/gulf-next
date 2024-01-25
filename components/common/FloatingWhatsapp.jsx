import Image from 'next/image';
import WhatsappIcon from '../../public/whatsapp.png';
import 'react-whatsapp-widget/dist/index.css';

const FloatingWhatsapp = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[1000]">
      <a href="https://wa.me/01638719578" target="_blank">
        <Image
          src={WhatsappIcon}
          alt="whatsapp"
          className="w-16 h-16 rounded-full object-cover"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;
