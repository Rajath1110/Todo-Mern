import mongoose from "mongoose";

const connect  = async (req,res) =>{
    try{
        await mongoose.connect('mongodb+srv://root:root@cluster0.bzuoq8d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{
            console.log("Connected to MongoDB");
        })
        
    }
    catch(err){
        console.log(err);
    }

};
export default connect;