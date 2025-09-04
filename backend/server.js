import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectDb } from './libs/db'



const app = express()

app.use(cors({origin: "*"}))
app.use(express.json({limit: "4mb"}))


await connectDb();