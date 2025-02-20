import Titl from "../assets/Titl.svg";
import umran from "../assets/umran.jpg";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="relative mx-auto w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 font-serif px-4 sm:px-8"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <img
          src={umran}
          alt="Profile"
          className="w-32 mt-10 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left max-w-2xl lg:max-w-3xl">
          <div className="relative">
            <img
              src={Titl}
              alt="Decorative Title Icon"
              className="absolute top-0 right-5 rotate-45 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 transform hover:scale-110 transition-transform duration-300"
            />
            <p className="text-xl justify-center items-center text-center sm:text-2xl text-gray-600 uppercase tracking-wide">
              About Me
            </p>
          </div>
          <h1 className="text-base sm:text-lg lg:text-xl text-justify border-x-8 rounded-md shadow-md p-20 leading-relaxed text-black">
            Hi, I am Umran Abdo Alaziez, a passionate and dedicated student at a coding
            institute, fueled by a deep curiosity for technology and its endless
            possibilities. I specialize in web development, problem-solving, and crafting
            innovative designs that merge functionality with creativity. My journey in
            coding has been a rewarding blend of challenges and accomplishments, sparking
            my drive to continuously learn, adapt, and excel. Beyond technical skills, I
            thrive on collaboration, embracing teamwork to tackle complex projects and
            bring visionary ideas to life. With a strong commitment to personal and
            professional growth, I aim to contribute meaningfully to the ever-evolving
            world of technology.
            <a
            href="/cv.pdf"
            download
            className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 rounded-md shadow-lg mt-6 inline-block hover:from-green-600 hover:to-green-800 hover:scale-105 transition-all focus:ring-4 focus:ring-green-300 focus:ring-offset-2 outline-none font-semibold"
          >
            📄 Download CV
          </a>
          </h1>
       
          <p className="text-gray-500 mt-4 text-sm sm:text-base">Find me here:</p>
        </div>
      </div>
      <footer className="absolute bottom-6 sm:bottom-8 text-center text-gray-500">
        <p className="text-xs sm:text-sm">20K+ | Subscribe</p>
      </footer>
    </main>
  );
};

export default AboutMe;
