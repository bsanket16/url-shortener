import React from 'react'

import '../styles.css'
import Menu from './Menu'
import Footer from './Footer'
import '../override.css'

export default function Home() {

    const heroSection = () => (
        <>
            <div className="container">
                <div className="hero-main row align-items-center">
                    <div className="col-12 col-lg-8">
                        <div className="hero-left text-dark">
                            <div className="hero-head text-dark">
                                Create Click-Worthy Links
                            </div>

                            <div className="sub-head text-muted mb-4">
                                Build and protect your brand using powerful, recognizable short links.
                            </div>

                            <div className="button">
                                <button className="hero-btn btn btn-primary btn-lg text-white">
                                    Get Started for Free    
                                </button>

                                <div className="sub-button">
                                    Get a Quote
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right col-12 col-lg-4 mt-1">
                        <img className="hero-logo" src="hero.png" alt="hero"/>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Menu />
            {heroSection()}
            <Footer />
        </>
    )
}