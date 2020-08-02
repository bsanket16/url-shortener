import React from 'react'

const ShortenUrl = () => {

    const shortenUrlArea = () => (
    <>
        <div className="shorten-url text-white pt-4 pb-5">
                
                <form>
                    <div className="form-group">
                        <div className="row container m-auto">
                            <div className="col-9">
                                <input type="text" className="form-control url-field" placeholder="Shorten your link"/>
                                <div className="sub-shorten-text float-right mt-1 mr-3">
                                    <span>Log in</span> to manage and track all your shorten links at one place. <span>Privacy & Terms </span>
                                </div>
                            </div>

                            <div className="col-3">
                                <button className="url-btn btn btn-primary btn-lg text-white">
                                    Shorten   
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="short-links container card text-dark mt-5">
                    <div className="card-body">
                        <ul class="list-group list-group-flush">
                            
                            <li class="list-group-item row d-flex p-3 mt-1">
                                <span className="col-lg-7">https://getbootstrap.com/docs/4.0/components/card/d4.0/components/card</span>
                                <span className="col-lg-4 list-group-links">https://powerful-basin.heroku.app.com</span>
                                <span className="col-lg-1">
                                    <button className="copy btn btn-light text-primary mb-2">Copy</button>
                                </span>
                            </li>

                            <li class="list-group-item row d-flex p-3 mt-1">
                                <span className="col-lg-7">https://getbootstrap.com/docs/4.0/componennents/carddocs/.0/components/card</span>
                                <span className="col-lg-4 list-group-links">https://powerful-basin.heroku.app.com</span>
                                <span className="col-lg-1">
                                    <button className="copy btn btn-light text-primary mb-1">Copy</button>
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>

            {/* <div className="scroll-text text-center text-muted">
                <div>Scroll to learn more</div>
                <i className="las la-angle-down la-lg text-muted"></i>
            </div> */}
            
    </>
)

    return (
        <>
            {shortenUrlArea()}
        </>
    )
}

export default ShortenUrl
