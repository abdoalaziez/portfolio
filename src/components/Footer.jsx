import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSkype, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500); 
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <section
      id="connect"
      className="flex flex-col items-center gap-6 py-5 px-4"
      style={{
        background: 'black', 
        color: '#333',
      }}
    >
      <h2 className="text-3xl font-bold text-white">Contact_</h2>
      <div className="flex flex-wrap justify-center gap-6 text-3xl mt-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 text-white transition duration-300"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 text-white transition duration-300"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.skype.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 text-white transition duration-300"
          title="Skype"
        >
          <FontAwesomeIcon icon={faSkype} />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 text-white  transition duration-300"
          title="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 text-white transition duration-300"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <p className="text-justify mt-6 text-white">
        Have an interesting project I can help you with? <br />
        Get in touch with me at{' '}
        <span
          style={{
            backgroundColor: 'white',
            color: '#333',
            padding: '0.3rem 0.5rem',
            borderRadius: '0.3rem',
            display: 'inline-block',
          }}
        >
          <a
            href="mailto:umranabdo112@gmail.com"
            className="font-bold underline hover:opacity-80"
          >
            umranabdo112@gmail.com
          </a>
        </span>
      </p>

      <p className="mt-10 text-sm text-white">&copy; 2025 U M R A N A B D O</p>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-blue-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Top
        </button>
      )}
    </section>
  );
};

export default Footer;
