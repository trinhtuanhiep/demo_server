import express from 'express'
import mongoose from 'mongoose'
import userRoutes from '../Route/userRoute.js'
import authRoutes from '../Route/authRoute.js'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGODB).then(() => {
    console.log("connect to DB")
}).catch((err) => {
    console.log(err)
})
const app = express()
app.use(express.json())
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})