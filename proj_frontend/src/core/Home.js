import React from 'react'

import '../styles.css'
import '../override.css'
import '../media.css'

import Menu from './Menu'
import Footer from './Footer'
import ShortenUrl from '../user/ShortenUrl'
import ShortenUrlUser from '../user/ShortenUrlUser'

import hero from './res/hero.png'
import grow1 from './res/grow1.png'
import grow2 from './res/grow2.png'
import grow3 from './res/grow3.png'
import brandLogo from './res/brand-logos.png'

import { isAuthenticated } from '../auth'

export default function Home() {

    const heroSection = () => (
        <>
            <div className="container">
                <div className="hero-main row align-items-center">
                    <div className="col-12 col-sm-8 col-md-8">
                        <div className="hero-left text-dark">
                            <div className="hero-head text-dark">
                                Create Click-Worthy Links
                            </div>

                            <div className="sub-head text-muted mb-4">
                                Build and protect your brand using powerful, recognizable short links.
                            </div>

                            <div className="button">
                                <button className="hero-btn btn btn-primary btn-lg text-white d-none d-sm-block">
                                    Get Started for Free    
                                </button>

                                <div className="sub-button d-none d-sm-block">
                                    Get a Quote
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right col-12 d-none d-sm-block col-sm-4 col-md-4 mt-1">
                        <img className="hero-logo" src={hero} alt="hero"/>
                    </div>
                </div>
            </div>
        </>
    )

    const surlAbout = () => (
        <>
            <div className="container grow">
                
                <div className=" container text-center">
                    <div className="grow-brand text-dark text-center">Grow Your Brand With Every Click</div>
                    <div className="sub-grow-brand text-center text-dark mt-1">
                        Branded links can drive a 34% higher click-through versus non-branded links, 
                        meaning they help get more eyeballs on your brand and its content.
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <img src={grow1} alt="" width="100%"/>
                        <div className="grow-item-head">Inspire trust</div>
                        <div className="grow-item-sub">
                        As your click numbers go up, your brand recognition increases. 
                        And the more that grows, the more confident people become in the 
                        integrity of your content and communications. (It’s a wonderful cycle.)
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <img src={grow2} alt="" width="100%"/>
                        <div className="grow-item-head">Boost results</div>
                        <div className="grow-item-sub">
                        Better deliverability and improved click-through are just the start. 
                        Rich link-level data allows you to understand who is clicking your links, 
                        as well as when and where, so you can make smarter decisions around the 
                        content and you share communications you share.
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <img src={grow3} alt="" width="100%"/>
                        <div className="grow-item-head">Gain control</div>
                        <div className="grow-item-sub">On top of being able to fully customize your links,
                        auto-branding boosts awareness of your brand by giving you credit for your content 
                        and more insight into how it’s being consumed.</div>
                    </div>

                </div>

                <div className="text-center text-primary mt-5">
                    <button className="grow-button btn btn-light text-primary">Get Started</button>
                </div>

                <div className="text-primary text-center sub-grow-button mt-2">Learn More</div>
            </div>
        </>
    )

    const brandSrul = () => (
        <>
                        <hr className="mb-5" style={{
                width: '80%',
                backgroundColor: '#000000',
                height: .1,
                opacity: '0.7',
                borderColor : '#cccccc'
            }}/>

            <div className="row text-dark companies m-auto pt-3 text-center">
                <div className="col-12 brand-text">
                    The most recognized brands in the world love Surl
                </div>
                <div className="col-12 brands d-none d-sm-block">
                    <img className="mt-5 mb-5" src={brandLogo} alt="" width="70%" /> 
                </div>
            </div>

            <div className="row text-dark m-auto more">
                <div className="col-12 more-link text-white text-center">
                    More than a link shortener
                </div>
                <div className="col-12 get-started text-center mt-5">
                    <button className="hero-btn btn btn-primary btn-lg text-white">
                        Get Started for Free
                    </button>
                </div>
            </div>
        </>
    )

    return (
        <>
            <Menu />
            {heroSection()}

            {!isAuthenticated() && (
                <ShortenUrl />
            )}

            {isAuthenticated() && (
                <ShortenUrlUser />
            )}

            {surlAbout()}
            {brandSrul()}
            <Footer />
        </>
    )
}