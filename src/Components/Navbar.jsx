import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <>
            <nav id="navbar">

                <ul>
                    <li className="item"><a href="#header_section">Home</a></li>
                    <li className="item"><a href="#home_section">View Customers</a></li>
                    <li className="item"><a href="#home_section">Transfer History</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;