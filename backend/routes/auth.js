import express from 'express';
import User from '../models/model.user.js';
import bcrypt from 'bcrypt';

const router = express.Router();

const saltRounds = 10; // Define the number of salt rounds for bcrypt

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        
        res.status(201).json({ user });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// Signin route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            console.log("User not found");
            return res.status(400).json({ message: "Please signup first" });
        }

        console.log("User found:", user);

        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            console.log("Password comparison failed");
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const { password: _, ...others } = user._doc;
        res.status(200).json({ user: others });
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


export default router;
