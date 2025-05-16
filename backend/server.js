require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose')
const app = express();
app.use(express.json)

mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{console.log("DB Connected")}).catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send('Hello world!')
})
app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.listen(4000,()=> console.log("Server On!"));

const crypto = require('crypto');
console.log(crypto.randomBytes(64).toString('hex'));