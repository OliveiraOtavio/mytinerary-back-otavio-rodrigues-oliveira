import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    const { itinerary_id } = req.query;

    if (!itinerary_id) {
        return res.status(400).json({
            success: false,
            message: 'Missing itinerary_id in the query',
            response: null
        });
    }

    try {
        let activities = await Activity.find({itinerary_id}).select("name photo itinerary_id -_id");
        if (activities && activities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Activities found',
                response: activities
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Activities not found for the provided itinerary_id',
                response: null
            });
        }        
    } catch (error) {
        next(error);
    }
}
