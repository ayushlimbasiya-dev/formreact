import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <BrowserRouter>
      <div className="container">
        <form className="box" onSubmit={handleSubmit}>
          <nav className="navbar">
            <Navbar />
          </nav>
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <h1>Register</h1>
                  <p className="subtitle">Create your account</p>

                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="input"
                    type="password"
                    name="password"
                    maxLength={6}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="input"
                    type="password"
                    name="confirmPassword"
                    maxLength={6}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <button className="button" type="submit">
                    Submit
                  </button>
                </>
              }
            />
            {/* About */}
            <Route path="/about" element={<About />} />
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </form>
      </div>
    </BrowserRouter>
  );
}

export default App;