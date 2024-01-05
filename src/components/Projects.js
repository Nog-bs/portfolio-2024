import React from "react";
import PikachuAdventure from "../assets/images/pikachu-adventure.png";
import transition from "./transition";

const Projects = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <a
                href="https://github.com/Nog-bs/pikachus_adventure"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col md:flex-row items-center bg-default rounded-lg shadow border-2 border-highlight md:hover:opacity-75 transition duration-500 max-w-[400px] md:max-w-xl"
            >
                <img
                    className="w-full h-96 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={PikachuAdventure}
                    alt="Pikachu's Adventure project"
                />
                <div className="p-4 flex flex-col justify-between leading-normal">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
                        Pikachu's Adventure
                    </h5>
                    <div className="flex mb-2">
                        <span className="px-2 py-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                            Python
                        </span>
                        <span className="px-2 py-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                            Pygame
                        </span>
                        <span className="px-2 py-1 mr-2 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full">
                            Git
                        </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
                        In "Pikachu's Adventure," players embark on a thrilling
                        journey in a nostalgic Pokemon themed setting. Developed
                        collaboratively, this Python-based adventure game blends
                        strategic gameplay inspired by the Pokemon series.
                    </p>
                </div>
            </a>
        </div>
    );
};

export default transition(Projects);
