
import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
    try {
        let queries = {}
        const itinerary_id = req.query.itinerary_id;

        // Si se proporciona un itinerary_id, busca comentarios para ese itinerario
        if (itinerary_id) {
            const comments = await Comment.find({ itinerary_id: itinerary_id });
            if (comments.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'Comments found',
                    response: comments
                });
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'No comments found for this itinerary',
                    response: null
                });
            }
        }

        // Si no se proporciona un itinerary_id, devuelve todos los comentarios
        let allComments = await Comment
        .find(queries, '-__v -createdAt -updatedAt')
        .populate({
            path: "itinerary_id",
            select: "name city_id",
            populate: [{
                path: "city_id",
                select: "city admin_id",
                populate: {
                    path: "admin_id",
                    select: "name lastName mail photo country",
                }
            }]
        });

        return res.status(200).json({
            success: true,
            message: 'All comments found',
            response: allComments
        });
        
    } catch(error) {
        next(error);
    }
}
