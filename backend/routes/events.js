const express = require('express');
const Event = require('../models/Event')
const {auth,adminAuth} = require('../middleware/authMiddleware')
const router = express.Router();

// get All Events
router.get('/',async (req,res)=>{
    const events = await Event.find();
    res.json(events);
});

//get by ID
router.get('/:id',async (req,res)=>{
    try{
        const event = await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({message:"Event Doesn't Match"})
        }
        res.json(event)
    }catch(err){
        res.status(400).json({message:"Invalid event ID"})
    }
});

//create Event
router.post('/',auth,adminAuth,async (req,res)=>{
    const event = new Event(req.body);
    await event.save()
    res.status(201).json(event);
})

//Update Event
router.put('/:id',auth,adminAuth,async (req,res)=>{
    try{
        const event = await Event.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!event){
            return res.status(404).json({message:'Event Not Found'})
        }
        res.json(event);
    }catch(err){
        res.status(400).json({message:'Invalid ID'})
    }
})

//Delete Event
router.delete('/:id',auth,adminAuth,async (req,res)=>{
    try{
        const event = await Event.findByIdAndDelete(req.params.id);
        if(!event){
            return res.status(404).json({message:'Event Not Found'})
        }
        res.json({message:'Event Deleted'})
    }catch{
        res.status(400).json({message:'Invalid ID'})
    }
});

module.exports = router;