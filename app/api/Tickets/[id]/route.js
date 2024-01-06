import Ticket from "@/app/(models)/Tickets";

import { NextResponse as res } from "next/server";

export const DELETE = async (req,{params}) =>{

    try {

        const {id} = params;

        await Ticket.findByIdAndDelete(id);

        return  res.json({message:"Ticket Deleted"},{status:200})


        
    } catch (error) {
        

        return  res.json({message:"Error",error},{status:500})
        
    }



}