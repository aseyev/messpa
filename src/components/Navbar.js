import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper red darken-3">
                <div className="container">
                    <a href="/" className="brand-logo left">
                        MesSPA
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
