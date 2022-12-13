import React from "react";
// const WeatherApp = require('../images/WeatherApp.png');


const Project = (props) => {
    return (
        <div className="card col-sm-5 m-3" style={{color: 'black', textShadow: '0px 0px 0px  black', fontSize: '1.2rem', boxShadow: '2px 2px 4px black'}}>
            <img className="card-img-top" src={props.image} alt="project display" style={{width:'100%'}}/>
            <div className="card-title">{props.title}</div>
            <div className="card-text">{props.text}</div>
            <div className="card-footer mt-3">GitHub Repository: <a href={props.projectName} style={{color: "black"}} target="_blank" rel="noreferrer">{props.projectName}</a></div>
            <a href={props.deployed} className="btn btn-primary m-5" target="_blank" rel="noreferrer">See Project</a>
        </div>
    );
};

export default Project;