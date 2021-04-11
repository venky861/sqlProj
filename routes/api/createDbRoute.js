const express = require("express")
const router = express.Router()


router.get('/:db', (req,res)=>{
	let sql = `CREATE DATABASE ${req.params.db}`
	db.query(sql , (err,result)=>{
		if(err) throw err
		console.log(result)
		res.send(`${req.params.db} DB has been created`)
	})

})

module.exports = router