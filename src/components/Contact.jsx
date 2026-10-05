import React from "react";
const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact:</h1>
            <input  type="number"  
            placeholder="Enter contact number"
            max={10}
            />
            <br></br>
            <input type="text" 
            placeholder="enter your email"
            />
            <br></br>
            <button className="button" type="submit">
                Submit
            </button>
        </div>
    );
}
export default Contact; 