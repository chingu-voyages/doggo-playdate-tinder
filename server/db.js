const massive = require("massive");

const connect = app => {
  massive({connectionString:process.env.PG_CONNECTION_STRING, ssl:true})
    .then(db => {
      // Exposes the db at req.app.get('db')
      app.set("db", db);
    })
    .catch(err => console.log(err));
};

module.exports = connect;
