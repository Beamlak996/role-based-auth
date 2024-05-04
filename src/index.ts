import "dotenv/config"
import express from "express"
import cors from "cors"
import compression from "compression"
import connectDB from "./utils/db"


const app = express()

app.use(cors())
app.use(compression())
app.use(express.json())

app.listen(3000, ()=> {
    console.log("Server listening to port 3000")
    connectDB()
})