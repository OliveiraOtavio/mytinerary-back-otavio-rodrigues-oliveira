import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.it_id,
            req.body,
            {new:true} 
        ).select("name price duration city_id photo")
        return res.status(200).json({
            success: true,
            message: 'Itinerary updated!',
            response: updatedItinerary
        })
    } catch (error) {
        next(error);
    }
}