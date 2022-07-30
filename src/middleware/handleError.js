const customErrorList = require('../utils/customErrorMessages');

/** @type {import('express').ErrorRequestHandler} */
const handleError = (err, req, res, _next) => {
  const error = customErrorList[err.message];
  if (error) return res.status(error.code).json({ message: error.message });
  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = handleError;