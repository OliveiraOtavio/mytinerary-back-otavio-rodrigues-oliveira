import Activity from "../../models/Activity.js";

export default async (req, res, next)=> {
try {
let deletedActivity = await Activity.findByIdAndDelete(req.params.id)
return res.status(200).json({
success: true,
message: 'Activity deleted',
response: deletedActivity._id
 })
 } catch (error) {
    next(error)
 }
}