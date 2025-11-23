const { homePage } = require('../controllers/home')

const router=require('express').Router()

router
    .route('/')
    .get(homePage)

module.exports =router