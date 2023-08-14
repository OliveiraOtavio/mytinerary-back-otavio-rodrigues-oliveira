import { model,Schema,Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type:String, required:true },
    city_id: { type:Types.ObjectId, required:true, ref:'cities' }, 
    price: { type:Number, required:true },
    duration: { type:Number, required:true }, // Averiguar si es type Number
    tags: { type:[String] },
    photo: { type:String, required:true },
    
    
})

let Itinerary = model(collection, schema)

export default Itinerary