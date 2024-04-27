const mongoose = require('mongoose')

module.exports = mongoose.model('Crm', {
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phoneNumber: { type: Number },
})