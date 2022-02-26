const mongoose = require('mongoose');
const temp = 'mongodb+srv://tensorgo:tensorgo123@cluster0.cafd2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(temp, {useNewUrlParser:true,})
        console.log(`Database connected to ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = connectDb;