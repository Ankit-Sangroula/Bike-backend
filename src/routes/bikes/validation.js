export const bikeValidation = (req, res, next) => {
  const { name, description, price } = req.body;
  if (!name || !description || !price) {
    return res.status(400).json({ message: "Name, description, and price are required" });
  }
  next();
};