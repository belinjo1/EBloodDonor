import Joi from "joi";

const schema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/))
    .message("Please enter a valid name"),

  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .messages({
      "string.email": "Email is invalid",
      "string.empty": "Please enter email",
    }),

  bloodtype: Joi.string()
    .valid("O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-")
    .error(new Error("Invalid blood type")),

  city: Joi.string()
    .valid(
      "Prishtinë",
      "Mitrovicë",
      "Pejë",
      "Prizren",
      "Ferizaj",
      "Gjilan",
      "Gjakovë"
    )
    .error(new Error("Invalid City name")),

  role: Joi.string()
    .valid("admin", "user")
    .error(new Error("Invalid user role")),
});

export default schema;
