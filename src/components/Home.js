import React from "react";
import profilePic from "../assets/images/edro-profile.PNG";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-12">
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
                Software Engineer
            </a>
        </div>
    );
};

export default Home;
