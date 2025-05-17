const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/register', async (req,res)=>{
    try{
        const {username , password,role} = req.body;
        if(!username || !password){
            return res.status(400).json({message:'Please Enter Missing Fields'});
        }
        const alreadyUser = await User.findOne({username})
        if(alreadyUser){
            return res.status(400).json({message:'The User alreay exsist \n please try to Login'});
        }
        const EncriptedPass = await bcrypt.hash(password,10);
        const user = new User({username,password:EncriptedPass,role:role||'user'})
        await user.save()
        res.status(201).json({message:'User Succesfully Registered'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

router.post('/login', async (req,res)=>{
    try{
        const {username , password} = req.body;
        if(!username || !password){
            return res.status(400).json({message:'Please Enter Missing Fields'});
        }
        const alreadyUser = await User.findOne({username})
        if(!alreadyUser){
            return res.status(400).json({message:'Please Register first'});
        }

        const isMatched = await bcrypt.compare(password,alreadyUser.password);
        if(!isMatched){
            return res.status(400).json({message:'invalid User Data'});
        }
        const token = jwt.sign({id:alreadyUser._id,role:alreadyUser.role},process.env.JWT_SECRET)
        await user.save()
        res.status(201).json({message:'User Succesfully Logined',
            token,
            user:{
                id:alreadyUser._id,
                username:alreadyUser.username,
                role:alreadyUser.role
            }
        })
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
});
module.exports = router;