const customErrorList = {
  REQUIRED_FIELDS: { message: 'Some required fields are missing', code: 400 },
  INVALID_FIELDS: { message: 'Invalid fields', code: 400 },
  USER_ALREADY_REGISTERED: { message: 'User already registered', code: 409 },
  TOKEN_NOT_FOUND: { message: 'Token not found', code: 401 },
  INVALID_TOKEN: { message: 'Expired or invalid token', code: 401 },
  USER_NOT_FOUND: { message: 'User does not exist', code: 404 },
  CATEGORY_NOT_FOUND: { message: '"categoryIds" not found', code: 400 },
  MISSING_FIELDS: { message: 'Some required fields are missing', code: 400 },
  POST_DOES_NOT_EXIST: { message: 'Post does not exist', code: 404 },
  UNAUTHORIZED_USER: { message: 'Unauthorized user', code: 401 },
};

module.exports = customErrorList;