import React, { useState, useEffect } from 'react'
import axios from 'axios'

// import { API } from '../backend'

import { isAuthenticated } from '../auth'

import Menu from '../core/Menu'
import Footer from '../core/Footer'

const Dashboard = () => {   

    const [ links, setLinks ] = useState([])

    const { _id, username } = isAuthenticated().user
    const { token } = isAuthenticated()

    useEffect(() => {
        axios.get(`/api/urls/${_id}`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then(res => {
            setLinks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <Menu />

            <div className="dashboard container">
                <div className="dashboard-head text-dark text-center m-auto pt-4 display-4" style={{textTransform: 'capitalize'}}>
                    Hey {username}  
                </div>
                <div className="sub-dashboard-head text-muted text-center m-auto pt-3 pb-5"> Manage all your shorten links here & keep a track on them</div>
            </div>
            
                <div className="row text-dark m-auto more">
                    <div className="short-links container card text-dark m-auto">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                            
                                {links.map(link => (
                                    <li className="list-group-item row d-flex p-3 mt-1">
                                        <span className="col-lg-7">{link.originalUrl}</span>
                                        <a className="col-lg-4 list-group-links" href={`${link.shortUrl}`} target="_blank" rel="noopener noreferrer">{link.shortUrl}</a>
                                        <span className="col-lg-1">
                                            <button className="copy btn btn-light text-primary mb-2">Copy</button>
                                        </span>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>

            <Footer />
        </>
    )
}

export default Dashboard