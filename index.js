const morgan = require("morgan")
const dotenv = require("dotenv")
const path = require("path")
const express = require("express")
const connectDB = require("./server/connection/database.js")

const app = express()

app.use(morgan("tiny"))
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use("/css",express.static(path.resolve(__dirname,"./public/css")))
app.use("/js",express.static(path.resolve(__dirname,"public/js")))
app.use("/img",express.static(path.resolve(__dirname,"public/img")))
app.use("/webfonts",express.static(path.resolve(__dirname,"public/webfonts")))


app.use("/",require("./server/router/todoRouter"))
 
dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 8080
connectDB()

app.listen(PORT,()=>{
    console.log(`connected to http://localhost:${PORT}`)
})