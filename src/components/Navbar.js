import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-links">
                <Link className="nav-link mr-4" to="/">
                    Home
                </Link>
                <Link className="nav-link mr-4" to="/contact">
                    Contact
                </Link>
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
