import { model,Schema } from "mongoose";

let collection = 'users'

let schema = new Schema ({
    name: { type:String, required:true},
    lastName: { type:String, required:true},          // sin agregar required:true, por default es false
    mail: { type:String, required:true, unique:true}, // unique:true para que no se acepte repetidos
    photo: { type:String, default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"}, // si no se manda lo que se requiere, se toma el archivo de default:
    password: { type:String, required:true},
    country: { type:String, required:true},
})

let User = model(collection, schema)

export default User