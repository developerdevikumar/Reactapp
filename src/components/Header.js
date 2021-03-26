import React from 'react'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className="tm-site-header">
            <div className="row">

                <div className="col-12 tm-site-header-col">
                    <div className="tm-site-header-left">
                        <i className="far fa-2x fa-eye tm-site-icon"></i>
                        <h1 className="tm-site-name">New Vision</h1>
                    </div>
                    <div className="tm-site-header-right tm-menu-container-outer">

                        <nav className="navbar navbar-expand-lg">

                            <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="dark-blue-text">
                                    <i
                            className="fas fa-bars fa-1x"></i>
                                </span>
                            </button>

                            <div className="collapse navbar-collapse tm-nav" id="navbarSupportedContent1">

                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item"><NavLink  className="nav-link tm-nav-link" activeClassName="nav-item-active" to="/home">Home</NavLink><span></span></li>
                                    <li className="nav-item "><NavLink className="nav-link tm-nav-link" activeClassName="nav-item-active" to="/company">Our Company</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link tm-nav-link" activeClassName="nav-item-active" to="/services">Services</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link tm-nav-link" activeClassName="nav-item-active" to="/contact">Contact</NavLink></li>
                                </ul>

                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header;
