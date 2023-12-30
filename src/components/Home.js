import React from "react";
import transition from "./transition";
import profilePic from "../assets/images/edro-profile.PNG";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-24">
            <img
                className="rounded-full h-48 w-48 mb-4"
                src={profilePic}
                alt="profile"
            />
            <h1 className="text-2xl md:text-4xl font-bold text-center">
                Hi, I am <span>Edro Gonzales</span>{" "}
                <span id="hello-emoji">👋</span>
            </h1>
            <a
                href="https://en.wikipedia.org/wiki/Software_engineering"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold w-auto m-2"
            >
                Software Engineer
            </a>
        </div>
    );
};

export default transition(Home);
