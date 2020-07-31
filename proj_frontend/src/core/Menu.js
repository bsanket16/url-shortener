import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top p-3">
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

{/* nav item 1 */}

                            <li className="nav-item dropdown">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Why Surl?</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-bookmark la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Surl 101 <br /></span>
                                                        <span className="text-muted">An Introduction to Surl's features</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                <i class="las la-code la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                <i class="las la-globe la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                            </li>

{/* nav item 2 */}
                            <li className="nav-item dropdown">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Solutions</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-thumbs-up la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Surl 101 <br /></span>
                                                        <span className="text-muted">An Introduction to Surl's features</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="fa fa-feed fa-lg" aria-hidden="true"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-terminal la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="fa fa-comment-o fa-lg" aria-hidden="true"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                            </li>

{/* nav item 3 */}

                            <li className="nav-item dropdown">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Features</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-link la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Surl 101 <br /></span>
                                                        <span className="text-muted">An Introduction to Surl's features</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-anchor la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-mobile la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>


                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex">
                                                <div className="icon text-muted">
                                                    <i class="las la-chart-pie la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <span className="text-muted">Connect Surl with tools you love</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            </li>

{/* nav item 4 */}
                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Pricing</span>
                                <div className="underline"></div>
                            </li>

{/* nav item 5 */}

                            <li className="nav-item dropdown">
                                <span className="nav-link" data-toggle="dropdown">Resources</span>
                                <div className="underline"></div>
                                <div className="dropdown-menu border border-light shadow-sm row">
                                    <div className="col-6 float-left">
                                        <Link className="dropdown-item" to="/">Action</Link>
                                        <Link className="dropdown-item" to="/">Another action</Link>
                                        <Link className="dropdown-item" to="/">Something else here</Link>
                                    </div>
                                    <div className="col-6 float-right">
                                        <Link className="dropdown-item" to="/">Action</Link>
                                        <Link className="dropdown-item" to="/">Another action</Link>
                                        <Link className="dropdown-item" to="/">Something else here</Link>
                                    </div>
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
