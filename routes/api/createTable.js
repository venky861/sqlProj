const express = require("express")
const router = express.Router()

router.get('/', (req,res)=>{
	let sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, CommServName VARCHAR(255), ClientName VARCHAR(255),AgentName VARCHAR(255),InstanceName VARCHAR(255),BackupsetName VARCHAR(255),subclientName VARCHAR(255),Content VARCHAR(255),SchedBackupType VARCHAR(255),schedPattern VARCHAR(255),SchedBackupDay VARCHAR(255),SchedBackupTime VARCHAR(255),PolicyName VARCHAR(255),CopyName VARCHAR(255), RetentionDays VARCHAR(255),RetentionCycles VARCHAR(255)";
	db.query(sql , (err,result)=>{
		if(err) throw err
		console.log(result)
		res.send(`table has been created`)
	})

	//res.send('table created')
})

module.exports = router