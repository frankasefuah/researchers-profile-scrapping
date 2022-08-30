const PORT = 8000
const axios = require('axios')
const cheerio = require("cheerio")
const express = require('express')

const app = express()

// Url to scrape 
const url = 'https://dcs.ug.edu.gh/faculty'

axios(url)
    .then(res => {
        const html = res.data
        const $ = cheerio.load(html)
        const profiles = []
        console.log(html);

        $('.fc-item__title', info).each(function () {
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles);
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))