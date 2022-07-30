const joiValidator = (schema) => async (req, res, next) => {
  await schema.validateAsync(req.body);
  return next();
};

module.exports = joiValidator;