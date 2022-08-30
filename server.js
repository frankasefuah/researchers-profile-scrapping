const PORT = 8000
const axios = require('axios')
const cheerio = require("cheerio")
const express = require('express')

const app = express()

// Url to scrape 
const url = 'https://dcs.ug.edu.gh/faculty'

axios(url)
    .then(res => {
        // Create html var that holds all the html from the url
        const html = res.data
        // Allows us to pass through the html and save it as a $
        const $ = cheerio.load(html)
        // Create an array to contain the profiles
        const profiles = []
        console.log(html);

        $('.about-faculty', html).each(function () {
            // Create var name and assign text in class of faculty-name which are h5's 
            const name = $(this).find('.faculty-name').find('h5').text()

            // Create var email and assign email to it
            // const email = '';
            // if ($(this).find('.row').find('p').text().includes('@')) {
            //     return email = $(this).find('.row').find('p').text()
            // } else {
            //     return email = 'no email'
            // }
            const email = $(this).find('.row').find('p').text().includes('@') ? $(this).find('.row').find('p').text() : 'no email'
            console.log(email);

            const url = $(this).find('a').attr('href')
            profiles.push({
                name,
                email
            })
        })
        console.log(profiles);
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))