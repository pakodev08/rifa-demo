import mongoose, {Schema, model} from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
        
        })
        console.log(`Se ha conectado la base de datos`);
    } catch (error) {
        
    }
    
}

export {
    connectDB
}