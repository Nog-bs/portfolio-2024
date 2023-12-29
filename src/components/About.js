import React from "react";

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold">About</h1>
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

export default About;
