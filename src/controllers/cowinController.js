let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getByDistrict = async function (req, res) {
    try {
        let district = req.query.district_id;
        let date = req.query.date;
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })

    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getWeather = async function (req, res) {
    try {
        let city = req.query.q;
        let appid = req.query.appid;
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        res.status(200).send({ weather: result.data })
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getTemp = async function (req, res) {
    try {
        let city = req.query.q;
        let appid = req.query.appid;
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options);
        res.status(200).send({ temperature: result.data.main.temp })
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const getsortedcities = async function (req, res) {
    try {
        let cities = ["bangalore", "delhi", "kolkata", "mumbai", "chennai", "moscow", "london"];
        let objCities = [];
        let appid=req.query.appid
        for (i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
            obj.temp = options.data.main.temp;
            objCities.push(obj)
        }
        let sortedcities = objCities.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ data: sortedcities })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const addmeme = async function (req, res) {
    try {
        
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=hello&text1=there&username=Mn-Pandey&password=9219591303`,
            
        }
        let result = await axios(options);
        res.status(200).send({ data: result.data })
    }
    catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getByDistrict = getByDistrict
module.exports.getWeather = getWeather
module.exports.getTemp = getTemp
module.exports.addmeme = addmeme
module.exports.getsortedcities = getsortedcities