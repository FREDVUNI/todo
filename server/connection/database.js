const mongoose = require("mongoose")
const connectDB = async() => {
    try{
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useNewUrlParser:true
        })
        console.log(`Database connected to ${con.connection.host}`)
    }
    catch(error){
        console.log(`something went wrong ${error}`)
        process.exit(1)
    }
}

module.exports = connectDB

