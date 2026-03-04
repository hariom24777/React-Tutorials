import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="title">
        <a href="/">
          <h2>
            React
            <span>.</span>
          </h2>
        </a>
      </div>
      <nav className="navbar">
        <ul className="navlinks">
          <li>
            <a className="navlink" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="navlink" href="documentation">
              Learn
            </a>
          </li>
          <li>
            <a className="navlink" href="reference">
              Reference
            </a>
          </li>
          <li>
            <a className="navlink" href="community">
              Community
            </a>
          </li>
          <li>
            <a className="navlink" href="blog">
              Blog
            </a>
          </li>
          <li>
            <a className="navlink" href="practice">
              Practice
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
