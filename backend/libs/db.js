import mongoose from 'mongoose'

export const connectDb = async () => {

    try {
        mongoose.connect.on('connection', () => {
            console.log('Connected to database')

        })

        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.log("Error connecting to database", error)
    }
} 