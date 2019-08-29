// connection from our server using the Mongoose library

const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Conenction error', e.message)
    })

const db = mongoose.connection
console.log(db);
module.exports = db