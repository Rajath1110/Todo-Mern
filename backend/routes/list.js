import express from 'express'
import User from '../models/model.user.js'
import List from '../models/model.list.js'

const router = express.Router();
//create 
router.post('/addlist', async (req, res) => {
    try {
        const { title, body, email } = req.body;

        // Check for missing fields
        if (!title || !body || !email) {
            return res.status(400).json({ message: "Missing required fields: title, body, or email" });
        }

        // Find the user by email
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create a new list item
        const list = new List({ title, body, user: existingUser._id });
        await list.save();

        // Add the list item to the user's list
        existingUser.list.push(list._id);
        await existingUser.save();

        res.status(200).json({ list });
    } catch (err) {
        console.error("Error creating task:", err); // Log detailed error information
        res.status(400).json({ message: "Error in creating task", error: err.message });
    }
});


//update

router.put('/updatetask/:id', async (req, res) => {
    try {
        const { title, email, body } = req.body;
        const existingUserVerification = await User.findOne({ email });

        if (!existingUserVerification) {
            return res.status(404).json({ message: 'User not found' });
        }

        const list = await List.findOneAndUpdate(
            { _id: req.params.id, user: existingUserVerification._id },
            { title, body },
            { new: true } // This returns the updated document
        );

        if (!list) {
            return res.status(404).json({ message: 'List not found or not authorized to update this list' });
        }

        res.status(200).json({ message: 'Task updated successfully', list });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

//delete
router.delete('/deletetask/:id',async (req,res)=>{
    try {
        const {email} = req.body;
        const existingUserVerification = await User.findOne(
            {email},
            {$pull:{list:req.params.body}}    
        );
        if(existingUserVerification){
            await List.findByIdAndDelete(req.params.id).then(()=>res.status(200).json({message:"Task deleted"}));
        }
        if(!list){
            return res.status(200).json({message:"Task deleted Succesfully"});
        }
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})


router.get('/getlist/:id', async (req,res)=>{
    try {
        const list = await List.find({user:req.params.id}).sort({createdAt:-1});
        if(list.length !== 0){
            res.status(200).json({list})
        }
        else{
            res.status(404).json({message:"No tasks created"});
        }
    } catch (error) {
        res.status(400).json({message:"Error while fetching"});
        
    }
})



export default router;