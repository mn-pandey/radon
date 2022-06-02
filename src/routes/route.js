const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    const namesOfMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
    const chunkedMonth = lodash.chunk(namesOfMonth, 4)
    console.log(chunkedMonth)
    const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(oddNumber))
    const arr1 = [1, 2, 3];
    const arr2 = [2, 3, 4];
    const arr3 = [3, 4, 5];
    const arr4 = [4, 5, 6];
    const arr5 = [5, 6, 7];
    console.log(lodash.union(arr1, arr2, arr3, arr4, arr5));
    console.log(lodash.fromPairs([['horror', 'the shinning'], ['drama', 'titanic'], ['thriller', 'shutter island'], ['fantasy', 'pans Labyrinth']]))
    res.send('Hello there!')
});

router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})
router.get('/movies', function (req, res) {
    const marvelMovies = ['captain america', 'thor', 'iron man', 'Dr. Strange']
    res.send(marvelMovies)

})

router.get('/movies/:indexNumber', function (req, res) {
    const marvelMovies = ['captain america', 'thor', 'iron man', 'Dr. Strange']


    if (req.params.indexNumber > 3) {
        // console.log("use a valid index")
        res.send("use a valid index")
        return;

    }
    else {
        // console.log(marvelMovies[req.params.indexNumber])

        res.send(marvelMovies[req.params.indexNumber])
        return;
    }

})

router.get('/films', function (req, res) {
    const dcMovies = [{
        "id": 1,
        "name": "Super Man"
    },
    {
        "id": 2,
        "name": "wonder woman"
    },
    {
        "id": 3,
        "name": "Bat Man"
    },
    {
        "id": 4,
        "name": "justice league"
    }]
    res.send(dcMovies)

})


  router.get('/films/:filmId',function(req,res){
    const dcMovies = [{
        "id": 1,
        "name": "Super Man"
    },
    {
        "id": 2,
        "name": "wonder woman"
    },
    {
        "id": 3,
        "name": "Bat Man"
    },
    {
        "id": 4,
        "name": "justice league"
    }]
    if(req.params.filmId<5){
    res.send(dcMovies[req.params.filmId-1].name)
    return;
    }
    else{
        res.send("no such id exists")
        return;
    }
  })
module.exports = router;
// adding this comment for no reason