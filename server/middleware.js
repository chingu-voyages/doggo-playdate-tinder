const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan-body");
const jwt = require("jsonwebtoken");

const middleware = app => {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.disable("x-powered-by");

  app.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
      const { username } = jwt.verify(token, process.env.APP_SECRET);
      //put username onto req
      req.username = username;
    }
    next();
  });

  logger(app);

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
  }
};

module.exports = middleware;
