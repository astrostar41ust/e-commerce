
import jwt from "jsonwebtoken";


// Middleware to protect routes
export const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {

            return res.json({ success: false, message: "Unauthorized login" })
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        if (decodedToken.userId !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {

            return res.json({ success: false, message: "Unauthorized login" })
        }

        next();
    }
    catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}