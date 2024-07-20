const request = require("request")


const forcast = (latitude , longtitude , callback) => {
    const url ="https://api.weatherapi.com/v1/current.json?key=737a5e13cd8e4870b3f180443241907&q=egypt"+ latitude + "," + longtitude
    request ({url , json : true} , (error , response) => {
        if (error){
            callback ("unable to connect weather api service" , undefined)
        } else if (response.body.error){
            callback (response.body.error.massage , undefined)
        } else {
            callback (undefined , response.body.location.name + " it is : " + response.body.current.condition.text 
            + "and temp is : "  + response.body.current.temp_c )
        }
    })
}

module.exports = forcast