const express = require("express")
const router = express.Router()

router.get('/', (req,res)=>{
//	let sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
let customerData = {
		CommServName:"serv4",
		ClientName:"name3",
		AgentName:"ibm",
		InstanceName:"wipro",
		BackupsetName:"cts",
		subclientName:"accenture",
		Content:"cityy",
		SchedBackupType:"address",
		schedPattern:"part2",
		SchedBackupDay:"cycle",
		SchedBackupTime:"car",
		PolicyName:"wheeler",
		CopyName:"train",
		RetentionDays:"vechile",
		RetentionCycles:"backup",
}
let sql = "INSERT INTO customers SET ?";
db.query(sql,customerData ,function (err, result) {
    if (err) throw err;
    res.send('one record inserted')
  });
})

module.exports = router