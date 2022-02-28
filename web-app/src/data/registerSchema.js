import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/))
    .message("Please enter a valid name"),

    email: Joi.string()
    .email({ tlds: { allow: ['com', 'net'] } })
    .messages({
      "string.email": "Email is invalid",
      'string.empty': "Please enter email"
    }),

    password: Joi.string()
    .min(8)
    .messages({
      'string.empty': "Please enter password",
      "string.min": "Password should contain at least 8 characters"
    }),

    passwordConfirm: Joi.any()
    .valid(Joi.ref('password')).error(new Error('Must match password')),

    bloodtype: Joi.string()
    .valid('O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-').error(new Error('Invalid blood type')),

})

export default schema

