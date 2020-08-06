import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { shortenUrl } from '../auth'

const ShortenUrl = () => {

    const [url, setUrl] = useState({
        originalUrl: '',
        longUrl: '',
        shortUrl: '',
        error: ''   
    })

    const { originalUrl, longUrl, shortUrl, error } = url

    const handleChange = name => event => {
        setUrl({...url, error:false, [name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setUrl({...url, error: false})

            shortenUrl({originalUrl})
            .then((data) => {
                if(data.error){
                    setUrl({...url, error:data.error})
                }
                else{
                    setUrl({...url,
                    originalUrl: '',
                    longUrl: data.originalUrl,
                    shortUrl: data.shortUrl,
                    error: ''
                    })
                }
            })
    }

    const errorMsg = () => {
        return (
                <div className="container alert alert-danger" style={{display: error ? "" : "none"}}>
                    { error }
                </div>
        )
    }

    const shortenUrlArea = () => (
    <>
        <div className="shorten-url text-white pt-4 pb-5">
                
                <form>
                    <div className="form-group">
                        <div className="row container m-auto">
                            <div className="col-12 col-sm-9">
                                <input type="text" className="form-control url-field" placeholder="Shorten your link" 
                                    onChange={handleChange("originalUrl")} autoComplete="new-name" value= { originalUrl }
                                />
                                <div className="sub-shorten-text float-right mt-1 mr-3 d-none d-md-block">
                                    <Link to="/login" style={{color: 'white'}}><span>Log in</span></Link> to manage and track all your shorten links at one place. <span>Privacy & Terms </span>
                                </div>
                            </div>

                            <div className="col-12 col-sm-3">
                                <button className="url-btn btn btn-lg text-white" onClick={ onSubmit } href='/'>
                                    Shorten   
                                </button>
                            </div>
                        </div>
                    </div>

                {shortUrl && (
                    <div className="short-links container card text-dark mt-5">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">

                            {errorMsg()}
                                
                                <li className="list-group-item row d-flex p-1 mt-1">
                                    <span className="col-lg-7 pt-1">{longUrl}</span>
                                    <a className="col-lg-4 list-group-links pt-1" href={`${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                                    <span className="col-lg-1">
                                        <button type="button" className="copy btn btn-light text-primary">Copy</button>
                                    </span>
                                </li>

                            </ul>
                        </div>
                    </div>
                )}

                </form>

            </div>
            
    </>
)

    return (
        <>
            {shortenUrlArea()}
        </>
    )
}

export default ShortenUrl