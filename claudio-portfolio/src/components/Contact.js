import React, { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [textarea, setTextarea] = useState('');

    const handleInputChange = (e) => { 
        const {target} = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType === 'name') {
            setName(inputValue);
        }
        else if(inputType === 'email') {
            setEmail(inputValue);
        }
        else {
            setTextarea(inputValue);
        }
    };

    const handleChange = (event) => {
        setTextarea(event.target.value)
      }
    return (
        <div className="row m-5">
            <form>
                <h1>Contact</h1>
                
                <label>Name:</label>
                <br/>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                />
                <br/>
                <label>Email Address:</label>
                <br/>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                />
                <br/>
                <label htmlFor="message">message:</label>
                <br/>
                <textarea value={textarea} onChange={handleChange} />
                {/* <textarea id="message" name="message" onChange={handleInputChange}></textarea> */}
                <br/>
                <input
                    type="button"
                    name="submitBtn"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default Contact;