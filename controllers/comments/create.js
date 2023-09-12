import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
  try {
    // Crear el comentario
    let newComment = await Comment.create(req.body);

    // Poblar solo el nombre y la foto del usuario que creó el comentario
    const populatedComment = await Comment.findById(newComment._id).populate({
      path: "admin_id",
      select: "name photo"
    });
    console.log(populatedComment)
    // Crear una respuesta personalizada
    const response = {
      //name: populatedComment.admin_id.name,
      //photo: populatedComment.admin_id.photo,
      createdAt: populatedComment.createdAt
    };

    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
      response: response
    });
  } catch (error) {
    next(error);
  }
};
