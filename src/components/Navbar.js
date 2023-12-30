import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const baseStyles = "text-xl mr-4 border-b-2 transition duration-500";
    const activeStyles = "text-highlight border-highlight";
    const inactiveStyles =
        "border-transparent hover:text-highlight hover:border-highlight";

    return (
        <div className="h-1/4 flex flex-col items-center justify-center space-x-0.5 pt-24">
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
