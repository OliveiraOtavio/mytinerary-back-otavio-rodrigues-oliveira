import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }
        let allComments = await Comment
        .find(queries, '-__v -createdAt -updatedAt')
        .populate ({
            path: "itinerary_id",
            select:"name city_id", // selecciona los campos que necesitas de Itinerary
            populate: [{
                path: "city_id",
                select: "city admin_id", // selecciona los campos que necesitas de City
                populate: {
                    path: "admin_id",
                    select: "name lastName mail photo country", // selecciona los campos que necesitas de User
                }
            }]
        })

        return res.status(200).json({
            success: true,
            message: 'comments found',
            response: allComments
        })
    } catch(error) {
        next(error);
    }
}
