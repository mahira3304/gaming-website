const { navbar } = require('../controllers/navbar')

const router=require('express').Router()

router
    .route('/navbar')
    .get(navbar)

module.exports =router