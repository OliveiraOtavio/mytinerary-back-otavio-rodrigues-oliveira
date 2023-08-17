import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(
            req.params.ac_id,
            req.body,
            {new:true} 
        ).select("name photo itinerary_id")
        return res.status(200).json({
            success: true,
            message: 'Activity updated!',
            response: updatedActivity
        })
    } catch (error) {
        next(error);
    }
}