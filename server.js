const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const cors = require('cors')
const routes = require('./routes')

const app = express()//var port = process.env.PORT || 1337;
app.set('port', process.env.PORT || 8000)
const dbOptions = {
    charset: 'utf8mb4',
    host: 'sql3.freesqldatabase.com',
    port: '3306',
    user: 'sql3500106',
    password: 'qrSJMYr6vX',
    database: 'sql3500106'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())
// routes -------------------------------------------
/*app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})*/
//app.use('/productos', routes)
app.use('/', routes)

// server running -----------------------------------
app.listen(port,()=>{
    console.log('Server running in port: ' + port)
    })

/*app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
    //console.log()
    console.log('http://localhost:' + app.get('port'))
})*/
