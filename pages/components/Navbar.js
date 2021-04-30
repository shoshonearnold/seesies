import React from 'react'

const Navbar = () => {
    return (
        <div className="nav-box">
            <nav className="main-nav">
                <div className="main-nav__container">
                    <a className="main-nav__link" href="#weekly-special" title="Jump to the weekly special">Special</a>
                    <a className="main-nav__link" href="#menu" title="Jump to the menu">Menu</a>
                    <a className="main-nav__link" href="#hours" title="Jump to business hours">Hours</a>
                    <a className="main-nav__link" href="#location" title="Jump to get directions">Location</a>
                    <a className="main-nav__link" href="#orderonline" title="Jump to ordering information">Order Online!</a>
                </div>
                <div className="btn-container">
                    <button className="btn">Sign In</button>
                    <button className="btn">Sign Up</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
