import Joi from "joi";

let registerSchema = Joi.object({
    name: Joi.string().required().min(3).max(20).messages({
        'string.min': "The name must have at least 3 characters!",
        'string.max': "The name must have a maximum of 20 characters!",
        'any.required': "The name is required!",
        'string.empty': "The name field is not allowed to be empty!"
    }),
    lastName: Joi.string().required().min(3).max(20).messages({
        'string.min': "The last name must have at least 3 characters!",
        'string.max': "The last name must have a maximum of 20 characters!",
        'any.required': "The last name is required!",
        'string.empty': "The last name field is not allowed to be empty!"
    }),
    country: Joi.string().required().min(3).max(20).messages({
        'string.min': "The country must have at least 3 characters!",
        'string.max': "The country must have a maximum of 20 characters!",
        'any.required': "The country is required!",
        'string.empty': "The country field is not allowed to be empty!"
    }),
    mail: Joi.string().required().email().min(4).max(30).messages({
        'string.min': "Your email must have at least 4 characters!",
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
export default registerSchema