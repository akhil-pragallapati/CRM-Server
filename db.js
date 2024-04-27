const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:16april1999@cluster0.1zb8l6h.mongodb.net/crm_db?retryWrites=true&w=majority&appName=Cluster0'

module.exports = () => {
    return mongoose.connect(dbUri)
}

