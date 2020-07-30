const URL = require('../models/url')

const validUrl = require('valid-url')
const shortid = require('shortid')

exports.shortenURL = async ( req, res ) => {

    const { originalUrl } = req.body
    const baseUrl = process.env.baseUrl

    if(!validUrl.isUri(baseUrl)) {
        return res.status(400).json({
            error : 'Invalid base url'
        })
    }

    const urlCode = shortid.generate()

    if(validUrl.isUri(originalUrl)) {
        try {
            let url = await URL.findOne({ originalUrl })

            if(url) {
                res.json(url)
            }
            else {
                const shortUrl = baseUrl + '/' + urlCode

                    url = new URL({
                        originalUrl,
                        shortUrl,
                        urlCode,
                        user,
                        date: new Date()
                    })
    
                    await url
                    .save()
                    res.json(url)    
            
            }
        } catch (err) {
            console.log(err)
            res.status(500).json({
                error : 'Server Error'
            })
        }
    }
    else {
        res.status(400).json({
            error : 'Invalid Url'
        })
    }
}   