import React from "react";
import "./Contact.css"
const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <input type="number"  className="input"
            placeholder="Enter contact number"
            />
            <br></br>
            <input type="text" className="input"
            placeholder="Enter your email"
            />
            <br></br>
            <button className="button" type="submit">
                Submit
            </button>
        </div>
    );
}
export default Contact; 