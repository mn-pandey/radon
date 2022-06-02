const express = require('express');
const externalModule = require('../logger/logger')
const externalModule2=require('../util/helper')
const externalmodule3=require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    externalModule.welcome()
    externalModule2.printDate()
    externalModule2.printMonth()
    externalModule2.getBatchInfo()
    externalmodule3.trim()
    externalmodule3.changetoLowerCase()
    externalmodule3.changetoUpperCase()

    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason