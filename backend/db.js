const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hodlinfo",
  password: "Mayur#2004",
  port: 5432,
});

module.exports = pool;