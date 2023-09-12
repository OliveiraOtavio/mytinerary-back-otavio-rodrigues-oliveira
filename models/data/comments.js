import 'dotenv/config.js';
import mongoose from 'mongoose';
import Comment from '../Comment.js';

const comments = [{
    content: "¡Este itinerario es genial!",
    admin_id: "64da56391d189d05e644b4a8",  
    itinerary_id: "64d6c3a0edecca30188fc77b"  
},{
    content: "Realmente disfruté este recorrido.",
    admin_id: "64d64148df0016b09874a7b0",
    itinerary_id: "64d6c3a0edecca30188fc77b"
}];

mongoose.connect(process.env.LINK_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        return Comment.insertMany(comments);
    })
    .then(() => {
        console.log('done!');
        mongoose.disconnect(); // Cierra la conexión con la base de datos
    })
    .catch(err => {
        console.log(err);
        mongoose.disconnect(); // Asegúrate de cerrar la conexión incluso si hay un error
    });
