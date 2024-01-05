import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const baseStyles =
        "text-sm md:text-base mr-4 border-b-2 transition duration-500";
    const activeStyles = "text-highlight border-highlight";
    const inactiveStyles =
        "border-transparent hover:text-highlight hover:border-highlight";

    return (
        <div className="fixed w-full top-0 start-0 flex flex-col items-center justify-center space-x-0.5 pt-24 md:pt-12 h-1/4 md:h-24 ">
            <div className="nav-links">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${baseStyles} ${
                            isActive ? activeStyles : inactiveStyles
                        }`
                    }
                    end
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `${baseStyles} ${
                            isActive ? activeStyles : inactiveStyles
                        }`
                    }
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `${baseStyles} ${
                            isActive ? activeStyles : inactiveStyles
                        }`
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `${baseStyles.replace("mr-4", "")} ${
                            isActive ? activeStyles : inactiveStyles
                        }`
                    }
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
