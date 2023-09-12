import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.itinerary_id) {
            queries.city_id = req.query.itinerary_id
        }
        let allActivities = await Activity
        .find(queries, '-__v')
        .populate ({
            path: "itinerary_id",
            select: "name photo city_id",
            populate: {
                path:"city_id",
                select: "name photo",
            }
    })

    return res.status(200).json ({
        success: true,
        message: 'activities found successfully',
        response: allActivities
    })
} catch (error) {
    next(error);
}}