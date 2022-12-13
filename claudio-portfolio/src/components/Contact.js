import React, { useState } from "react";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
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

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
        setError('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }

    if(textarea === '') {
        setError('message is require');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setEmail('');
    setTextarea('');
    setError('');
  };

    const handleChange = (event) => {
        setTextarea(event.target.value)
      }
    return (
        <div className="row m-5">
            <form style={{width: "100%"}}>
                <h1>Contact</h1>
                
                <label className="mt-3">Name:</label>
                <br/>
                <input
                    type="text"
                    className="mb-3"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    style={{width: '50%'}}
                />
                <br/>
                <label>Email Address:</label>
                <br/>
                <input
                    type="email"
                    className="mb-3"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    style={{width: '50%'}}
                />
                <br/>
                <label>message:</label>
                <br/>
                <textarea value={textarea} onChange={handleChange} style={{width: '50%', height: '40%'}}/>
                <br/>
                <input
                    type="button"
                    className="my-3"
                    name="submitBtn"
                    onClick={handleFormSubmit}
                    value="Submit"
                    
                />
                {error && (
        <div>
          <p className="error-text">{error}</p>
        </div>
      )}
            </form>
            
        </div>
    );
};

export default Contact;