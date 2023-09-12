import { model, Schema, Types } from "mongoose";

let collection = "comments"
let schema = new Schema({
    content: { type: String, required: true },
    admin_id: { type: Types.ObjectId, ref: 'users' },
    itinerary_id: { type: Types.ObjectId, required: true, ref: 'itineraries' },
}, {
    timestamps: true // para agregar la fecha de creacion de los datos
});

let Comment = model(collection, schema);

export default Comment;
