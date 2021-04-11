const express = require("express")
const router = express.Router()

router.get('/:pageNumber', (req,res)=>{
	try{
		let totalCount = 0;
		const pageSize = 15;
		const page = Number(req.params.pageNumber) || 1
		
		let count = "SELECT count(*) FROM customers";
		

		db.query(count , (err,result)=>{
			if(err) throw err
			totalCount=result[0]['count(*)']
			console.log(totalCount)
		})

		let offSetCount = (pageSize * (page - 1))

		let sql = `SELECT * FROM customers LIMIT 15 OFFSET ${offSetCount}`;
		console.log('sql',sql)

		db.query(sql , (err,result)=>{
			if(err) throw err
			//console.log(result)
			res.json({
				pages: Math.ceil(totalCount / pageSize),
				page:page,
				queriedData:result
			})
		})

	}catch(err){
		res.send(err)
	}
	
})

router.get('/:ClientName/:pageNumber', (req,res)=>{
	try{
		let totalCount = 0;
		const pageSize = 15
 		const page = Number(req.params.pageNumber) || 1

		let count = `SELECT count(*) FROM customers where ClientName like '%${req.params.ClientName}%'`;

		db.query(count , (err,result)=>{
			if(err) throw err
			totalCount=result[0]['count(*)']
			console.log('res',totalCount)
		})


		let offSetCount = (pageSize * (page - 1))
		// 20 * (1 - 1) --> page 1
		// 10 * (2 - 1) --> page 2

		let sql = `SELECT * FROM customers where ClientName like '%${req.params.ClientName}%' LIMIT 15 OFFSET ${offSetCount}`;
		console.log('page' , page , 'offsetcount' , offSetCount )
		db.query(sql , (err,result)=>{
			if(err) throw err
			//console.log('array length',result.length)
			res.json({
				pages: Math.ceil(totalCount / pageSize),
				page:page,
				queriedData:result
			})
		})
	
	}catch(err){
		console.log(err)
		res.send(err)
	}
})


module.exports = router