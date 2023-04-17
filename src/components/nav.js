import React from 'react';
import favicon from '../image/favicon/favicon.svg';

function Navigation() {
    return (  
        <nav className="navbar fixed-top navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">

                <a className="navbar-brand" href="#introduction"><img src={favicon} width="50" height="50" alt="Jon Chen logo"/> Jon Chen</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ms-auto">
                            <a className="nav-link active" aria-current="page" href="#about">About</a>
                            <a className="nav-link" href="#experience">Experience</a>
                            <a className="nav-link" href="#projects">Projects</a>
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    );
}

export default Navigation;