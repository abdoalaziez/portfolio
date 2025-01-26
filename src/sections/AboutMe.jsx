import Titl from "../assets/Titl.svg";
import umran from "../assets/umran.jpg";

const AboutMe = () => {
  return (
    <main
      id="about"
      className="relative mx-auto w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-900 font-serif px-4 sm:px-8"
    >
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <img
          src={Titl}
          alt="Decorative Title Icon"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <img
          src={umran}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 object-cover rounded-full shadow-lg border-4 border-gray-300 hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left  max-w-2xl lg:max-w-3xl">
          <p className="text-xl sm:text-2xl text-center text-gray-600 mb-2 sm:mb-4 uppercase tracking-wide">
            About Me
          </p>
          <h1 className="text-base sm:text-lg lg:text-xl text-justify  border-x-8 rounded-md shadow-md p-10 leading-relaxed text-black">
            Hi, I am Umran Abdo Alaziez, a passionate and dedicated student at a
            coding institute, fueled by a deep curiosity for technology and its endless
            possibilities. I specialize in web development, problem-solving, and crafting
            innovative designs that merge functionality with creativity. My journey in
            coding has been a rewarding blend of challenges and accomplishments, sparking
            my drive to continuously learn, adapt, and excel. Beyond technical skills, I
            thrive on collaboration, embracing teamwork to tackle complex projects and
            bring visionary ideas to life. With a strong commitment to personal and
            professional growth, I aim to contribute meaningfully to the ever-evolving
            world of technology.
          </h1>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">Find me here:</p>
        </div>
      </div>
      <div className="absolute top-[30%] left-6 space-y-3 sm:space-y-4 md:top-1/4 md:left-12">
        <div className="bg-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-md hover:scale-105 transition-transform">
          Design Systems
        </div>
      </div>
      <div className="absolute top-[30%] right-6 space-y-3 sm:space-y-4 md:top-1/4 md:right-12">
        <div className="bg-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-full shadow-md hover:scale-105 transition-transform">
          Web Design
        </div>
      </div>
      <footer className="absolute bottom-6 sm:bottom-8 text-center text-gray-500">
        <p className="text-xs sm:text-sm">20K+ | Subscribe</p>
      </footer>
    </main>
  );
};

export default AboutMe; 