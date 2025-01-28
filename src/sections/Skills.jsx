import { useEffect } from "react";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma, FaMobileAlt, FaGithub, 
  FaNodeJs, FaSlack, FaGitAlt 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiTrello 
} from "react-icons/si";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Skills = () => {
  const frontendSkills = [
    {
      SkillName: "HTML",
      SkillLevel: 80,
      Description: "The backbone of any web page, defining its structure.",
      Icon: FaHtml5,
      Color: "text-orange-500",
    },
    {
      SkillName: "CSS",
      SkillLevel: 80,
      Description: "For styling web pages to make them visually appealing.",
      Icon: FaCss3Alt,
      Color: "text-blue-500",
    },
    {
      SkillName: "JavaScript",
      SkillLevel: 75,
      Description: "Adding interactivity and logic to web applications.",
      Icon: FaJs,
      Color: "text-yellow-500",
    },
    {
      SkillName: "Responsive Design",
      SkillLevel: 80,
      Description: "Creating web designs that look great on any device.",
      Icon: FaMobileAlt,
      Color: "text-green-500",
    },
    {
      SkillName: "React",
      SkillLevel: 75,
      Description: "Building modern user interfaces with reusable components.",
      Icon: FaReact,
      Color: "text-blue-400",
    },
    {
      SkillName: "TailwindCSS",
      SkillLevel: 75,
      Description: "A utility-first CSS framework for rapid UI development.",
      Icon: SiTailwindcss,
      Color: "text-teal-500",
    },
  ];

  const backendSkills = [
    {
      SkillName: "Node.js",
      SkillLevel: 60,
      Description: "JavaScript runtime for building server-side applications.",
      Icon: FaNodeJs,
      Color: "text-green-600",
    },
    {
      SkillName: "MongoDB",
      SkillLevel: 60,
      Description: "A NoSQL database for modern web applications.",
      Icon: SiMongodb,
      Color: "text-green-500",
    },
    {
      SkillName: "MySQL",
      SkillLevel: 60,
      Description: "Managing relational databases efficiently.",
      Icon: SiPostgresql,
      Color: "text-blue-700",
    },
    {
      SkillName: "Express",
      SkillLevel: 65,
      Description: "A lightweight framework for building APIs and web apps.",
      Icon: SiExpress,
      Color: "text-gray-500",
    },
  ];

  const toolsSkills = [
    {
      SkillName: "Figma",
      SkillLevel: 90,
      Description: "Designing and prototyping interfaces collaboratively.",
      Icon: FaFigma,
      Color: "text-purple-500",
    },
    {
      SkillName: "GitHub",
      SkillLevel: 85,
      Description: "Version control to track and manage code changes.",
      Icon: FaGithub,
      Color: "text-gray-700",
    },
    {
      SkillName: "Git",
      SkillLevel: 80,
      Description: "A distributed version control system for tracking changes in code.",
      Icon: FaGitAlt,
      Color: "text-red-500",
    },
    {
      SkillName: "Trello",
      SkillLevel: 80,
      Description: "A project management tool for team collaboration.",
      Icon: SiTrello,
      Color: "text-blue-400",
    },
    {
      SkillName: "Slack",
      SkillLevel: 85,
      Description: "Team communication and collaboration platform.",
      Icon: FaSlack,
      Color: "text-purple-600",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
      offset: 200, 
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center text-gray-800 mb-10"
        >
          My Skills
        </h2>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Frontend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition hover:scale-105"
              >
                <div className={`text-5xl mb-4 ${skill.Color}`}>
                  <skill.Icon />
                </div>
                <h4 className="text-xl font-bold text-gray-700">
                  {skill.SkillName}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{skill.Description}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ width: `${skill.SkillLevel}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {skill.SkillLevel}% 
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Backend</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition hover:scale-105"
              >
                <div className={`text-5xl mb-4 ${skill.Color}`}>
                  <skill.Icon />
                </div>
                <h4 className="text-xl font-bold text-gray-700">
                  {skill.SkillName}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{skill.Description}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ width: `${skill.SkillLevel}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {skill.SkillLevel}% 
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-700 mb-6">Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {toolsSkills.map((skill, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="bg-white shadow-md rounded-lg p-6 text-center transform transition hover:scale-105"
              >
                <div className={`text-5xl mb-4 ${skill.Color}`}>
                  <skill.Icon />
                </div>
                <h4 className="text-xl font-bold text-gray-700">
                  {skill.SkillName}
                </h4>
                <p className="text-gray-500 text-sm mb-4">{skill.Description}</p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 to-green-600"
                    style={{ width: `${skill.SkillLevel}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {skill.SkillLevel}% 
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
