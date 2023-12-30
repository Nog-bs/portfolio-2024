import React from "react";
import transition from "./transition";
import profilePic from "../assets/images/edro-profile.PNG";

const About = () => {
    return (
        <div className="flex flex-col items-center">
            <img
                className="rounded-full h-48 w-48 mb-4"
                src={profilePic}
                alt="profile"
            />
            <p className="text-xs md:text-sm w-full md:w-1/2 m-2 text-center">
                As a dedicated student in the Computer System's Technology
                Program at BCIT, I am passionate about leveraging my growing
                expertise in software development to create impactful solutions.
            </p>
            <p className="text-xs md:text-sm w-full md:w-1/2 m-2 text-center">
                My journey so far includes hands-on experience in full-stack web
                development, particularly with React, Node.js, and TypeScript.
                With projects ranging from crash reporting dashboards to
                customer relationship management systems, I have honed my skills
                in both frontend and backend technologies.
            </p>
            <p className="text-xs md:text-sm w-full md:w-1/2 m-2 text-center">
                My academic pursuit at BCIT is not just a testament to my
                commitment to learning, but also a gateway to developing the
                technical acumen needed in the ever-evolving field of
                technology.
            </p>
        </div>
    );
};

export default transition(About);
