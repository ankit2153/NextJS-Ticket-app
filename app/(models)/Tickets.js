import mongoose,{Schema} from "mongoose";

const uri = "mongodb+srv://nextuser:next21@cluster0.dyx3nsy.mongodb.net/TicketsDB";


mongoose.connect(uri);

mongoose.Promise = global.Promise;

const ticketSchema  = new Schema(

    {
        title:String,
        description:String,
        progress:Number,
        category:String,
        priority:Number,
        status:String,
        active:Boolean
    },
    {
        timestamps:true,
    }

);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket",ticketSchema);

export default Ticket;

