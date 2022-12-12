import React from "react";
import Navigation from "./Navigation";
import "../styles/Header.css";


const Header = (props) => {
    return (
        <header className="container-fluid bg-gradient-dark shadow">
            <div className="d-flex row">
                <h1 className="text-white mt-4 pt-2 col">Claudio</h1>
                <Navigation className="nav pr-5 col" currentPage={props.currentPage} handlePageChange={props.handlePageChange}/>
            </div>
        </header>
    );
};

export default Header;