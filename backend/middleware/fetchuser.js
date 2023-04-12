var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Harryisagoodboy';

const fetchuser = (req, res, next) => {
     //Get the user from the jwt token and add id to req object
     const token = req.header('auth-token');
     if (!token) {
          res.send({ error: "Please authenticate yourself using valid token" });
     }
     try {
          const data = jwt.verify(token, JWT_SECRET);
          req.user = data.user;
          next();
     } catch (error) {
          res.send({ error: "Please authenticate yourself using valid token" })
     }
}

module.exports = fetchuser;