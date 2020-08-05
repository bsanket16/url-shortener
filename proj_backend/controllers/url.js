const URL = require('../models/url')
const User = require('../models/user')

const validUrl = require('valid-url')
const shortid = require('shortid')
const url = require('../models/url')

exports.shortenURL = async ( req, res ) => {

    const user = await User.findOne({ _id: req.params.userId })

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
                        date: new Date()
                    })
    
                    await url.save()

                    user.links.push(url)
                    await user.save()

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

exports.publicShortenURL = async ( req, res ) => {

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
                        date: new Date()
                    })
    
                    await url.save()

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

exports.redirectURL = async ( req, res ) => {
    try {
        const url = await URL.findOne({ urlCode: req.params.code })

        if (url) {
            return res.redirect(url.originalUrl)
        } else {
            return res.status(404).json({
                error : 'No URL Found'
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error : 'Server Error'
        })
    }
}