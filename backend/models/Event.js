const mongoose = require('mongoose')
const eventSchema =  new mongoose.Schema(
    {
        title:{type:String,required:true},
        date:{type:String,required:true},
        time:{type:String,required:true},
        location:String,
        cost:{type:String,required:true},
        Description:String,
        Category:String,
        map:String,
        img:{type:String,required:true},
    }
)
module.exports = mongoose.model('Event',eventSchema)