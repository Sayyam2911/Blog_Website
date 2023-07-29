import expresss from 'express'
import Connection from './database/db.js'
const app = expresss()
import dotenv from 'dotenv'
dotenv.config();
const PORT = 8000
app.listen(PORT,() => {console.log(`Server is Running Successfully on PORT ${PORT}`)})
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
Connection(USERNAME,PASSWORD);