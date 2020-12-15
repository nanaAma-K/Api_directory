const express = require('express')
const adminRouter = express.Router()
const authentication = require('../middleware/auth')


adminRouter.post('/login', (req, res)=>{
    const {username, password}= req.body
    const token = authentication.generateAccesToken(username)
    res.status(200).send ({"message":"Logged in successfully","token":token})

})


adminRouter.post('/logout',(resq , res)=>{

})

module.exports = adminRouter