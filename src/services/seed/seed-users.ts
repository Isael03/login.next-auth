import User from "@/models/user";
import { connectDB } from "@/libs/mongodb";
import {exampleUsers} from '@/data/user.data'
import { MongooseError } from "mongoose";
import { log } from "console";


export async function seedUser() {

   
        await connectDB();

        await User.insertMany(exampleUsers)
        
        console.log("Executed Seed");
    
 
 
  
}
