import React from "react";
import '../styles/Navigation.css';
const Navigation = (props) => {
    return (
        <nav>
            <ul className={props.className}>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#AboutMe" onClick={() => props.handlePageChange('About')} className={props.currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Portfolio" onClick={() => props.handlePageChange('Portfolio')} className={props.currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Contact" onClick={() => props.handlePageChange('Contact')} className={props.currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                <li className="nav-item m-5 text-white text-uppercase">
                    <a href="#Resume" onClick={() => props.handlePageChange('Resume')} className={props.currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                    </li>
            </ul>
        </nav>
    );
};

export default Navigation;