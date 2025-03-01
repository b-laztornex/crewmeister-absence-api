const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "",
  database: "crewmeister_db",
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
