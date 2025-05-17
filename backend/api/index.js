require('dotenv').config()
const express = require('express')
const mongoose =require('mongoose')
const authRoutes =require('../routes/auth')
const eventRoutes =require('../routes/events')
const bookingRoutes =require('../routes/booking')
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())


app.get('/api',(req,res)=>{
    res.send('Welcome to API')
})
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("DB Connected")}).catch(err => console.log(err))
app.use('/api/auth',authRoutes)
app.use('/api/events',eventRoutes)
app.use('/api/bookings',bookingRoutes)
app.listen(4000,()=> console.log("Server On!"));
