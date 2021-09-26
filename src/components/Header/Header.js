import React from 'react';
import './Header.css'

// Top banner part
const Header = () => {
    return (
        <div className = "header container text-center text-warning border border-2 border-primary border-top-0 rounded p-3">
            <h2>Build a Special Security Squad</h2>
            <p className="text-white">The fastest growing occupation in the private sector is security guards. The fastest growing occupation in the public sector is prison guards</p>
            <h3>Total Budget: 10 Million </h3>
        </div>
    );
};

export default Header;