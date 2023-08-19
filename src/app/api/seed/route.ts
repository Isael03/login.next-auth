import { seedUser } from "@/services/seed/seed-users";
import { NextResponse } from "next/server";

 
export async function POST(){

    try {
        await seedUser()
        return NextResponse.json({message:"Executed Seed"}, {status:200})
    } catch (error) {
        return NextResponse.json({message:"Los datos ya existen en la base de datos"}, {status:500})
    }
}
    