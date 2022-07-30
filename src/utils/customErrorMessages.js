const customErrorList = {
  REQUIRED_FIELDS: { message: 'Some required fields are missing', code: 400 },
  INVALID_FIELDS: { message: 'Invalid fields', code: 400 },
  USER_ALREADY_REGISTERED: { message: 'User already registered', code: 409 },
};

module.exports = customErrorList;