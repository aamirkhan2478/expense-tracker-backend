const process = require("process");

exports.notFound = (req, _res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
};

exports.errorHandler = (err, _req, res) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};