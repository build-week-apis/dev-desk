module.exports = (req, res, next) => {
  if (
    req.decodedJwt.authType &&
    (req.decodedJwt.authType == "admin" || req.decodedJwt.authType == "helper")
  ) {
    next();
  } else {
    res.status(403).json({ message: "You're not authorized" });
  }
};
