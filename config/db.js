const mongoose = require('mongoose')
const myDotEnv = require('dotenv').config()

const connectDb = async () => {

    try {
        const conn = await mongoose.connect(process.env.mongoDB, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        })  

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }

}

module.exports = connectDb