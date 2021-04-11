const express = require("express")
const router = express.Router()


router.get('/', (req,res)=>{
	res.send(`this is my homepage`)

})

router.get('/second', (req,res)=>{
	res.send(`this is my second homepage`)

})

module.exports = router