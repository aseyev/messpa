import React from "react";
// import About from "./About";
// import Contact from "./Contact";
// import Home from "./Home";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo darken-4">
                <div className="container">
                    <a href="/messpa/" className="brand-logo left">
                        MesSPA
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <NavLink to="/messpa/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/messpa/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/messpa/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
