import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        console.log(req.query)
        //let objetoDeBusqueda = {} // dentro del {} puedo poner el parametro, por ejemplo el admin_id: 'aca va el object id' (es la forma "Hardcodeada" de hacerlo)
        let objetoDeBusqueda = {} 
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) { // Query para buscar
            objetoDeBusqueda.admin_id = req.query.admin_id
        }

        if (req.query.city){ // para el filtro de cities
            objetoDeBusqueda.city = new RegExp('^' + req.query.city, 'i') // el regexp es por SI INCLUYE el termino
        }

        if (req.query.sort) { // Query para ordenar
            objetoDeOrdenamiento.City = req.query.sort // si es 1, ordena de manera ascedente y si es -1 lo ordena de manera descendente
        }

        let allCities = await City
                .find(objetoDeBusqueda, 'country city photo smalldescription admin_id')
                .populate('admin_id', 'photo name mail -_id')
                .sort(objetoDeOrdenamiento) //primera manera de filtrar es pasando despues del objeto vacio {} lo que quiero filtrar
       //let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id', 'photo name mail -_id') // Segundo metodo de filtrar

       // condicional para que no devuelva un Array vacio
        if (allCities.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No cities found with your search terms",
                response: []
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Cities found',
            response: allCities
        })
    } catch (error) {
        next(error)
    }
}