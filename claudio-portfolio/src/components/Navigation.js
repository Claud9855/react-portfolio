import React from "react";

const Navigation = (props) => {
    return (
        <nav>
            <ul className={props.className}>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#AboutMe" onClick={() => props.handlePageChange('About')} className="text-white">About Me</a>
                </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Portfolio" onClick={() => props.handlePageChange('Portfolio')} className="text-white">Portfolio</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Contact" onClick={() => props.handlePageChange('Contact')} className="text-white">Contact</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Resume" onClick={() => props.handlePageChange('Resume')} className="text-white">Resume</a>
                    </li>
            </ul>
        </nav>
    );
};

export default Navigation;