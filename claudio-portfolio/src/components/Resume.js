import React from "react";

const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
            
            <p>Download my <a href="#">resume</a></p>

            <h1>Front-end Proficiencies</h1>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h1>Back-end Proficiencies</h1>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );
};

export default Resume;