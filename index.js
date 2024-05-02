const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// local imports
const connectDb = require('./db.js')
const crmRoutes = require('./controllers/crm.controller')
const { errorHandler } = require('./middlewares')


const app = express()

//middleware
app.use(bodyParser.json())
//app.use(cors({origin: 'http://localhost:4200'}))

// for the AWS Ec2 machine public Ip where the docker image is running
app.use(cors({origin: 'http://54.173.149.183:8081'}))


// cores code should be before this 
app.use('/api/crms', crmRoutes)


app.use(errorHandler)



connectDb()
    .then(() => {
        console.log(' db connected')
        app.listen(4000,() => console.log(' server started at 4000'))

    })
    .catch(err => console.log(err))