const { about } = require('../controllers/about')

const router=require('express').Router()

router
    .route('/about')
    .get(about)
    
module.exports =router