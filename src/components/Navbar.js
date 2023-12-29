import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav space-x-0.5 m-4">
            <div className="nav-links">
                <Link className="nav-link mr-4" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/about">
                    About
                </Link>
                <Link className="nav-link mr-4" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
