const credentials = require("./config/mysqlCredentials.js");

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    }
  }

};
