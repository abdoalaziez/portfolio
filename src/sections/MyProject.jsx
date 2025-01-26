import bookmarkImage from "../assets/bookmark .jpg";
import TaskTrackerImage from "../assets/Task Tracker.png";

const MyProject = () => {
  const projects = [
    {
      title: "Task  Tracker",
      description:
        " A web application to manage and track tasks effectively. Features include adding, updating, and deleting tasks.",
      image: TaskTrackerImage,
      liveLink: "https://task-treker-cto8.vercel.app/",
    },
    {
      title: "Bookmark Manager",
      description:
      "An elegant bookmark manager to save and organize your favorite websites. Simple and user-friendly design.",
      image: bookmarkImage,
      liveLink: "https://abdoalaziez.github.io/bookse/",
    },
  ];

  const ProjectCard = ({ project, index }) => (
    <div
      className={`shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 bg-white `}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`w-full mt-10 ${index % 2 === 0 ? "h-54 mt-10" : "h-68 mb-8"} object-cover `}
      />
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
      </div>
      <div className="p-6">
        <p className="text-gray-800 ">{project.description}</p>
        <a
          href={project.liveLink}
          target="_blank "
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-blue-800 text-white py-3 px-6 text-center rounded-lg shadow-lg w-full hover:from-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Visit Project
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="MyProject"
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 bg-gray-50"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </section>
  );
};

export default MyProject;
