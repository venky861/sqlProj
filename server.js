const express = require ('express')
const app = express()

const connectMysqlDb = require('./config/db')

// connect to mySql DB
connectMysqlDb()


const port = process.env.port || 5000

app.use('/', require('./routes/api/auth'));
app.use('/createDB', require('./routes/api/createTable'));
app.use('/createTable', require('./routes/api/createTable'));
app.use('/insertTable', require('./routes/api/insertTable'));
app.use('/fetchTable', require('./routes/api/fetchTable'));


// app.use('/fetchTable', require('./routes/api/fetchTable'));

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

