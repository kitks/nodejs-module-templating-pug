const express = require('express');
const path = require('path');
const { render } = require('pug');
const router = express.Router()
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log(`This is home`)
    console.log('shop.js', adminData.products)

    // sendFile - send html file / __dirname path before project folder
    // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))

    const products = adminData.products

    // render() the template
    res.render('shop', { prods: products, docTitle: 'My products', path:'/' })
})

module.exports = router