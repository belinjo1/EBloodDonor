import Joi from 'joi';

const schema = Joi.object({
    title: Joi.string()
    .min(4)
    .max(50)
    .messages({
      "string.min": "Title is too short",
      'string.max': "Title is too long",
      'string.empty': "Please enter a title"
    }),

    email: Joi.string()
    .email({ tlds: { allow: ['com', 'net'] } })
    .messages({
      "string.email": "Email is invalid",
      'string.empty': "Please enter an email"
    }),

    text: Joi.string()
    .min(4)
    .max(600)
    .messages({
      "string.min": "Message is too short",
      'string.max': "Message is too long",
      'string.empty': "Please enter a message"
    }),

})

export default schema

