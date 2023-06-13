let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our Game Model
let Game = require('../models/game');
//const { response } = require('../config/app');

// Get Route for the Game List page
router.get('/', async (req, res, next) =>{
    try {
        let gameList = await Game.find();
        // console.log(gameList)

        res.render('game', {title: 'Game List', GameList: gameList})
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;