const { CustomAPIError } = require("../errors/customErrors");

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong. Please try again" });
};

module.exports = errorHandlerMiddleware;
