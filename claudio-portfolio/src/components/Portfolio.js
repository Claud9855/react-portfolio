import React from "react";
import Project from "./Project";
const WeatherApp = require('../images/WeatherApp.png');
const PasswordGenerator = require('../images/Password-Generator.png');
const JavascriptCodingQuiz = require('../images/JavaScript-Coding-Quiz.png');
const BluFlix = require('../images/BluFlix.png');
const WorkDayScheduler = require('../images/Work-Day-Scheduler.png');
const NoteTaker = require('../images/NoteTaker.png');
const Portfolio = () => {
    return (
        <div className="m-5">
            <h1>Portfolio</h1>

            <div className="d-flex justify-content-center m-5 px-5">
                <div className="row mx-5">
                    <Project 
                        title="weather-dashboard-app" 
                        text="This project uses openweather api to retreive weather data and display to user" 
                        projectName="https://github.com/Claud9855/weather-dashboard-app" 
                        deployed="https://claud9855.github.io/weather-dashboard-app/"
                        image={WeatherApp}
                        />

                    <Project 
                        title="Password Generator" 
                        text="This project uses plain HTML/CSS and javascript to randomly generate a password" 
                        projectName="https://github.com/Claud9855/Password-Generator" 
                        deployed="https://claud9855.github.io/Password-Generator/"
                        image={PasswordGenerator}
                        />
                </div>
            </div>
            <div className="d-flex justify-content-center m-5 px-5">
                <div className="row mx-5">
                    <Project 
                        title="Javascript Coding Quiz" 
                        text="This app allow people to test their javascript skills by taking a timed quiz" 
                        projectName="https://github.com/Claud9855/JavaScript-Coding-Quiz" 
                        deployed="https://claud9855.github.io/JavaScript-Coding-Quiz/"
                        image={JavascriptCodingQuiz}
                        />

                    <Project 
                        title="Bluflix" 
                        text="This was my first project working in a team, this site allows people to search up movies using IMDB and googleMaps APIs" 
                        projectName="https://github.com/BrandonN64/Project-1-BluFlix-" 
                        deployed="https://brandonn64.github.io/Project-1-BluFlix-/"
                        image={BluFlix}
                        />
                </div>
            </div>
            <div className="d-flex justify-content-center m-5 px-5">
                <div className="row mx-5">
                    <Project 
                        title="WorkDay Scheduler" 
                        text="This project allow users to plan out their workday(9-5)" 
                        projectName="https://github.com/Claud9855/work-day-scheduler" 
                        deployed="https://claud9855.github.io/work-day-scheduler/"
                        image={WorkDayScheduler}
                        />

                    <Project 
                        title="Note Taker" 
                        text="This project use node js and express to allow users to take notes and save them over the server" 
                        projectName="https://github.com/Claud9855/note-taker" 
                        deployed="https://notetaker-exxpress.herokuapp.com/"
                        image={NoteTaker}
                        />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;