import React from 'react';
import './Header.css';  // We'll create this CSS file shortly

function Header() {
    return (
        <header className="header">
            <h1>My Portfolio</h1>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;












