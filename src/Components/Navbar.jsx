import React from "react";
import CartWidget from "./CartWidget";

const Navbar = () => {

    return (
        <div className="row fondoAzul">
            <div className="col-md-8 ">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="images\logo.jpg" alt="Logo" width="80px"/>
                    </a>
                    <span className="navbar-brand mb-0 h1">Keylog, tu tienda de teclados!</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/productos">Teclados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sobreNosotros">Nuestra misión</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/logIn">Log In</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-4 d-flex justify-content-around align-items-center">
                <CartWidget/>
            </div>
      </div>
    )
};

export default Navbar;