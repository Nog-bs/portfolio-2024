import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed top-0 space-x-0.5 mt-36">
            <div className="nav-links">
                <Link className="text-xl mr-4" to="/">
                    Home
                </Link>
                <Link className="text-xl mr-4" to="/about">
                    About
                </Link>
                <Link className="text-xl" to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
