import City from "../../models/City.js";

export default async (req, res, next) => {
  try {
    console.log(req.query);

    let objetoDeBusqueda = {};
    let objetoDeOrdenamiento = {};

    objetoDeBusqueda._id = { $ne: "64e157ac7653f025279ca322" };

    if (req.query.admin_id) {
      objetoDeBusqueda.admin_id = req.query.admin_id;
    }

    let cityExists = null;

    if (req.query.city) {
      objetoDeBusqueda.city = new RegExp("^" + req.query.city, "i");

      cityExists = await City.findOne({
        city: new RegExp("^" + req.query.city, "i"),
      });
    }

    if (req.query.sort) {
      objetoDeOrdenamiento.city = req.query.sort;
    }

    let allCities = await City.find(
      objetoDeBusqueda,
      "country city photo smalldescription admin_id"
    )
      .populate("admin_id", "photo name mail -_id")
      .sort(objetoDeOrdenamiento);

    if (allCities.length === 0 && req.query.city) {
      let notFoundCard = await City.findById("64e157ac7653f025279ca322").select(
        "photo city country"
      );
      if (notFoundCard) {
        return res.status(200).json({
          success: true,
          message: "Not found card",
          response: [notFoundCard],
        });
      } else {
        return res.status(404).json({
          success: false,
          message: "City not found and base card is missing.",
          response: [],
        });
      }
    } else if (allCities.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No cities found",
        response: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Cities found",
      response: allCities,
    });
  } catch (error) {
    next(error);
  }
};
