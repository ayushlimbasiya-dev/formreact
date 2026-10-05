import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Menu Icon */}
      <button type="button" className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        AA
      </button>
      {/* Home, About, Contact */}
      {isOpen && (
        <div className="menu">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
export default Navbar;