import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import HappyBonsai from "../assets/images/happy-bonsai.jpg";
import Portfolio from "../assets/images/portfolio.png";
import PikachuAdventure from "../assets/images/pikachu-adventure.png";
import RateVanRent from "../assets/images/rate-van-rent.png";
import Ethos from "../assets/images/ethos.png";
import transition from "./transition";

const projectList = [
    {
        title: "Ethos",
        imageUrl: Ethos,
        description:
            "Ethos is a discord check-in bot that I created to track leetcode consistency within my school set to promote continuous learning",
        technologies: ["Python", "JSON"],
        githubUrl: "https://github.com/Nog-bs/ethos",
    },
    {
        title: "Rate Van Rent",
        imageUrl: RateVanRent,
        description:
            "'Rate Van Rent' is a mobile web browser application designed to revolutionize the renting experience in Vancouver. This platform provides a unique perspective on housing options, allowing renters to share and access real experiences, distinct from traditional platforms like Facebook or Craigslist.",
        technologies: ["JavaScript", "HTML", "CSS", "Firebase"],
        url: "https://comp1800-demo-202330-edro.web.app",
        githubUrl: "https://github.com/Nog-bs/edro-rate-van-rent",
    },
    {
        title: "Pikachu's Adventure",
        imageUrl: PikachuAdventure,
        description:
            "In 'Pikachu's Adventure', players embark on a thrilling journey in a nostalgic Pokemon themed setting. Developed collaboratively, this Python-based adventure game blends strategic gameplay inspired by the Pokemon series.",
        technologies: ["Python", "Pygame", "Unit Testing", "Documentation"],
        url: "https://github.com/Nog-bs/pikachus_adventure",
    },
    {
        title: "Happy Bonsai",
        imageUrl: HappyBonsai,
        description:
            "'Happy Bonsai' is an innovative application I conceptualized and developed during my final days at BrainStation. This unique app combines 3D visualization with book tracking, allowing users to visually monitor their reading progress. As users log books, they see their virtual bonsai grow, making reading progress both fun and visually appealing.",
        technologies: ["React", "Three.js", "Firebase", "Google Books API"],
        url: "https://happy-bonsai.netlify.app",
        githubUrl: "https://github.com/Nog-bs/happy-bonsai",
    },
    {
        title: "Portfolio",
        imageUrl: Portfolio,
        description:
            "My portfolio website is a React made with Tailwind that showcases my projects and skills. This website is designed to be responsive and has some animations thanks to Framer Motion.",
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        url: "https://github.com/Nog-bs/portfolio-2024",
    },
];

const ProjectCard = ({ project }) => {
    return (
        <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col md:flex-row items-center bg-default rounded-lg shadow border-2 border-highlight hover:border-teal-700 transition duration-500 max-w-[400px] md:max-w-xl my-4"
        >
            <img
                className="w-full h-96 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={project.imageUrl}
                alt={project.title}
            />
            <div className="p-4 flex flex-col justify-between leading-normal">
                <h5 className="text-2xl font-bold tracking-tight text-white mb-2">
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
                <p className="text-xs text-gray-400 mb-3">
                    {project.description}
                </p>
                <a
                    href={project.githubUrl ?? project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:opacity-75 transition duration-500"
                >
                    <GitHubIcon fontSize="large" />
                </a>
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            {projectList.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
            <NavLink
                to="/contact"
                className="inline-block px-6 py-2 my-8 text-white bg-highlight rounded transition duration-500 hover:bg-white hover:text-highlight"
            >
                Connect with Me
            </NavLink>
        </div>
    );
};

export default transition(Projects);
