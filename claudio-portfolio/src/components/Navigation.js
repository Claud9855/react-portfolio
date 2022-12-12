import React from "react";

const Navigation = (props) => {
    return (
        <nav>
            <ul className={props.className}>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#AboutMe" onClick={() => props.handlePgaeChange('About')}>About Me</a>
                </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Portfolio" onClick={() => props.handlePgaeChange('Portfolio')}>Portfolio</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Contact" onClick={() => props.handlePgaeChange('Contact')}>Contact</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Resume" onClick={() => props.handlePgaeChange('Resume')}>Resume</a>
                    </li>
            </ul>
        </nav>
    );
};

export default Navigation;