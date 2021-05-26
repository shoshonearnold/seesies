import React from 'react'



const Navbar = () => {
    return (
        <div className="nav-box">
            <nav className="navbar navbar-expand-lg navbar-dark bg">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Seesies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Home
                        <span className="visually-hidden">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <button type="button" class="btn btn-outline-success">Log In</button>
                    <button type="button" class="btn btn-outline-danger">Register</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
