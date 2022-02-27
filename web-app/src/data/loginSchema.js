import Joi from 'joi';

const schema = Joi.object({
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
      })
})

export default schema

