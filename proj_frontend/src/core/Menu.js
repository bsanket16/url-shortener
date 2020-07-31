import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm p-3">
                <div className="container">
                    <span className="navbar-brand">
                        <Link to="/">
                            <img src="logo.png" alt="logo" width="60%"/>
                        </Link>
                    </span>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Why Surl?</span>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Solutions</span>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Features</span>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Pricing</span>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Resources</span>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            
                        </ul>
                        
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Log in</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Sign up</Link>
                            </li>

                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">Get a Quote</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Menu)
