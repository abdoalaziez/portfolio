// import sear from "../assets/sear.jpg";
// import computers from "../assets/computres.jpeg";
// import vite from "../assets/vite.jpeg";

// const Services = () => {
//   return (
//     <section
//       id="services"
//       className="bg-gradient-to-r from-gray-90 bg-white via-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center gap-10 text-white p-5"
//     >
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
//         <div className="w-full sm:w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
//           <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
//             <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
//               <img
//                 src={sear}
//                 alt="Movie cover"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
//               <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
//                 <h1 className="text-2xl sm:text-3xl font-semibold">
//                   The Kings Man
//                 </h1>
//                 <p className="my-2 text-sm sm:text-lg font-medium">9.0 Rating</p>
//                 <h1 className="text-justify font-bold text-xs sm:text-sm">
//                   100% Guaranteed
//                 </h1>
//                 <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
//                   Waite New
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full sm:w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
//           <div className="relative training-back-flip  my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
//             <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
//               <img
//                 src={computers}
//                 alt="Movie cover"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
//               <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
//                 <h1 className="text-2xl sm:text-3xl font-semibold ">
//                   The Kings Man
//                 </h1>
//                 <p className="my-2 text-sm sm:text-lg font-medium">9.0 Rating</p>
//                 <h1 className="text-justify font-bold sm:text-sm">
//                   Best Results
//                 </h1>
//                 <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
//                   More Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full sm:w-[350px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
//           <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
//             <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden">
//               <img
//                 src={vite}
//                 alt="Movie cover"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden">
//               <div className="text-center flex flex-col items-center justify-center h-full text-gray-700 px-4 pb-24">
//                 <h1 className="text-2xl sm:text-3xl font-semibold">
//                   The Kings Man
//                 </h1>
//                 <p className="my-2 text-sm sm:text-lg font-medium">9.0 Rating</p>
//                 <h1 className="text-justify text-xs  font-bold sm:text-sm">
//                   Business Solutions
//                 </h1>
//                 <button className="bg-teal-500 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
//                   Watch Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;








import { FaHtml5, FaDatabase, FaNodeJs, FaTools } from 'react-icons/fa';

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-r from-gray-90 bg-white via-gray-800 to-gray-900 min-h-screen flex flex-col justify-center items-center gap-10 text-white p-5"
    >
      <h2 className="text-3xl font-bold text-center mb-10">My Full-Stack Development Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full">
        <div className="w-full sm:w-[250px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaHtml5 className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">Frontend Development</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">Responsive UI/UX</p>
                <p className="text-justify font-bold text-xs sm:text-sm">Pixel-Perfect Design</p>
              </div>
              <button className="bg-teal-500 -mb-7  px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaNodeJs className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">Backend Development</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">Scalable APIs</p>
                <p className="text-justify font-bold text-xs sm:text-sm">High-Performance Server</p>
              </div>
              <button className="bg-teal-500 -mb-7  px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[250px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaDatabase className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">Database Management</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">SQL & NoSQL</p>
                <p className="text-justify font-bold text-xs sm:text-sm">Efficient Data Handling</p>
              </div>
              <button className="bg-teal-500 -mb-7  px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaTools className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">DevOps & Cloud</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">Continuous Integration</p>
                <p className="text-justify font-bold text-xs sm:text-sm">Cloud Infrastructure</p>
              </div>
              <button className="bg-teal-500 -mb-7  px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[250px] h-[300px] bg-transparent cursor-pointer group perspective mx-auto">
          <div className="relative my-preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 border-gray-700 shadow-lg w-full h-full rounded-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaHtml5 className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">Full-Stack Solutions</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">End-to-End Development</p>
                <p className="text-justify font-bold text-xs sm:text-sm">Custom Solutions</p>
              </div>
              <button className="bg-teal-500 -mb-7  px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
            <div className="absolute bg-gray-100 my-rotate-y-180 backface-hidden w-full h-full rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
              <div className="text-center text-gray-700 px-4 py-6">
                <FaNodeJs className="text-5xl text-teal-500 mb-4" />
                <h3 className="text-2xl sm:text-3xl font-semibold">End-to-End Development</h3>
                <p className="my-2 text-sm sm:text-lg font-medium">All-Inclusive Service</p>
                <p className="text-justify font-bold text-xs sm:text-sm">Customizable Features</p>
              </div>
              <button className="bg-teal-500 -mb-7 px-4 py-2 font-semibold text-white rounded-md absolute left-1/2 -translate-x-1/2 -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 shadow-lg hover:scale-110">
                Learn Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
