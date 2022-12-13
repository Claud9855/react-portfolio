import React from "react";
const me = require('../images/CV-pic.jpeg');

const About = () => {
    return (
        <div className="m-5 d-flex row">
            <h1 className="display-4">About Me</h1>
            <figure className="m-5">
                <img src={me} width="100%" style={{borderRadius: '50%'}}/>
            </figure>
            <p style={{fontSize: "1.5rem"}}>
                I am a self-taught programmer with some college education in computer science and a certificate
                for full-stack engineering from the university of connecticut. I have a background working mostly
                with java building gui applications and server-side programming with HTML, css, and Javascript. 
                I have expriences working with different types of programming technologies ranging from the front-end
                and back-end. 
            </p>

            <p style={{fontSize: "1.5rem"}}>
                I still consider myself as a amuter programmer still having a long way to go, but I hope I can still
                be in service to make your ideas a reality. If you want to contact me, check out the contact page, I 
                will answer back as soon as possible. I offer many services from front-end and back-end development, to 
                desktop and mobile development.
            </p>

        </div>
    );
};

export default About;