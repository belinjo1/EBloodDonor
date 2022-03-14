import Joi from "joi";

const schema = Joi.object({

  title: Joi.string().min(4).messages({
    "string.empty": "Please enter title",
    "string.min": "Title should contain at least 4 characters",
  }),
  text: Joi.string().min(4).messages({
    "string.empty": "Please enter description",
    "string.min": "Description should contain at least 4 characters",
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
});

export default schema;
