import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        console.log(req.query)
        
        let objetoDeBusqueda = {} 
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) { // Query para buscar
            objetoDeBusqueda.city_id = req.query.city_id
        }

        if (req.query.itinerary){ // para el filtro de cities
            objetoDeBusqueda.itinerary = new RegExp('^' + req.query.itinerary, 'i') // el regexp es por SI INCLUYE el termino
        }

        if (req.query.sort) { // Query para ordenar
            objetoDeOrdenamiento.Itinerary = req.query.sort // si es 1, ordena de manera ascedente y si es -1 lo ordena de manera descendente
        }

        let allItineraries = await Itinerary
                .find(objetoDeBusqueda, 'name price duration city_id photo')
                .populate('city_id', 'name price duration -_id')
                .sort(objetoDeOrdenamiento) //primera manera de filtrar es pasando despues del objeto vacio {} lo que quiero filtrar
       //let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id', 'photo name mail -_id') // Segundo metodo de filtrar

       // condicional para que no devuelva un Array vacio
        if (allItineraries.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No itineraries found with your search terms",
                response: []
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Itinerary found',
            response: allItineraries
        })
    } catch (error) {
        next(error)
    }
}