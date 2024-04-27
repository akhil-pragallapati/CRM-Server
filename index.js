const express = require('express')
const bodyParser = require('body-parser')
//const cors = require('cors')

// local imports
const connectDb = require('./db.js')
const crmRoutes = require('./controllers/crm.controller')
//const { errorHandler } = require('./middlewares')


const app = express()

//middleware
app.use(bodyParser.json())
//app.use(cors({origin: 'http://localhost:4200'}))

// cores code should be before this 
app.use('/api/crms', crmRoutes)


//app.use(errorHandler)



connectDb()
    .then(() => {
        console.log(' db connected')
        app.listen(3000,() => console.log(' server started at 3000'))

    })
    .catch(err => console.log(err))