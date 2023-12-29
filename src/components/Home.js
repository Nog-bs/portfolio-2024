import React from "react";
import profilePic from "../images/edro-profile.PNG";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="rounded-full h-48 w-48 mb-4"
                src={profilePic}
                alt="profile"
            />
            <h1 className="text-4xl font-bold">
                Hi, I am <span>Edro Gonzales</span>{" "}
                <span id="hello-emoji">👋</span>
            </h1>
            <a
                href="https://en.wikipedia.org/wiki/Software_engineering"
                target="_blank"
                rel="noreferrer"
                className="text-xl font-bold w-auto m-2"
            >
                Software Engineer & Web Developer
            </a>
            <p className="text-sm w-1/2 m-2 text-center">
                As a dedicated student in the Computer System's Technology
                Program at BCIT, I am passionate about leveraging my growing
                expertise in software development to create impactful solutions.
                My journey so far includes hands-on experience in full-stack web
                development, particularly with React, Node.js, and TypeScript.
                With projects ranging from crash reporting dashboards to
                customer relationship management systems, I have honed my skills
                in both frontend and backend technologies. My academic pursuit
                at BCIT is not just a testament to my commitment to learning,
                but also a gateway to developing the technical acumen needed in
                the ever-evolving field of technology.
            </p>
            <p className="font-bold text-sm w-1/2 m-2 text-center">
                Website is still a work in progress...
            </p>
        </div>
    );
};

export default Home;