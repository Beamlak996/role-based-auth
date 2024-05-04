import "dotenv/config"
import express from "express"
import cors from "cors"
import compression from "compression"
import cookieParser from "cookie-parser"

import connectDB from "./utils/db"
import { ErrorMiddleware } from "./middleware/error"


const app = express()

app.use(cors())
app.use(compression())
app.use(express.json())
app.use(cookieParser())


// unknown routes
app.all("*", (req: express.Request, res: express.Response, next: express.NextFunction)=> {
    const err = new Error(`Route ${req.originalUrl} is not found`) as any
    err.statusCode = 404
    next(err)
})


app.use(ErrorMiddleware)

app.listen(8000, ()=> {
    console.log("Server listening to port 8000")
    connectDB()
})