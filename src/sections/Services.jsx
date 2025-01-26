import sear from "../assets/sear.jpg";
import computers from "../assets/computres.jpeg";
import vite from "../assets/vite.jpeg";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center gap-10 text-white p-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
              <img
                src={sear}
                alt="Movie cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  The Kings Man
                </h1>
                <p className="my-2 text-sm md:text-lg font-medium">9.0 Rating</p>
                <h1 className="text-justify font-bold text-xs md:text-sm">
                100% Guaranteed
                </h1>
                <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                  Waite New
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
              <img
                src={computers}
                alt="Movie cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
                <h1 className="text-2xl  md:text-3xl font-semibold ">
                  The Kings Man
                </h1>
                <p className="my-2 text-sm md:text-lg font-medium">9.0 Rating</p>
                <h1 className="text-justify font-bold md:text-sm">
                Best Results
                </h1>
                <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                 More Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
              <img
                src={vite}
                alt="Movie cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
                <h1 className="text-2xl md:text-3xl font-semibold">
                  The Kings Man
                </h1>
                <p className="my-2 text-sm md:text-lg font-medium">9.0 Rating</p>
                <h1 className="text-justify text-xs  font-bold md:text-sm">
                Business Solutions
                </h1>
                <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                  Watch Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
