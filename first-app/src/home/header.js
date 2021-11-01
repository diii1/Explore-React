import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-sm navbar-light bg-white shadow">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="assets/img/logo-ALTA.png" alt="Logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="mynavbar">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item me-3 text-center">
                                <a className="active nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item me-3 text-center">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item me-3 text-center">
                                <a className="nav-link" href="#">EXPERIENCE</a>
                            </li>
                            <li className="nav-item me-3 text-center">
                                <a className="nav-link" href="contact_us.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
