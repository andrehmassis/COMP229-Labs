let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our Game Model
let Game = require('../modules/game');

//Get Route for the Game List Page
router.get('/', async (req, res, next) =>{
    try {
        let gameList = await Game.find();
        console.log(gameList);
    }catch (err){
        console.error(err);
    }
})

module.exports = router;