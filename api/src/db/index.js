import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  port: 5432,
  database: "todoapp_db",
});

export default pool;
