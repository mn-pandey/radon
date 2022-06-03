const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.get('/sol1',function(req,res){
    let num1=[1,2,3,4,5,7,8]
    let total =0;
    let len=num1.length
    for(var i in num1){
        total += num1[i];
    }
    let frstDigit = num1[0]
    let lstDigit= num1[len-1]
    let sum=(len+1)*((frstDigit+lstDigit)/2)
    let missingNumber=sum-total;
    res.send({data : missingNumber});

});

app.get('/sol2', function(req,res){
    let num1 =[33,34,35,37,38]
    let total=0;
    let len=num1.length
    for(var i in num1){
        total += num1[i]
    }
    let firstDigit=num1[0]
    let lastDigit =num1[len-1]
    let sum = (len+1)*((firstDigit+lastDigit)/2)
    let missingNumber=sum-total;
    res.send({data: missingNumber})
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


