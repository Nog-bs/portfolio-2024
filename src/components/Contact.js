import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import profilePic from "../assets/images/edro-profile.PNG";
import transition from "./transition";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img
                className="rounded-full h-48 w-48 mb-4"
                src={profilePic}
                alt="profile"
            />
            <h1 className="inline-block mb-4">Connect with Me!</h1>
            <p className="text-xs w-1/2 text-center">
                Thanks for diving into my portfolio! I'm thrilled at the
                prospect of embarking on new adventures and growth
                opportunities. Ready to kickstart something amazing? Let's
                connect! Check out the links below and let's get this journey
                started!
            </p>
            <div className="flex mt-6">
                <a
                    href="https://www.linkedin.com/in/edrogonzales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <LinkedInIcon style={{ fontSize: 40, color: "#0a66c2" }} />
                </a>
                <a
                    href="https://github.com/Nog-bs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-2"
                >
                    <GitHubIcon style={{ fontSize: 40 }} />
                </a>
                <a href="mailto:edrogonzales@gmail.com" className="mx-2">
                    <EmailIcon style={{ fontSize: 40, color: "#d14836" }} />
                </a>
            </div>
        </div>
    );
};

export default transition(Contact);
