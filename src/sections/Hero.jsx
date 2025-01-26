import umran from "../assets/umran.jpg";
import computer from "../assets/computer.jpg";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row-reverse items-center h-screen gap-8 px-6 sm:px-12 py-10 bg-cover bg-center relative rounded-md"
      style={{
        backgroundImage: `url(${computer})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-2/5 flex justify-center z-10">
        <img
          src={umran}
          alt="Profile picture of Umran, a professional web developer"
          className="w-48 h-48 sm:w-60 sm:h-60 md:w-62 md:h-62 object-cover rounded-full shadow-lg border-[8px] border-blue-700 transition-transform transform hover:scale-105 duration-300"
        />
      </div>
      <div className="w-full md:w-3/5 space-y-6 text-center md:text-left z-10 ">
        <h1 className="font-bold text-4xl sm:text-5xl text-white leading-tight transition-transform transform hover:scale-105 duration-500">
          <Typewriter
          options ={{
          strings:["Hi I'm Umran  2025", "I'm  Frontend Developer"],
          autoStart:true,
          loop:true,
          delay: 75,
          }}
          /> 
        </h1>
        <p className="text-lg sm:text-xl  text-gray-200 leading-relaxed">
          I specialize in creating beautiful, responsive websites and web
          applications. Let’s work together to bring your vision to life!
        </p>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-white text-green-800 py-3 px-8 sm:px-12 rounded-full shadow-lg hover:bg-green-700 hover:text-white focus:ring-4 focus:ring-white focus:ring-offset-2 outline-none transition-all transform hover:scale-110"
        >
          Hire Me!
        </button>
      </div>
      <div className="absolute inset-0 bg-black/40 z-0 rounded-md"></div>
    </section>
  );
};

export default Hero;








