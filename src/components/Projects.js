import React from "react";
import PikachuAdventure from "../assets/images/pikachu-adventure.png";
import RateVanRent from "../assets/images/rate-van-rent.png";
import transition from "./transition";

// Sample data for projects
const projectList = [
    {
        title: "Pikachu's Adventure",
        imageUrl: PikachuAdventure,
        description:
            "In 'Pikachu's Adventure', players embark on a thrilling journey in a nostalgic Pokemon themed setting. Developed collaboratively, this Python-based adventure game blends strategic gameplay inspired by the Pokemon series.",
        technologies: ["Python", "Pygame", "Unit Testing", "Documentation"],
        url: "https://github.com/Nog-bs/pikachus_adventure",
    },
    // Add two more projects here
    {
        title: "Rate Van Rent",
        imageUrl: RateVanRent,
        description:
            "'Rate Van Rent' is a mobile web browser application designed to revolutionize the renting experience in Vancouver. This platform provides a unique perspective on housing options, allowing renters to share and access real experiences, distinct from traditional platforms like Facebook or Craigslist.",
        technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
        url: "https://comp1800-demo-202330-edro.web.app",
    },
];

const ProjectCard = ({ project }) => (
    <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="flex flex-col md:flex-row items-center bg-default rounded-lg shadow border-2 border-highlight md:hover:opacity-75 transition duration-500 max-w-[400px] md:max-w-xl my-4"
    >
        <img
            className="w-full h-96 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={project.imageUrl}
            alt={project.title}
        />
        <div className="p-4 flex flex-col justify-between leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                {project.title}
            </h5>
            <div className="flex flex-wrap justify-start mb-2">
                {project.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 mr-2 mt-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                {project.description}
            </p>
        </div>
    </a>
);

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {projectList.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
};

export default transition(Projects);
