/** @type {import('express').ErrorRequestHandler} */
const handleError = (err, req, res, _next) => {
  const errorMap = {
    REQUIRED_FIELDS: { message: 'Some required fields are missing', code: 400 },
    INVALID_FIELDS: { message: 'Invalid fields', code: 400 },
  };
  const error = errorMap[err.message];
  if (error) return res.status(error.code).json({ message: error.message });
  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = handleError;