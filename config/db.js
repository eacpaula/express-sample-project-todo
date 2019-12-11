const mongoose = require('mongoose')

const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

module.exports = mongoose
            .connect(connectionString, { 
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then((result) => {
                console.log('Database Connected!')
            })
            .catch(err => {
                console.log(Error, err.message);
            });