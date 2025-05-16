const express = require('express')
const Booking = require('../models/Booking')
const {auth} = require('../middleware/authMiddleware')
const router = express.Router();

//Book Ticket
router.post('/',auth,async (req,res)=>{
    try{
        const {EventID} = req.body;
        if(!EventID){
            return res.status(400).json({message:'Please Enter Event ID'})
        }
        const booking = new Booking({
            user:req.user.id,
            event:EventID
        })
        await booking.save();
        res.status(201).json({message:'Ticket Booked Successfuly'})
    }catch(err){
        res.status(500).json({message:err.message})
    }
})

//get All Bokings
router.get('/user',auth,async (req,res)=>{
    const allBookings = await Booking.find({user:req.user.id}).populate('event')
    res.json(allBookings)
})

module.exports = router;