

const request = require ("request")
const url = "https://api.weatherapi.com/v1/current.json?key=737a5e13cd8e4870b3f180443241907&q=egypt"
    request  ({url, json : true} , (error , response) => {
        if (error) {
            console.log("ERROR HAS OCCURED")
        } else if (response.body.error){
            console.log(response.body.error.massage)
        } else {
            console.log(response.body.location.name ,response.body.current.condition.text)
        }
    })


const forcast = require("./data/forcast")
const geocode = require("./data/geocode")

const country = process.argv[2]

geocode (country , (error , data) => {
    console.log("ERROR :" , error)
    console.log("DATA :" , data)

    forcast( data.latitude , data.longtitude , (error , data) =>{
        console.log("ERROR :" , error)
        console.log("DATA :" , data)
    })
})


