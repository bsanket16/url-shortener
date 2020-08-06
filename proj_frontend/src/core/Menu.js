import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout, isAuthenticated } from '../auth'

import logo from './res/logo.png'

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top p-3">
                <div className="container">
                    <span className="navbar-brand">
                        <Link to="/">
                            <img src={logo} alt="logo" width="60%"/>
                        </Link>
                    </span>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="navbar-nav d-none d-lg-flex ml-auto">

{/* nav item 1 */}
                            <li className="nav-item dropdown ml-2 mr-2">
                                <Link className="link" to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Why Surl?</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm pt-3 pb-3 pl-2 pr-2">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-bookmark la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Surl 101 <br /></span>
                                                        <div className="info-text text-muted">An Introduction to Surl's features</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                <i className="las la-code la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Integrations & API <br /></span>
                                                        <div className="info-text text-muted">Connect Surl with tools you love</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                <i className="las la-globe la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Enterprise Class<br /></span>
                                                        <div className="info-text text-muted">Surl scale to the size you need</div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                            </li>

{/* nav item 2 */}
                            <li className="nav-item dropdown  ml-2 mr-2">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Solutions</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm pt-3 pb-3 pl-2 pr-2">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-thumbs-up la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Social Media <br /></span>
                                                        <div className="info-text text-muted">Amplify your brand on social media</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="fa fa-feed fa-lg" aria-hidden="true"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Digital Marketing <br /></span>
                                                        <div className="info-text text-muted">Drive omnl-channel engagement</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-terminal la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Customer Service <br /></span>
                                                        <div className="info-text text-muted">Connect with customers</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="fa fa-comment-o fa-lg" aria-hidden="true"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">For Developers <br /></span>
                                                        <div className="info-text text-muted">Build links into any waorkflow</div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                            </li>

{/* nav item 3 */}
                            <li className="nav-item dropdown  ml-2 mr-2">
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Features</span>
                                </Link>
                                <div className="underline"></div>
                                    <div className="dropdown-menu border border-light shadow-sm pt-3 pb-3 pl-2 pr-2">

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-link la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Link Management <br /></span>
                                                        <div className="info-text text-muted">Build and share powerful links</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-anchor la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Branded Links <br /></span>
                                                        <div className="info-text text-muted">Increase engagement and exposure</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-mobile la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Mobile Links<br /></span>
                                                        <div className="info-text text-muted">Create a seamless user experience</div>
                                                </div>
                                            </div>
                                        </Link>


                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="icon text-muted mr-2">
                                                    <i className="las la-chart-pie la-2x"></i>
                                                </div>

                                                <div className="drop-content">
                                                        <span className="text-dark">Campaign Management & Analytics<br /></span>
                                                        <div className="info-text text-muted">Track and optimize every touchpoint</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                            </li>

{/* nav item 4 */}
                            <li className="nav-item dropdown  ml-2 mr-2">
                                <Link className="link" to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Pricing</span>
                                </Link>
                                <div className="underline"></div>
                            </li>

{/* nav item 5 */}
                            <li className="nav-item dropdown  ml-2 mr-2">
                                <Link className="link" to="/" style={{ textDecoration: 'none' }}>
                                    <span className="nav-link" data-toggle="dropdown">Resources</span>
                                </Link>
                                <div className="underline"></div>
                                <div className="dropdown-menu border border-light shadow-sm row pt-3 pb-3 pl-2 pr-2">
                                    <div className="col-6 float-left">
                                        
                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="drop-content">
                                                        <span className="text-dark">Blog <br /></span>
                                                        <div className="info-text text-muted">Tips, Best practices and more</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="drop-content">
                                                        <span className="text-dark">Developers <br /></span>
                                                        <div className="info-text text-muted">API documentation and reports</div>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>

                                    <div className="col-6 float-right">
                                        
                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="drop-content">
                                                        <span className="text-dark">Resource Library<br /></span>
                                                        <div className="info-text text-muted">Ebooks and webinars</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link className="dropdown-item" to="/">
                                            <div className="wrap-drop-down d-flex mb-1">
                                                <div className="drop-content">
                                                        <span className="text-dark">Support <br /></span>
                                                        <div className="info-text text-muted">FAQs and help articles</div>
                                                </div>
                                            </div>
                                        </Link>
                                        
                                    </div>

                                </div>
                            </li>
                            
                        </ul>
{/* nav 2 */}

                        <ul className="navbar-nav ml-auto">

                            {!isAuthenticated() && (
                                <>
                                    <li className="nav-item mr-3">
                                        <Link className="nav-link" to="/login">Log in</Link>
                                    </li>

                                    <li className="nav-item mr-4">
                                        <Link className="nav-link signup" to="/signup">Sign up</Link>
                                    </li>
                                </>
                            )}

                            {isAuthenticated() && (
                                <>

                                    <li className="nav-item mr-4">
                                            <Link className="nav-link signup" to="/dashboard">Dashboard</Link>
                                    </li>

                                    <li className="nav-item mr-4">
                                
                                        <Link className="nav-link" onClick={() => {
                                                logout(() => {
                                                    console.log('logged out')
                                                })
                                            }} to='/'>
                                            Logout
                                        </Link>

                                    </li>

                                </>
                            )}

                            <li className="nav-item d-none d-lg-flex">
                                <button type="button" className="nav-btn btn btn-primary">Get a Quote</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Menu)