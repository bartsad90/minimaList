require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const listsRouter = require('./routers/lists')
const tasksRouter = require('./routers/tasks')
const authRouter = require('./routers/auth')

const dns = require('dns')
const connectDB = require('./db/connect')
dns.setServers(['8.8.8.8'])


app.use(express.json())
app.use('/api/v1/lists', listsRouter)
app.use('/api/v1/view-tasks', tasksRouter)
app.use('/auth', authRouter)
app.use('/', (req, res) => {
    res.send(`Welcome to minimaList`)
})

const start = async () => {
   await connectDB(process.env.MONGO_URI)
   app.listen(3000, () => {
    console.log(`Server is listening on port 3000`)
   })
}

start()