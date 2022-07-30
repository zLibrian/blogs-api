const Joi = require('joi');
const customErrorList = require('../utils/customErrorMessages');

/** @type {import('express').ErrorRequestHandler} */
const handleError = (err, req, res, _next) => {
  const isJoiError = Joi.isError(err);
  if (isJoiError) return res.status(400).json({ message: err.message });

  const error = customErrorList[err.message];
  if (error) return res.status(error.code).json({ message: error.message });

  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = handleError;