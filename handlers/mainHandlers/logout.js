function logOut(req, res, next) {
  const accessCookie = req.cookies["access_token"];

  if (!accessCookie) {
    const err = new Error("cookie not found");
    err.status = 404;
    next(err);
  } else {
    res.clearCookie("access_token");
    res.status(200).send("YOU ARE LOGED OUT");
  }
}

module.exports = logOut;
