import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGODB).then(() => {
    console.log("connect to DB")
}).catch((err) => {
console.log(err)
})
const app = express()
const PORT = 3000
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})