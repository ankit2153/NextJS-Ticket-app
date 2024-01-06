import Ticket from "../../(models)/Tickets";

import { NextResponse } from "next/server";

export const POST = async (req) =>{

    try {

        const body = await req.json();

        const ticketData = body.formData;

        await Ticket.create(ticketData);

        return NextResponse.json({message:"Ticket Created"},{status:201});

        
    } catch (error) {
        
        return NextResponse.json({message:"Error",error},{status:500});

        
    }


}

export const GET = async ()=>{

    try{

        const tickets = await Ticket.find();

        return NextResponse.json({tickets},{status:200});


    }catch(error){

        return NextResponse.json({message:"Error",error},{status:500});

    }


}