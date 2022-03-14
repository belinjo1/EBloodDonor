import Joi from "joi";

const schema = Joi.object({
  name: Joi.string()
    .pattern(new RegExp(/^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/))
    .message("Please enter a valid name"),

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
});

export default schema;
