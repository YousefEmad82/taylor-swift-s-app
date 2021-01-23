const postmanRequest = require('postman-request')


const tailorSwift = (callback)=>{
const url = "https://api.taylor.rest/"

postmanRequest({url : url, json : true},(error,response)=>{

    console.log(response.body)
    callback(response.body)
    
})
}


module.exports = tailorSwift