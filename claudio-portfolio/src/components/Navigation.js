import React from "react";

const Navigation = (props) => {
    return (
        <nav>
            <ul className={props.className}>
                <li className="nav-item m-5 text-white text-uppercase">About Me</li>
                <li className="nav-item m-5 text-white text-uppercase">Portfolio</li>
                <li className="nav-item m-5 text-white text-uppercase">Contact</li>
                <li className="nav-item m-5 text-white text-uppercase">Resume</li>
            </ul>
        </nav>
    );
};

export default Navigation;