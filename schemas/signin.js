import Joi from "joi";

let signinSchema = Joi.object({
    
    mail: Joi.string().required().email().min(5).max(30).messages({
        'string.min': "Your email must have at least 5 characters!",
        'string.max': "The email must have a maximum of 30 characters!",
        'any.required': "The email is required!",
        'string.empty': "The email field is not allowed to be empty!"
    }),
    password: Joi.string().required().alphanum().min(4).max(10).messages({
        'string.min': "Your password must have at least 4 characters!",
        'string.max': "The password must have a maximum of 10 characters!",
        'any.required': "The password is required!",
        'string.empty': "The password field is not allowed to be empty!"
    })

})
export default signinSchema