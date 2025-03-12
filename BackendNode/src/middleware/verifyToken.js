const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const KeyToken = process.env.TOKEN_KEY;

if (!KeyToken) {
  throw new Error("TOKEN_JSON_KEY is not defined in environment variables");
}

/**
 * Middleware para verificar el JWT en el localStorage de la solicitud.
 * @param req Solicitud entrante al servidor
 * @param res Respuesta enviada al cliente
 * @param next Función para pasar al siguiente middleware
 */
module.exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token =
    authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

  console.log("Token recibido:", token);

  if (!token) {
    return res.status(403).json({
      authentication: "Token perdido en la Request",
      message: "No estas autorizado para hacer esto",
    });
  }

  try {
    const decoded = jwt.verify(token, KeyToken);
    req.body.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({
      authentication: "JWT verificacion Fallida",
      message: "Error verificando el token",
      error: err,
    });
  }
};