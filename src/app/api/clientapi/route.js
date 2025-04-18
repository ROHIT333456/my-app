
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET() {
    return NextResponse.json({ message: "iuus" });
}


export async function POST(request) {
    let payload=await request.json();
    let result;
    let success=false;
    await mongoose.connect("mongodb://localhost:27017/shivamlocalserviceprovider")
   .then(()=>{
    console.log("connect");
   })
   .catch((err)=>{
    console.log(err);
   })



   const cliectlogin=new clientSchemaModel(payload);
   result=await cliectlogin.Save();
console.log(result);
return NextResponse.json({
    result
})

   
}