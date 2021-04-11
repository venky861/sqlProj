const mysql = require ('mysql')

const connectMySql = () => {
	try {
		const db = mysql.createConnection({
			host: "oc5041241667",
			user: "root",
			password: "Venkitheviper3@",
			database:"venky",
			insecureAuth : true
		  })
		  db.connect((err)=>{
			if (err) throw err;
			console.log("Mysql has been Connected!");
		  })

		  global.db = db
		  
	}catch(err){
	console.log(err)
    process.exit(1)
	}

}

module.exports = connectMySql