const { connect, mole, tictactoe } = require('../controllers/games')


const router = require('express').Router()

router
    .route('/connect')
    .get(connect)

router
    .route('/mole')
    .get(mole)

router
    .route('/tictactoe')
    .get(tictactoe)
    
module.exports =router