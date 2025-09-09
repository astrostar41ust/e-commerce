import { generateToken } from "../libs/generateToken.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import validator from 'validator'

// Controller to login a user

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await userModel.findOne({ email });

        if (!userData) {
            return res.json({ success: false, message: "User doesn't exists" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, userData.password);

        if (!isPasswordCorrect) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        const token = generateToken(userData._id);

        res.json({ success: true, token, message: "Login successfully" });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};


// Controller to Signup
export const signup = async (req, res) => {


    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }


        // Check user's sign up info
        const user = await userModel.findOne({ email });

        if (user) {
            return res.json({ success: false, message: "Account already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter password with atleast 8 charactor" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save()

        const token = generateToken(newUser._id);

        res.json({
            success: true,
            token,
            message: "Account created successfully",
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Admin login
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = generateToken(email+password)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}


