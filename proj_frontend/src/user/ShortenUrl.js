import React from 'react'

const ShortenUrl = () => {
    return (
        <>
            <div className="shorten-url text-white pt-4 pb-5 mb-5">
                <form>
                    <div className="form-group">
                        <div className="row container m-auto">
                            <div className="col-9">
                                <input type="text" className="form-control url-field" placeholder="Shorten your link"/>
                            </div>

                            <div className="col-3">
                                <button className="url-btn btn btn-primary btn-lg text-white">
                                    Shorten   
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ShortenUrl
