require('dotenv').config({
  path: `../.env`
})

module.exports = {
  "development": {
    // "username": process.env.DATABASE_USERNAME,
    "username": 'frengkifix',
    // "password": process.env.DATABASE_PASSWORD,
    "password": 'Jago123456!',
    // "database": process.env.DATABASE,
    "database": 'workingspace',
    // "host": process.env.DATABASE_HOST,
    "host": '192.168.83.98',
    'port': 8080,
    "dialect": "mysql"
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
}
