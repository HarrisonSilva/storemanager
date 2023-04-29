const joi = require('joi');

const validateSale = (req, res, next) => {
  const data = req.body;
  const validator = joi.array().items(
    joi.object({
      productId: joi.number().integer().required()
        .messages({ 'any.required': '"productId" is required' }),
      quantity: joi.number().required().min(1).integer()
        .messages({ 'any.required': '"quantity" is required' }),
}),
  );
  const { error } = validator.validate(data);
   if (error && error.message.includes('equal')) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
  validateSale,
};