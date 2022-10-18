var express = require('express');
const { render } = require('../app');
var router = express.Router();

//import place model

const Place = require('../models/place')

//GET: /places => list all places in db
router.get('/', (req,res) =>{
    //use Mongoose model to find data
    Place.find((err, places) =>{
        if(err) {
            console.log(err)
        }
        else{
            res.render('places/index', {
               places: places 
            })
        }
    })
})

router.get('/create',(req,res) => {
    res.render('places/create')
})
//PPOST: /places/create/ form submission to add new place
router.post('/create', (req,res) =>{
    Place.create(req.body,(err, place) => {
        if(err){
            console.log(err)
            res.end(err)
        }
        else{
            res.json(place)
        }
    })
})