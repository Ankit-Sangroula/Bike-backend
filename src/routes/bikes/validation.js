import Joi from "joi";

export const bikeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string(),
});

// Middleware function for Express
export function validateBike(req, res, next) {
  const { error } = bikeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next(); // Validation passed, continue to the next middleware
}
