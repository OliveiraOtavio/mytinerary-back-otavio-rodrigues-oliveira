import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        console.log(req.query)
        
        let objetoDeBusqueda = {} 
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) { // Query para buscar
            objetoDeBusqueda.itinerary_id = req.query.itinerary_id
        }

        if (req.query.activity){ // para el filtro de cities
            objetoDeBusqueda.activity = new RegExp('^' + req.query.activity, 'i') // el regexp es por SI INCLUYE el termino
        }

        if (req.query.sort) { // Query para ordenar
            objetoDeOrdenamiento.Activity = req.query.sort // si es 1, ordena de manera ascedente y si es -1 lo ordena de manera descendente
        }

        let allActivities = await Activity
                .find(objetoDeBusqueda, 'name photo itinerary_id')
                .populate('itinerary_id', 'name photo price duration -_id')
                .sort(objetoDeOrdenamiento) //primera manera de filtrar es pasando despues del objeto vacio {} lo que quiero filtrar
       //let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id', 'photo name mail -_id') // Segundo metodo de filtrar

       // condicional para que no devuelva un Array vacio
        if (allActivities.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No activities found with your search terms",
                response: []
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Activity found',
            response: allActivities
        })
    } catch (error) {
        next(error)
    }
}