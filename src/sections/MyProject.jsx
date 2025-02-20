// import bookmarkImage from "../assets/bookmark .jpg";
// import TaskTrackerImage from "../assets/Task Tracker.png";
// import timeImage from "../assets/time.png";
// import CalculatorImage from "../assets/Calculator.png";

// const MyProject = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Task Tracker",
//       description: "Manage and track tasks effectively with features like adding, updating, and deleting tasks.",
//       image: TaskTrackerImage,
//       liveLink: "https://task-treker-cto8.vercel.app/",
//     },
//     {
//       id: 2,
//       title: "Bookmark Manager",
//       description: "Save and organize your favorite websites with a simple and user-friendly design.",
//       image: bookmarkImage,
//       liveLink: "https://abdoalaziez.github.io/bookse/",
//     },
//     {
//       id: 3,
//       title: "Time Tracker",
//       description: "Track your time effectively with timers and logs of tracked tasks.",
//       image: timeImage,
//       liveLink: "https://create-times.vercel.app/",
//     },
//     {
//       id: 4,
//       title: "Calculator",
//       description: "A simple and clean calculator with basic arithmetic functions.",
//       image: CalculatorImage,
//       liveLink: "https://https-github-com-umran-calculator-1j9m.vercel.app/",
//     },
//   ];

//   return (
//     <section id="MyProject" className="p-8 bg-gray-100">
//       <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 p-6 flex flex-col justify-between h-full"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
//             <p className="text-gray-600 mb-4">{project.description}</p>
//             <a
//               href={project.liveLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-500"
//             >
//               Visit Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default MyProject;





import bookmark from "../assets/bookmark .jpg";
import TaskTrack from "../assets/Task Tracker.png";
import timeImage from "../assets/time.png";
import CalculatorImage from "../assets/Calculator.png";

function Project() {
  return (
    <section id="MyProject" className="py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold space-b mb-12 text-gray-700">Personal Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 space-y-0 max-w-6xl mx-auto">
          <div className="shadow-md m-auto w-72 h-96 hover:scale-105 transition-transform rounded-lg overflow-hidden">
           
            <a href="https://abdoalaziez.github.io/bookmarkse/" target="_blank" rel="noreferrer">
              <img src={bookmark} alt="bookmark project" className=" w-96 m-auto  object-cover" />
              <h1 className="absolute  flex mt-10 font-bold ml-6">Bookmark Organizer</h1>
              <p className="flex mt-36 font-bold">Save and organize your favorite websites with a simple and user-friendly design</p>
              <a href="https://abdoalaziez.github.io/bookmarkse/" target="_blank"  className="block mt-4 text-blue-600 font-bold hover:underline">Visit Project</a>
            </a>
          </div>
          <div className="shadow-md m-auto w-72 h-96  hover:scale-105 transition-transform rounded-lg overflow-hidden">
            <a href="https://task-treker-cto8.vercel.app/" target="_blank" rel="noreferrer">
              <img src={TaskTrack} alt="TaskTrack project" className="w-96 m-auto object-cover" />
              <h1 className="absolute mt-10 flex font-bold ml-6">Task Tracker</h1>
              <p className="flex mt-36 font-bold ">Track your time effectively with timers and logs of tracked tasks</p>
              <a href="https://task-treker-cto8.vercel.app/"  target="_blank" className="block mt-4 text-blue-600 font-bold m hover:underline">Visit Project</a>
    
            </a>
          </div>
          <div className=" shadow-md m-auto w-72 h-96 hover:scale-105 transition-transform rounded-lg overflow-hidden">
            <a href="https://create-times.vercel.app/" target="_blank" rel="noreferrer">
              <img src={timeImage} alt="Time project" className="w-62 m-auto  object-cover" />
              <h1 className="absolute flex mt-10 font-bold ml-6">Time Management App</h1>
              <p className="flex mt-36 font-bold">Track your time effectively with timers and logs of tracked tasks</p>
              <a href="https://create-times.vercel.app/" target="_blank"  className="block mt-4 text-blue-600 font-bold hover:underline">Visit Project</a>
            </a>
          </div>
          <div className=" shadow-md m-auto w-72 h-96 hover:scale-105 transition-transform rounded-lg overflow-hidden">
            <a href="https://https-github-com-umran-calculator-nfwq.vercel.app/" target="_blank" rel="noreferrer">
              <img src={CalculatorImage} alt="Calculator project" className="w-52  m-auto object-cover" />
              {/* <h1 className="flex font-bold ml-6">Simple Calculator</h1> */}
              <p className="flex font-bold">A simple and clean calculator with basic arithmetic functions</p>
              <a href="https://https-github-com-umran-calculator-nfwq.vercel.app/" target="_blank"  className="block  text-blue-600 font-bold hover:underline">Visit Project</a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
