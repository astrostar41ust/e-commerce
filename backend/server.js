import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { connectDb } from './libs/db.js'
import connectCloudinary from './libs/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'


// App config
const app = express()
const port = process.env.PORT || 4000
await connectDb();
await connectCloudinary();

// Middleware
app.use(cors())
app.use(express.json())



// Api endpoint
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res) => {
    res.send("API is working")
})

app.listen(port, () => console.log("Server started on PORT:" + port))

