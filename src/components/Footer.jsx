import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const ConnectWithMe = () => {
  const [showButton, setShowButton] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 500) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="connect" className="flex flex-col items-center gap-6 py-20 px-4 bg-gray-800">
      <p className="text-lg text-center text-white max-w-3xl">
        I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the platforms below!
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-3xl mt-4">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 text-white transition duration-300"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 text-white transition duration-300"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 text-white transition duration-300"
          title="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 text-white transition duration-300"
          title="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="mailto:umranabdo112@gmail.com"
          className="hover:text-red-500 text-white transition duration-300"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {showButton && (
        <div className="mt-8">
          <a
            href="mailto:umranabdo112@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Send Me an Email
          </a>
        </div>
      )}

      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 md:bottom-10 md:right-10 bg-blue-500 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Go to Top
      </button>
    </section>
  );
};

export default ConnectWithMe;
